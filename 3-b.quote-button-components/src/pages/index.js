import styled from "styled-components";

import Breadcrumb from "@components/breadcrumb";
import ButtonTable from "@components/button-table";
import OneOffButton from "@components/button/one-off-button";

export default function CustomPaginationActionsTable() {
	return (
		<Stack>
			{/* Breadcrumb */}
			<Breadcrumb>
				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
				<Breadcrumb.Item href="/living">Living Room</Breadcrumb.Item>
				<Breadcrumb.Item href="/living/couch">Couches</Breadcrumb.Item>
				<Breadcrumb.Item href="/living/couch/sectional">Sectionals</Breadcrumb.Item>
			</Breadcrumb>

			{/* Buttons */}
			<ButtonTable />

			{/* One off button */}
			<OneOffButton size="small" variant="fill">
				One Off Button
			</OneOffButton>
		</Stack>
	);
}

const Stack = styled.div`
	padding: 3rem;
	display: grid;
	gap: 3rem;
	max-width: 800px;
	margin: 0 auto;
`;
