import styled from "styled-components";

import { COLORS } from "@lib/contants";

const SIZES = {
	small: {
		fontSize: `${16 / 16}rem`,
		padding: "8px 16px",
		height: "35px",
		borderRadius: "2px",
	},
	medium: {
		fontSize: `${18 / 16}rem`,
		padding: "16px 24px",
		height: "53px",
		borderRadius: "2px",
	},
	large: {
		fontSize: `${21 / 16}rem`,
		padding: "20px 36px",
		height: "65px",
		borderRadius: "4px",
	},
};

// const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

const Button = ({ variant, size, children, className, ...rest }) => {
	let Component;
	switch (variant) {
		case "outline": {
			Component = StyledOutlineButton;
			break;
		}
		case "ghost": {
			Component = StyledGhostButton;
			break;
		}
		case "fill":
		default: {
			Component = StyledFillButton;
			break;
		}
	}

	return (
		<Component
			// as={Link} // polymorphic `as` prop - change the tag that gets rendered
			size={size}
			className={className} // Makes this custom component composable by styled components (Escape Hatch)
			{...rest}
		>
			{children}
		</Component>
	);
};

const StyledButton = styled.button`
	cursor: pointer;
	font: inherit;
	text-transform: uppercase;
	letter-spacing: -1px;
	border: none;
	outline: none;
	transition: 0.3s ease-out;

	/* Sizes */
	font-size: ${({ size }) => SIZES[size].fontSize};
	padding: ${({ size }) => SIZES[size].padding};
	height: ${({ size }) => SIZES[size].height};
	border-radius: ${({ size }) => SIZES[size].borderRadius};
`;

// Variants
const StyledFillButton = styled(StyledButton)`
	color: ${COLORS.white};
	background-color: ${COLORS.primary};
	border: 2px solid transparent;
	box-shadow: 0 0 0 2px transparent, 0 0 0 4px transparent;

	&:hover {
		background-color: ${COLORS.primaryLight};
	}

	&:focus {
		box-shadow: 0 0 0 2px ${COLORS.white}, 0 0 0 4px ${COLORS.primary};
	}
`;

const StyledOutlineButton = styled(StyledButton)`
	color: ${COLORS.primary};
	background-color: ${COLORS.white};
	border: 2px solid ${COLORS.primary};
	box-shadow: 0 0 0 2px transparent, 0 0 0 4px transparent;

	&:hover {
		background-color: ${COLORS.offwhite};
	}

	&:focus {
		box-shadow: 0 0 0 2px ${COLORS.white}, 0 0 0 4px ${COLORS.primary};
	}
`;

const StyledGhostButton = styled(StyledButton)`
	color: ${COLORS.gray};
	background-color: "transparent";
	border: 2px solid "transparent";
	box-shadow: 0 0 0 2px transparent;

	&:hover {
		color: ${COLORS.black};
		background-color: ${COLORS.transparentGray15};
	}

	&:focus {
		box-shadow: 0 0 0 2px ${COLORS.gray};
	}
`;

export default Button;
