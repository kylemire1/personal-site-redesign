import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import useDimensions from "react-use-dimensions"
import { rgba } from "polished"

import SiteLogo from "../SiteLogo"
import { Container } from "../styled/global"
import NavItem from "./NavItem"
import LayoutContext from "../../../contexts/LayoutContext"

import vars from "../../styles/vars"

const Header = props => {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => setShowChild(true), [])

  if (!showChild) {
    return null
  }

  return <LazyLoaded {...props} />
}

const LazyLoaded = () => {
  const [ref, { height: headerHeight }] = useDimensions()
  const [{ welcomeSectionHeight, scrollDistance }, dispatch] = useContext(
    LayoutContext
  )

  useScrollPosition(({ currPos }) => {
    if (currPos.y * -1 !== scrollDistance) {
      const distance = currPos.y === 0 ? 0 : currPos.y * -1
      dispatch({ type: "SET_SCROLL_DISTANCE", payload: distance })
    }
  })

  const scrollPassed = scrollDistance > welcomeSectionHeight / 2 - headerHeight

  return (
    <StyledHeader className={scrollPassed ? "passed" : ""} ref={ref}>
      <StyledContainer>
        <SiteLogo />
        <Nav role="menu">
          <NavItem href="/#portfolio">Portfolio</NavItem>
          <NavItem href="/#experience">Experience</NavItem>
          <NavItem href="/#contact">Contact</NavItem>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 1.5rem;
  z-index: 99;
  background-color: transparent;
  transition: all 500ms ${vars.ease};
  border-bottom-right-radius: ${vars.borderRadiusLarge};

  &.passed {
    box-shadow: 0 4px 30px ${rgba(vars.colorBlack, 0.2)};
    background-color: ${vars.colorWhite};
  }
`

const StyledContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
`

const Nav = styled.nav`
  display: flex;
`

export default Header
