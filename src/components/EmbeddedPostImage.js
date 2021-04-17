import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rgba } from 'polished';

import vars from '../styles/vars';

const EmbeddedPostImage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!imageRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleKeyPress = (e) => {
    if (e.code === 'Enter' || e.charCode === 13) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <StyledFigure key="figure">
      <StyledButton
        onClick={() => setIsOpen(!isOpen)}
        onKeyUp={handleKeyPress}
        className={isOpen ? 'open' : 'closed'}
      >
        <ImageWrapper
          ref={imageRef}
          className={`${isOpen ? 'open' : 'closed'}`}
        >
          <GatsbyImage {...props} />
        </ImageWrapper>
      </StyledButton>
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </StyledFigure>
  );
};

const StyledFigure = styled.figure`
  margin: 2rem 0;

  figcaption {
    text-align: center;
    font-style: italic;
    opacity: 0.65;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    margin: 4rem 0;
  }
`;

const ImageWrapper = styled.div`
  border-radius: ${vars.borderRadiusLarge};
  box-shadow: 0.25em 0.25em 1.875em ${rgba(vars.colorPrimaryDark, 0.3)};
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;

  .gatsby-image-wrapper {
    display: block;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    width: 136%;
    margin-left: -18%;
    transform: scale(1);
    transition: all 500ms ${vars.ease};
  }

  @media (min-width: ${vars.breakpointMedium}) {
    &.open {
      transform: scale(1.5);
    }
  }
  @media (min-width: ${vars.breakpointXXL}) {
    &.open {
      transform: scale(2);
    }
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  pointer-events: none;

  @media (min-width: ${vars.breakpointMedium}) {
    pointer-events: all;
  }
`;

export default EmbeddedPostImage;
