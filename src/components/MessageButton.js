import React from 'react';
import styled from 'styled-components';

import { orangeButtonStyles } from './styled/global';
import vars from '../styles/vars';

const MessageButton = () => {
  return <StyledButton href="/#contact">Get In Touch</StyledButton>;
};

const StyledButton = styled.a`
  ${orangeButtonStyles}

  @media (min-width: ${vars.breakpointExtraLarge}) {
    font-size: ${vars.fontSizeTextLarge};
  }
`;

export default MessageButton;
