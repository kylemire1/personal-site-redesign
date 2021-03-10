import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import vars from "../../styles/vars"

const Me = () => {
  return (
    <StyledMe>
      <ImageWrapper>
        <StaticImage
          src="../../images/profile-pic.jpg"
          alt="Me smiling wearing a shirt with a floral pattern"
          placeholder="#FFFFFF"
        />
      </ImageWrapper>
    </StyledMe>
  )
}

const StyledMe = styled.div`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    display: flex;
    position: relative;
    z-index: 1;
    background-color: ${vars.colorWhite};
    margin-left: -2rem;
    padding-left: 2rem;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  img {
    width: auto;
  }
`

export default Me
