import React from 'react';
import styled from 'styled-components';

import vars from '../../styles/vars';

const SocialItem = ({ children, link, name }) => {
  return (
    <StyledSocialItem
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {children}
    </StyledSocialItem>
  );
};

const StyledSocialItem = styled.a`
  margin-left: 1rem;

  @media (min-width: ${vars.breakpointExtraLarge}) {
    width: 50px;
    height: 50px;
    margin-left: 0;

    & + & {
      margin-left: 1rem;
    }

    svg {
      width: 100%;
      height: 100%;

      path:first-child {
        fill: ${vars.colorWhite};
        transition: fill 250ms ${vars.ease};
      }
    }

    :hover,
    :focus {
      svg {
        path:first-child {
          fill: ${vars.colorHighlight};
          transition: fill 250ms ${vars.ease};
        }
      }
    }
  }
`;

export default SocialItem;
