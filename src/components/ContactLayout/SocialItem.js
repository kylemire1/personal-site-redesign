import React from "react"
import styled from "styled-components"

const SocialItem = ({ children, link, name }) => {
  return (
    <StyledSocialItem
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {children}
    </StyledSocialItem>
  )
}

const StyledSocialItem = styled.a`
  margin-left: 1rem;
`

export default SocialItem
