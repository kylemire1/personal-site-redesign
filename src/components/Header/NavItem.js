import React from 'react';
import styled, { css } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import vars from '../../styles/vars';

const NavItem = ({ href, children }) => {
  return (
    <StyledAnchorLink>
      <AnchorLink to={href}>{children}</AnchorLink>
    </StyledAnchorLink>
  );
};

const linkStyles = css`
  font-weight: ${vars.fontWeightBold};
`;

const StyledAnchorLink = styled.div`
  & + & {
    margin-left: 1rem;
  }

  a {
    ${linkStyles}
    color: ${vars.colorAlmostBlack};
  }

  @media (min-width: ${vars.breakpointTiny}) {
    & + & {
      margin-left: 1.5rem;
    }
  }
`;

export default NavItem;
