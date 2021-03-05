import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import vars from '../../styles/vars';
import SectionContext from '../../contexts/SectionContext';

const NavItem = ({ href, children }) => {
  const { pathname } = useRouter();
  const [activeSectionData] = useContext(SectionContext);

  if (pathname !== '/') {
    return (
      <StyledNextLink section={activeSectionData?.index + 1} href={href}>
        <a>{children}</a>
      </StyledNextLink>
    );
  }

  return (
    <StyledAnchorLink section={activeSectionData?.index + 1} href={href}>
      {children}
    </StyledAnchorLink>
  );
};

const linkStyles = css`
  font-weight: ${vars.fontWeightBold};

  & + & {
    margin-left: 1.5rem;
  }
`;

const StyledNextLink = styled(Link)`
  ${linkStyles}
  color: ${({ section }) =>
    [1, 3].includes(section) ? vars.colorAlmostBlack : vars.colorWhite};
  transition: color 500ms ${vars.ease};
`;

const StyledAnchorLink = styled.a`
  ${linkStyles}
  color: ${({ section }) =>
    [1, 3].includes(section) ? vars.colorAlmostBlack : vars.colorWhite};
  transition: color 500ms ${vars.ease};
`;

export default NavItem;
