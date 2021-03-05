import React from 'react';
import styled from 'styled-components';

import SiteLogo from '../SiteLogo';
import { Container } from '../styled/global';
import NavItem from './NavItem';

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

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const StyledContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
`;

const Nav = styled.nav`
  display: flex;
  padding-right: 1rem;
`;

export default Header;
