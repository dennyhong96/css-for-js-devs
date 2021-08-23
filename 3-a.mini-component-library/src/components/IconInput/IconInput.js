import React from "react";
import { Wrapper, IconWrapper, StyledInput } from "./styles";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
	small: {
		size: 16,
		strokeWidth: 1,
		paddingLeft: "26px",
		fontSize: "0.875rem",
		borderWidth: "1px",
		height: "24px",
	},
	large: {
		size: 24,
		strokeWidth: 2,
		paddingLeft: "40px",
		fontSize: "1.125rem",
		borderWidth: "2px",
		height: "36px",
	},
};

const IconInput = ({ label, icon, width = 250, size, placeholder, ...rest }) => {
	return (
		<Wrapper
			style={{
				"--padding-left": SIZES[size].paddingLeft,
				"--font-size": SIZES[size].fontSize,
				"--border-width": SIZES[size].borderWidth,
				"--width": `${width}px`,
				"--height": SIZES[size].height,
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			<StyledInput type="text" placeholder={placeholder} {...rest} />
			<IconWrapper>
				<Icon id={icon} size={SIZES[size].size} strokeWidth={SIZES[size].strokeWidth} />
			</IconWrapper>
		</Wrapper>
	);
};

export default IconInput;
