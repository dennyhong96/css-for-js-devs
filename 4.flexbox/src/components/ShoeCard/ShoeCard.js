import React from "react";
import styled, { css } from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
	// There are 3 variants possible, based on the props:
	//   - new-release
	//   - on-sale
	//   - default
	//
	// Any shoe released in the last month will be considered
	// `new-release`. Any shoe with a `salePrice` will be
	// on-sale. In theory, it is possible for a shoe to be
	// both on-sale and new-release, but in this case, `on-sale`
	// will triumph and be the variant used.
	// prettier-ignore
	const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

	const TAG_LABEL = {
		"on-sale": "Sale",
		"new-release": "Just Released!",
	};

	const hasFlag = variant !== "default";
	const isOnSale = variant === "on-sale";

	return (
		<Link href={`/shoe/${slug}`}>
			<Wrapper>
				<ImageWrapper>
					<Image alt="" src={imageSrc} />
					{hasFlag && <Flag variant={variant}>{TAG_LABEL[variant]}</Flag>}
				</ImageWrapper>
				<Spacer size={12} />
				<Row>
					<Name>{name}</Name>
					<Price isOnSale={isOnSale}>{formatPrice(price)}</Price>
				</Row>
				<Row>
					<ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
					{isOnSale && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
				</Row>
			</Wrapper>
		</Link>
	);
};

const Link = styled.a`
	text-decoration: none;
	color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
	position: relative;
`;

const Flag = styled.div`
	position: absolute;
	right: -4px;
	top: 12px;
	font-weight: ${WEIGHTS.bold};
	color: ${COLORS.white};
	font-size: 14px;
	line-height: 16px;
	padding: 7px 9px 9px 11px;
	border-radius: 2px;
	background-color: ${({ variant }) =>
		variant === "on-sale" ? COLORS.primary : COLORS.secondary};
`;

const Image = styled.img`
	display: block;
	width: 100%;
	border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Name = styled.h3`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.gray[900]};
`;

const Price = styled.span`
	${({ isOnSale }) =>
		!!isOnSale &&
		css`
			color: ${COLORS.gray[700]};
			text-decoration: line-through;
		`}
`;

const ColorInfo = styled.p`
	color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.primary};
`;

export default ShoeCard;
