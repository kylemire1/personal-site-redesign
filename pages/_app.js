import { useState, useMemo, useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';

import SectionContext from '../contexts/SectionContext';
import ResumeContext from '../contexts/ResumeContext';
import LayoutContext from '../contexts/LayoutContext';

import vars from '../styles/vars';
import reducer, {
  RESUME_NOTES_INITIAL_STATE,
} from '../contexts/resumeContextReducer';
import '../styles/normalize.css';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  const [welcomeSectionHeight, setWelcomeSectionHeight] = useState(null);
  const [activeSectionData, setActiveSectionData] = useState(null);
  const [openResumeNotes, dispatch] = useReducer(
    reducer,
    RESUME_NOTES_INITIAL_STATE
  );

  const layoutContextValue = useMemo(
    () => [welcomeSectionHeight, setWelcomeSectionHeight],
    [welcomeSectionHeight, setWelcomeSectionHeight]
  );

  const sectionContextValue = useMemo(
    () => [activeSectionData, setActiveSectionData],
    [activeSectionData, setActiveSectionData]
  );

  const resumeContextValue = useMemo(() => [openResumeNotes, dispatch], [
    openResumeNotes,
    dispatch,
  ]);

  return (
    <ResumeContext.Provider value={resumeContextValue}>
      <SectionContext.Provider value={sectionContextValue}>
        <LayoutContext.Provider value={layoutContextValue}>
          <GlobalStyle />
          <Component {...pageProps} />
        </LayoutContext.Provider>
      </SectionContext.Provider>
    </ResumeContext.Provider>
  );
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 72%;
    background-color: ${vars.colorPrimary};

    @media (min-width: ${vars.breakpointTiny}) {
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

  ul {
    padding-left: 1.25rem;
    margin-bottom: 1.5rem;
    li + li {
      margin-top: 1em;
    }
  }

  .section-wrapper + .section-wrapper {
    padding-top: 4rem;
  }
`;

export default MyApp;
