import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>

          <DesktopLogoWrapper>
            <Logo />
          </DesktopLogoWrapper>

          <MobileRightActions>
            <button>
              <User size={24} />
            </button>
          </MobileRightActions>

          <DesktopRightActions>
            <Button>Subscribe</Button>
            <Link href="/">Already a subscriber?</Link>
          </DesktopRightActions>
        </Row>
      </SuperHeader>

      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
    padding: 16px 0 72px 0;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MobileRightActions = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopRightActions = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
    justify-self: end;
    position: relative;
  }
`;

const Link = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  font-style: italic;
  font-size: 0.875rem;
  text-decoration: underline;
  display: inline-block;
  margin-top: 8px;
`;

const DesktopLogoWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

export default Header;
