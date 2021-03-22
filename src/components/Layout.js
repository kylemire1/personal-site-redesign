import React from 'react';
import styled from 'styled-components';

import vars from '../styles/vars';

const Layout = ({ children }) => {
  const pathname = '/';

  return (
    <SectionWrapper
      className={`section-wrapper ${pathname === '/' ? 'section' : ''}`}
    >
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  max-width: ${vars.maxContentWidth};
  display: block;
  margin: 0 auto;
`;

export default Layout;
