import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { orangeButtonStyles } from './styled/global';
import vars from '../styles/vars';

const MessageButton = () => {
  return (
    <StyledButton href="#contact" offset="100">
      Get In Touch
    </StyledButton>
  );
};

const StyledButton = styled(AnchorLink)`
  ${orangeButtonStyles}

  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeTextLarge};
  }
`;

export default MessageButton;
