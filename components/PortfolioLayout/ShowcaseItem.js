import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Heading } from '../styled/global';

import vars from '../../styles/vars';

const ShowcaseItem = ({ name, image, link, repo, projectFor }) => {
  const [showImage, setShowImage] = useState(true);

  return (
    <StyledItem>
      <CloseButton onClick={() => setShowImage(true)}>
        <IoIosCloseCircleOutline />
      </CloseButton>
      <ItemContent>
        <ItemHeading as="h3">{name}</ItemHeading>
      </ItemContent>
      <CSSTransition in={showImage} timeout={250} classNames="showcase-image">
        <ItemImage
          role="img"
          aria-label="Mockups of the project arranged in a horizontal pattern"
          image={image}
          onClick={() => setShowImage(false)}
        />
      </CSSTransition>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1em;
  height: 100%;
  width: 100%;
  overflow: hidden;

  :first-child {
    border-top-right-radius: ${vars.borderRadiusLarge};
  }
  :last-child {
    border-bottom-right-radius: ${vars.borderRadiusLarge};
  }

  .showcase-image-enter {
    opacity: 0;
    display: block;
  }
  .showcase-image-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .showcase-image-exit {
    opacity: 1;
  }
  .showcase-image-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
  .showcase-image-exit-done {
    display: none;
  }
`;

const ItemContent = styled.div``;

const ItemHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading1};
`;

const ItemImage = styled.button`
  border: none;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: 600px;
  background-position: left bottom;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: ${vars.gradientHorizontal};
    opacity: 0.3;
    pointer-events: none;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;

    path {
      fill: ${vars.colorPrimary};
      transition: all 250ms ${vars.ease};
    }

    :hover {
      path {
        fill: ${vars.colorPrimaryDark};
      }
    }
  }
`;

export default ShowcaseItem;
