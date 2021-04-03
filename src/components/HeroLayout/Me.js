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
        delay: 0.15,
      }}
      variants={{
        hidden: { height: reduceMotion ? '100%' : 0 },
        visible: { height: '100%' },
      }}
    >
      <ImageWrapper
        {...basicAnimateIn}
        transition={{
          ...basicAnimateIn.transition,
          delay: 0.75,
        }}
      >
        <StaticImage
          src="../../images/profile-pic.jpg"
          alt="Me smiling wearing a shirt with a floral pattern"
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
