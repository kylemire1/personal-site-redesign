import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from '@reach/router';
import { useMediaQuery } from 'react-responsive';

import vars from '../styles/vars';

const Layout = ({ children, inViewport, forwardedRef }) => {
  const location = useLocation();
  const isTabletOrLarger = useMediaQuery({
    minWidth: vars.breakpointMedium,
  });

  const showInViewport =
    !isTabletOrLarger ||
    children.props?.id === 'home' ||
    location.pathname !== '/' ||
    inViewport;

  return (
    <SectionWrapper
      ref={forwardedRef}
      $inViewport={showInViewport}
      className="section-wrapper"
      animate={{
        opacity: showInViewport ? 1 : 0,
      }}
    >
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled(motion.div)`
  max-width: ${vars.maxContentWidth};
  display: block;
  margin: 0 auto;
`;

export default Layout;
