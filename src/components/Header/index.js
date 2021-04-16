import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useDimensions from 'react-use-dimensions';
import { rgba } from 'polished';

import SiteLogo from '../SiteLogo';
import { Container } from '../styled/global';
import NavItem from './NavItem';
import LayoutContext from '../../contexts/LayoutContext';

import vars from '../../styles/vars';
import { basicAnimateIn } from '../../consts';
import { useIsHome } from '../../utils/hooks/useIsHome';

const Header = () => {
  const [ref] = useDimensions();
  const [{ scrollDistance }, dispatch] = useContext(LayoutContext);
  const { isHome } = useIsHome();

  useScrollPosition(({ currPos }) => {
    if (currPos.y * -1 !== scrollDistance) {
      const distance = currPos.y === 0 ? 0 : currPos.y * -1;
      dispatch({ type: 'SET_SCROLL_DISTANCE', payload: distance });
    }
  });

  let animateProps;
  if (isHome) {
    animateProps = {
      ...basicAnimateIn,
      transition: {
        ...basicAnimateIn.transition,
        delay: 0.5,
      },
    };
  }

  return (
    <StyledHeader
      className={scrollDistance > 0 || !isHome ? 'passed' : ''}
      ref={ref}
    >
      <StyledContainer {...animateProps}>
        <SiteLogo />
        <Nav role="menu">
          <NavItem href="#portfolio">Portfolio</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 1.5rem;
  z-index: 99;
  background-color: transparent;
  transition: all 500ms ${vars.ease};
  border-bottom-right-radius: ${vars.borderRadiusLarge};

  &.passed {
    box-shadow: 0 4px 30px ${rgba(vars.colorPrimary, 0.2)};
    background-color: ${vars.colorWhite};

    #logo-text {
      opacity: 1;
      transition: opacity 500ms ${vars.ease};
    }
  }
`;

const StyledContainer = styled(motion(Container))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.75rem;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    padding-right: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

export default Header;
