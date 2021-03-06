import styled from 'styled-components';

import { orangeButtonStyles } from './styled/global';

const MessageButton = () => {
  return <StyledButton href="/#contact">Get In Touch</StyledButton>;
};

const StyledButton = styled.a`
  ${orangeButtonStyles}
`;

export default MessageButton;
