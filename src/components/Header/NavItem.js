import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import vars from "../../styles/vars"

const NavItem = ({ href, children }) => {
  const pathname = "/"

  if (pathname !== "/") {
    return <StyledNextLink to={href}>{children}</StyledNextLink>
  }

  return <StyledAnchorLink href={href}>{children}</StyledAnchorLink>
}

const linkStyles = css`
  font-weight: ${vars.fontWeightBold};

  & + & {
    margin-left: 1rem;
  }

  @media (min-width: ${vars.breakpointTiny}) {
    & + & {
      margin-left: 1.5rem;
    }
  }
`

const StyledNextLink = styled(Link)`
  ${linkStyles}
  color: ${vars.colorAlmostBlack};
  transition: color 500ms ${vars.ease};
`

const StyledAnchorLink = styled.a`
  ${linkStyles}
  color: ${vars.colorAlmostBlack};
`

export default NavItem
