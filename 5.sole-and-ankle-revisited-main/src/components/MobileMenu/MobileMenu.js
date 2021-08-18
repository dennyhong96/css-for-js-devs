/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Backdrop onClick={onDismiss}>
      <Wrapper>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </CloseButton>

        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Wrapper>
    </Backdrop>
  );
};

export default MobileMenu;

const Backdrop = styled(DialogOverlay)`
  isolation: isolate;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(96, 100, 108, 0.8);
  display: none;

  @media ${QUERIES.tablet} {
    display: block;
  }
`;

const Wrapper = styled(DialogContent)`
  isolation: isolate;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  min-width: 300px;
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-right: -20px;
  width: 24px;
  height: 24px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    padding: 11px 0;
    color: ${COLORS.gray[900]};
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: ${WEIGHTS.medium};

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  a {
    padding: 7px 0;
    color: ${COLORS.gray[500]};
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: ${WEIGHTS.normal};

    &:hover {
      text-decoration: underline;
    }
  }
`;
