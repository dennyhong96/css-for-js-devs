import React from "react";
import { Wrapper, NativeSelect, IconWrapper, CustomSelect } from "./styles";

import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<IconWrapper>
				<Icon id="chevron-down" size={24} strokeWidth={2} />
			</IconWrapper>

			<CustomSelect>{displayedValue}</CustomSelect>

			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
		</Wrapper>
	);
};

export default Select;
