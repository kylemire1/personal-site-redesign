import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import LogoImg from "./icons/Logo"

import vars from "../styles/vars"

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <LogoImg />
        <LogoText>Kyle Lemire</LogoText>
      </LogoWrapper>
    </Link>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoText = styled.span`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    display: block;
    font-size: ${vars.fontSizeText};
    font-weight: ${vars.fontWeightBlack};
    margin-left: 0.5em;
  }
`

export default Logo
