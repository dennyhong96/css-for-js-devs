import styled from "styled-components";

export const CrumbList = styled.ol``;

export const CrumbLink = styled.a`
	text-decoration: none;
	color: inherit;
	font-weight: bold;
`;

export const Crumb = styled.li`
	display: inline;

	&:hover {
		& > ${CrumbLink} {
			text-decoration: revert;
		}
	}

	&:not(:last-of-type) {
		margin-right: 10px;

		&::after {
			content: "";
			border: 1px solid currentColor;
			opacity: 0.25;
			display: inline-block;
			transform: rotate(15deg);
			height: 12px;
			margin-left: 10px;
		}
	}
`;
