import styled from "styled-components";

import { COLORS } from "../../constants";

const SIZES = {
	large: { borderRadius: "8px", height: "24px", padding: "4px" },
	medium: { borderRadius: "4px", height: "12px", padding: 0 },
	small: { borderRadius: "4px", height: "8px", padding: 0 },
};

export const Wrapper = styled.div`
	height: ${({ size }) => SIZES[size].height};
	border-radius: ${({ size }) => SIZES[size].borderRadius};
	padding: ${({ size }) => SIZES[size].padding};
	background: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;
`;

export const BarWrapper = styled.div`
	border-radius: 4px;
	height: 100%;
	overflow: hidden;
`;

export const Bar = styled.div`
	width: ${({ value }) => `${value}%`};
	background: ${COLORS.primary};
	height: 100%;
	transition: width 0.2s ease;
`;
