import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import vars from '../../styles/vars';
import { useIsHome } from '../../utils/hooks/useIsHome';
import PageTransitionLink from '../PageTransitionLink';

const NavItem = ({ href, children }) => {
  const { isHome } = useIsHome();

  if (isHome) {
    return (
      <LinkWrapper>
        <AnchorLink href={href} offset="250">
          {children}
        </AnchorLink>
      </LinkWrapper>
    );
  }

  return (
    <LinkWrapper>
      <PageTransitionLink to={`/${href}`} type="upToLeft">
        {children}
      </PageTransitionLink>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  & + & {
    margin-left: 1rem;
  }

  a {
    font-weight: ${vars.fontWeightBold};
    color: ${vars.colorAlmostBlack};
    transition: color 250ms ${vars.ease};

    :hover,
    :focus {
      color: ${vars.colorPrimary};
      transition: color 250ms ${vars.ease};
    }
  }

  @media (min-width: ${vars.breakpointTiny}) {
    & + & {
      margin-left: 1.5rem;
    }
  }
`;

export default NavItem;
