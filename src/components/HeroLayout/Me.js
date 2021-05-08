import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, useReducedMotion } from 'framer-motion';

import vars from '../../styles/vars';
import { basicAnimateIn } from '../../consts';

const Me = () => {
  const reduceMotion = useReducedMotion();
  return (
    <StyledMe
      {...basicAnimateIn}
      transition={{
        ...basicAnimateIn.transition,
        delay: 0.25,
        duration: 1,
      }}
      variants={{
        hidden: {
          transform: reduceMotion ? 'scaleY(1)' : 'scaleY(0)',
          opacity: reduceMotion ? 1 : 0,
        },
        visible: { transform: 'scaleY(1)', opacity: 1 },
      }}
    >
      <ImageWrapper
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: reduceMotion ? 0 : 1,
        }}
      >
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

const StyledMe = styled(motion.div)`
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
    transform-origin: top;

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

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 40rem;

  img {
    width: auto;
  }
`;

export default Me;
