import styled from "styled-components";

import { COLORS } from "../../constants";

export const Wrapper = styled.label`
	display: block;
	position: relative;
	width: max-content;
	color: ${COLORS.gray700};
	transition: 0.2s ease-out;

	&:hover {
		color: ${COLORS.black};
	}
`;

export const IconWrapper = styled.div`
	position: absolute;
	bottom: 0;
	top: 0;
	margin: auto;
	height: max-content;
	width: max-content;
	pointer-events: none;
`;

export const StyledInput = styled.input`
	display: block;
	height: var(--height);
	width: var(--width);
	padding: 0;
	margin: 0;
	font-weight: 700;
	border: none;
	border-bottom: var(--border-width) solid ${COLORS.black};
	padding-left: var(--padding-left);
	font-size: var(--font-size);
	outline-offset: 2px;
	color: inherit;

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}
`;
