import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  console.log({ showMobileMenu });

  return (
    <header>
      <SuperHeader />

      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <DesktopSide />

        <TabletSide>
          <MobileButtons>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu((prev) => !prev)}>
              <Icon id="menu" strokeWidth={2} />
            </UnstyledButton>
          </MobileButtons>
        </TabletSide>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  /* overflow-x: auto; */

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.25rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const DesktopSide = styled(Side)`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const TabletSide = styled(Side)`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const MobileButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${UnstyledButton} {
    width: 24px;
    height: 24px;
  }

  ${UnstyledButton}:not(:last-of-type) {
    margin-right: 37px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    ${UnstyledButton}:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
