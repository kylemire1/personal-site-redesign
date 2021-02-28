import { createGlobalStyle } from 'styled-components';

import vars from '../styles/vars';
import '../styles/normalize.css';
import '../styles/globals.scss';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 85%;

    @media (min-width: ${vars.breakpointLarge}) {
      font-size: 100%;
    }
  }

  p {
    font-weight: ${vars.fontWeightLight};
    font-size: ${vars.fontSizeText};
    line-height: 1.3;
  }

  p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
