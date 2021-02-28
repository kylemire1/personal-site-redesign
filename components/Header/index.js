import React from 'react';
import styled from 'styled-components';

import SiteLogo from '../SiteLogo';
import { Container } from '../styled/global';
import NavItem from './NavItem';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  > div {
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 0;
`;

const Nav = styled.nav`
  display: flex;

  > a + a {
    margin-left: 1.5rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <SiteLogo />
        <Nav role="menu">
          <NavItem href="/#portfolio">Portfolio</NavItem>
          <NavItem href="/#experience">Experience</NavItem>
          <NavItem href="/#contact">Contact</NavItem>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;