import { useLayoutEffect, useState, useMemo, useReducer, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';

import SectionContext from '../contexts/SectionContext';
import ResumeContext from '../contexts/ResumeContext';

import vars from '../styles/vars';
import reducer, {
  RESUME_NOTES_INITIAL_STATE,
} from '../contexts/resumeContextReducer';
import '../styles/normalize.css';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  const wrapperRef = useRef();
  const [activeSectionData, setActiveSectionData] = useState(null);
  const [openResumeNotes, dispatch] = useReducer(
    reducer,
    RESUME_NOTES_INITIAL_STATE
  );

  const sectionContextValue = useMemo(
    () => [activeSectionData, setActiveSectionData],
    [activeSectionData, setActiveSectionData]
  );

  const resumeContextValue = useMemo(() => [openResumeNotes, dispatch], [
    openResumeNotes,
    dispatch,
  ]);

  useLayoutEffect(() => {
    if (typeof wrapperRef.current !== 'undefined') {
      console.log(wrapperRef.current);
      wrapperRef.current.style.visibility = 'visible';
    }
  }, []);

  return (
    <ResumeContext.Provider value={resumeContextValue}>
      <SectionContext.Provider value={sectionContextValue}>
        <GlobalStyle />
        <div ref={wrapperRef} id="app-wrapper" style={{ visibility: 'hidden' }}>
          <Component {...pageProps} />
        </div>
      </SectionContext.Provider>
    </ResumeContext.Provider>
  );
};

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

  ul {
    padding-left: 1.25rem;
    margin-bottom: 1.5rem;
    li + li {
      margin-top: 1em;
    }
  }
`;

export default MyApp;
