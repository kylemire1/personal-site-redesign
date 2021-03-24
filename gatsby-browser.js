import React from 'react';

import { ResumeContextProvider } from './contexts/ResumeContext';
import { LayoutContextProvider } from './contexts/LayoutContext';
import GlobalStyles from './src/styles/GlobalStyles';

import './src/styles/normalize.css';
import './src/styles/global-reset.scss';

export const wrapRootElement = ({ element }) => {
  return (
    <ResumeContextProvider>
      <LayoutContextProvider>
        <GlobalStyles />
        {element}
      </LayoutContextProvider>
    </ResumeContextProvider>
  );
};
