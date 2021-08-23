import React from "react";
import { render, fireEvent, waitFor } from "../test-utils";

import HomePage from "@pages/index";
import { addurl, listUrls } from "@lib/api"; // Jest knows we want to import the 'mocked' version

const MOCK_DATA = {
	"http://localhost:3000/u/sseessee": "https://example.com",
	"http://localhost:3000/u/sseesstt": "https://example2.com",
	"http://localhost:3000/u/sseessaa": "https://example3.com",
};

jest.mock("@lib/api", () => {
	return {
		addurl: jest.fn(({ url }) => new Promise(resolve => resolve({ ...MOCK_DATA, short: url }))),
		listUrls: jest.fn(() => new Promise(resolve => resolve(MOCK_DATA))),
	};
});

describe("HomePage", () => {
	beforeEach(() => {});

	// afterEach(cleanup); // Need to clean up document.body if appended node into body

	test("Should render all full urls and short urls.", async () => {
		const { getByText } = render(<HomePage />);

		await waitFor(() => {
			expect(listUrls).toBeCalledTimes(1);
		});

		for (const shortUrl in MOCK_DATA) {
			const fullUrl = MOCK_DATA[shortUrl];
			expect(getByText(shortUrl)).toBeInTheDocument();
			expect(getByText(fullUrl)).toBeInTheDocument();
		}
	});

	test("Should call addUrl api correctly on click.", async () => {
		const { getByText, getByTestId, container } = render(<HomePage />);
		// const { getByText, getByTestId, container } = renderIntoDocument(<HomePage />);

		expect(container.firstChild).toMatchSnapshot("HomePage"); // Container itself is always a div, so use firstchild

		const input = getByTestId("url-input");
		const button = getByText("Shorten");

		const fullUrl = "https://test.com";

		fireEvent.input(input, { target: { value: fullUrl } });
		fireEvent.click(button);

		expect(button.type).toBe("submit");
		expect(button).toMatchSnapshot();
		expect(input).toMatchSnapshot();

		await waitFor(async () => {
			expect(addurl).toBeCalledTimes(1);
			expect(addurl).toBeCalledWith({
				url: fullUrl,
				// date: expect.any(String),
			});
		});
	});
});
