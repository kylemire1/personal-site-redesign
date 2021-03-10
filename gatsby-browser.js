import React from "react"
import { createGlobalStyle } from "styled-components"

import { ResumeContextProvider } from "./contexts/ResumeContext"
import { LayoutContextProvider } from "./contexts/LayoutContext"

import vars from "./src/styles/vars"

import "./src/styles/normalize.css"
import "./src/styles/globals.scss"

export const wrapRootElement = ({ element }) => {
  return (
    <ResumeContextProvider>
      <LayoutContextProvider>
        <GlobalStyle />
        {element}
      </LayoutContextProvider>
    </ResumeContextProvider>
  )
}

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
    padding-top: 8rem;

    @media (min-width: ${vars.breakpointExtraSmall}) {
      padding-top: 10rem;
    }
  }
`
