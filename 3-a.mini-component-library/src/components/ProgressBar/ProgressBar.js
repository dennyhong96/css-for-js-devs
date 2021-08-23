/* eslint-disable no-unused-vars */
import React from "react";
import { Wrapper, Bar, BarWrapper } from "./styles";

import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
	return (
		<Wrapper
			size={size}
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin="0"
			aria-valuemax="100"
		>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<BarWrapper>
				<Bar value={value} />
			</BarWrapper>
		</Wrapper>
	);
};

export default ProgressBar;
