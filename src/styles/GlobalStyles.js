import { createGlobalStyle } from 'styled-components';
import vars from './vars';

const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
    font-size: 72%;

    @media (min-width: ${vars.breakpointTiny}) {
      font-size: 85%;
    }

    @media (min-width: ${vars.breakpointLarge}) {
      font-size: 100%;
    }
  }

  body {
    overflow-x: hidden;
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

  ul, ol {
    padding-left: 1.25rem;
    margin-bottom: 1.5rem;
    li + li {
      margin-top: .5em;
      line-height: 1.5;
    }
  }

  .section-wrapper + .section-wrapper {
    padding-top: 8rem;

    @media (min-width: ${vars.breakpointExtraSmall}) {
      padding-top: 10rem;
    }
  }

  #portal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -9999;
    pointer-events: none;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export default GlobalStyles;
