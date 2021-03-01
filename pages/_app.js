import { useState, useMemo } from 'react';
import { createGlobalStyle } from 'styled-components';

import SectionContext from '../contexts/SectionContext';

import vars from '../styles/vars';
import '../styles/normalize.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [activeSectionData, setActiveSectionData] = useState(null);

  const value = useMemo(() => [activeSectionData, setActiveSectionData], [
    activeSectionData,
    setActiveSectionData,
  ]);

  return (
    <SectionContext.Provider value={value}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SectionContext.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 80%;

    @media (min-width: ${vars.breakpointExtraSmall}) {
      font-size: 85%;
    }

    @media (min-width: ${vars.breakpointLarge}) {
      font-size: 100%;
    }
  }

  p {
    font-weight: ${vars.fontWeightLight};
    font-size: ${vars.fontSizeText};
    line-height: 1.5;
    max-width: 75ch;
  }

  p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default MyApp;
