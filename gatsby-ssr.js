import React from 'react';

import { LayoutContextProvider } from './src/contexts/LayoutContext';
import GlobalStyles from './src/styles/GlobalStyles';

import './src/styles/normalize.css';
import './src/styles/global-reset.scss';

export const wrapRootElement = ({ element }) => {
  return (
    <LayoutContextProvider>
      <GlobalStyles />
      {element}
    </LayoutContextProvider>
  );
};
