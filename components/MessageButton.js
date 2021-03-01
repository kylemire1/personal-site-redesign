import React from 'react';
import styled from 'styled-components';

import { orangeButtonStyles } from './styled/global';

const MessageButton = () => {
  return <StyledButton href="/#contact">Send Me a Message</StyledButton>;
};

const StyledButton = styled.a`
  ${orangeButtonStyles}
`;

export default MessageButton;
