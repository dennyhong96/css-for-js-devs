import { render, fireEvent } from "../test-utils";
import { nanoid } from "nanoid";

import Homepage from "@pages/index";
import { waitFor } from "@testing-library/dom";
import { addurl, listUrls } from "@lib/api";

jest.mock("@lib/api", () => {
	return {
		listUrls: jest.fn(),
		addurl: jest.fn(),
	};
});

describe("Add new url", () => {
	let MOCK_DATA, NEW_FULL_URL, NEW_SHORT_URL, NEW_DATA;

	beforeAll(() => {
		// Mock implementation or return value
		listUrls.mockImplementation(() => {
			return new Promise(resolve => resolve(MOCK_DATA));
		});
		addurl.mockImplementation(({ url }) => {
			return new Promise(resolve => resolve({ ...MOCK_DATA, [NEW_SHORT_URL]: url }));
		});
	});

	beforeEach(() => {
		MOCK_DATA = {
			"http://localhost:3000/u/sseessee": "https://example.com",
			"http://localhost:3000/u/sseesstt": "https://example2.com",
			"http://localhost:3000/u/sseessaa": "https://example3.com",
		};
		NEW_FULL_URL = "https://testurl.com";
		NEW_SHORT_URL = `http://localhost:3000/u/${nanoid(8)}`;
		NEW_DATA = { ...MOCK_DATA, [NEW_SHORT_URL]: NEW_FULL_URL };
	});

	test("New short url should be generated for a new full url.", async () => {
		const { getByText, getByTestId } = render(<Homepage />);

		const input = getByTestId("url-input");
		const button = getByText("Shorten");

		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();

		fireEvent.change(input, { target: { value: NEW_FULL_URL } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(addurl).toBeCalledTimes(1);
			expect(addurl).toBeCalledWith({ url: NEW_FULL_URL });

			for (const shortUrl in NEW_DATA) {
				expect(getByText(shortUrl)).toBeInTheDocument();
				expect(getByText(NEW_DATA[shortUrl])).toBeInTheDocument();
			}
		});
	});
});
