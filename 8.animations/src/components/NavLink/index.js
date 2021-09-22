import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <LabelText>{children}</LabelText>
      <LabelCopy>{children}</LabelCopy>
    </Link>
  );
};

export default NavLink;

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const LinkText = styled.span`
  display: block;
  transform: translateY(var(--translate-from));

  @media (prefers-reduced-motion: no-preference) {
    transition: 0.35s ease-in;
    will-change: transform;

    ${Link}:hover &,
    ${Link}:focus & {
      transition: 0.2s ease-out;
      transform: translateY(var(--translate-to));
    }
  }
`;

const LabelText = styled(LinkText)`
  --translate-from: 0;
  --translate-to: -100%;
`;

const LabelCopy = styled(LinkText)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  font-weight: ${WEIGHTS.bold};

  --translate-from: -100%;
  --translate-to: 0%;
`;
