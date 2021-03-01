import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import vars from '../../styles/vars';

const NavItem = ({ href, children }) => {
  const { pathname } = useRouter();

  if (pathname !== '/') {
    return (
      <StyledNextLink href={href}>
        <a>{children}</a>
      </StyledNextLink>
    );
  }

  return <StyledAnchorLink href={href}>{children}</StyledAnchorLink>;
};

const commonStyles = css`
  font-weight: ${vars.fontWeightBold};

  & + & {
    margin-left: 1.5rem;
  }
`;

const StyledNextLink = styled(Link)`
  ${commonStyles}
`;

const StyledAnchorLink = styled.a`
  ${commonStyles}
`;

export default NavItem;
