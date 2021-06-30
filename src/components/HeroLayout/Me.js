import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import vars from '../../styles/vars';

const Me = () => {
  return (
    <StyledMe>
      <ImageWrapper>
        <StaticImage
          src="../../assets/images/profile-pic-color.jpg"
          alt="Me smiling wearing a shirt with a floral pattern"
          quality="100"
          placeholder="#FFFFFF"
        />
      </ImageWrapper>
    </StyledMe>
  );
};

const StyledMe = styled.div`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-row: 1 / 2;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
    background-color: ${vars.colorWhite};
    margin-left: -2rem;
    padding-left: 2rem;
    transform: translateY(-500px);
    animation: slideIn 750ms ${vars.ease} forwards;
    animation-delay: 350ms;

    ::after {
      content: '';
      position: absolute;
      background-color: ${vars.colorWhite};
      width: 8rem;
      top: 0;
      bottom: 0;
      right: -4rem;
      border-bottom-right-radius: ${vars.borderRadiusLarge};
      z-index: -1;
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-row: 1 / 3;
    grid-column: 2 / -1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 40rem;
  opacity: 0;
  animation: fadeIn 750ms ${vars.ease} forwards;
  animation-delay: 1s;

  img {
    width: auto;
  }
`;

export default Me;
