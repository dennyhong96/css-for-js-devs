import styled from "styled-components";

import { COLORS } from "../../constants";

// export const IconWrapper = styled.div`
// 	position: absolute;
// 	right: 16px;
// 	top: 50%;
// 	transform: translateY(-50%);
// 	color: ${COLORS.gray700};
// `;

export const Wrapper = styled.div`
	&:focus-within {
		box-shadow: 0 0 0 2px #4374cb; /* -webkit-focus-ring-color */
	}

	&:hover {
		color: ${COLORS.black};
	}

	position: relative;
	width: max-content;
	color: ${COLORS.gray700};
	background: ${COLORS.transparentGray15};
	border-radius: 8px;
	font-size: 1rem;
	line-height: 1.1875;
	border: none;
	padding: 12px 52px 12px 16px;
	transition: 0.2s ease-out;
`;

export const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
`;

export const CustomSelect = styled.div`
	position: relative;
`;

export const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;
	width: max-content;
	height: max-content;
	color: ${COLORS.gray700};
	pointer-events: none;

	${Wrapper}:hover > & {
		color: ${COLORS.black};
	}
`;
