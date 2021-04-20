import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import vars from '../styles/vars';

const MessageButton = () => {
  return (
    <StyledButton href="#contact" offset="100">
      Get In Touch
    </StyledButton>
  );
};

const StyledButton = styled(AnchorLink)`
  display: inline-block;
  border: solid ${vars.pixel} ${vars.colorHighlight};
  border-radius: ${vars.borderRadiusSmall};
  padding: 0.75em 1em;
  background-color: none;
  color: ${vars.colorHighlight};
  font-size: ${vars.fontSizeText};
  white-space: nowrap;
  cursor: pointer;
  will-change: transform;
  transform: scale(1);
  transition: all 250ms ${vars.ease};
  transition-property: background-color, color, transform;

  :hover,
  :focus {
    background-color: ${vars.colorHighlight};
    color: ${vars.colorPrimaryDark};
    transform: scale(0.99);
    transition: all 250ms ${vars.ease};
    transition-property: background-color, color, transform;
  }

  @media (min-width: ${vars.breakpointExtraSmall}) {
    font-weight: ${vars.fontWeightBold};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeTextLarge};
  }
`;

export default MessageButton;
