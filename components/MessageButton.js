import React from 'react';
import styled from 'styled-components';

import { orangeButtonStyles } from './styled/global';

const StyledButton = styled.a`
  ${orangeButtonStyles}
`;

const MessageButton = () => {
  return <StyledButton href="/#contact">Send Me a Message</StyledButton>;
};

export default MessageButton;
