import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import LogoImg from './icons/Logo';

import vars from '../styles/vars';

const Logo = () => {
  return (
    <AnchorLink href="#home" offset="100">
      <LogoWrapper>
        <LogoImg />
        <LogoText id="logo-text">Kyle Lemire</LogoText>
      </LogoWrapper>
    </AnchorLink>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    display: block;
    font-size: ${vars.fontSizeTextSmall};
    font-weight: ${vars.fontWeightBold};
    margin-left: 0.5em;
    opacity: 0;
    transition: opacity 500ms ${vars.ease};
  }
`;

export default Logo;
