import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
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
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.phone} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const DesktopSide = styled(Side)`
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const TabletSide = styled(Side)`
  display: none;
  @media ${QUERIES.tablet} {
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

  @media ${QUERIES.phone} {
    ${UnstyledButton}:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
