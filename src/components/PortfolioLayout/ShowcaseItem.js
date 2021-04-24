import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import PageTransitionLink from '../PageTransitionLink';
import { Heading } from '../styled/global';

import vars from '../../styles/vars';
import patternBg from '../../images/pattern.webp';

const ShowcaseItem = ({
  name,
  description,
  image,
  link,
  repo,
  about,
  projectFor,
  isOpen,
  setOpen,
  setClosed,
  itemIndex,
}) => {
  return (
    <StyledItem>
      <CloseButton onClick={setClosed}>
        <IoIosCloseCircleOutline />
      </CloseButton>
      <ItemContent>
        <ItemHeading as="h3">
          {name} <span aria-label={`for ${projectFor}`}>{projectFor}</span>
        </ItemHeading>
        <ItemDescription>{description}</ItemDescription>
        <ItemLinks>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Project Repo
            </a>
          )}
          {about && typeof window !== 'undefined' && (
            <PageTransitionLink to={about} type="leftToUp">
              About the Project
            </PageTransitionLink>
          )}
        </ItemLinks>
      </ItemContent>
      <CSSTransition in={!isOpen} timeout={250} classNames="showcase-image">
        <ItemImage
          role="img"
          aria-label="Mockups of the project arranged in a horizontal pattern"
          image={image}
          onClick={() => setOpen(itemIndex)}
        />
      </CSSTransition>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1em 3em 1em 2em;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: ${vars.colorWhite};

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

  @media (min-width: ${vars.breakpointExtraLarge}) {
    :first-child {
      padding-top: 1em;
    }
    :last-child {
      padding-bottom: 1em;
    }
  }

  @media (min-width: 104.67em) {
    background-image: url(${patternBg});
    background-size: cover;
    background-position: left top 18rem;
    background-repeat: no-repeat;

    :first-child {
      order: 2;
    }
    :last-child {
      order: 1;
    }
  }
`;

const ItemContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: solid ${vars.pixel} ${vars.colorPrimary};
  padding-bottom: 0.5em;
  z-index: 0;

  @media (min-width: ${vars.breakpointXXL}) {
    justify-content: flex-start;
    padding-top: 2em;
  }

  @media (min-width: 104.67em) {
    justify-content: flex-start;
    padding-top: 2em;
    border-bottom: none;
  }
`;

const ItemHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading1};

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: ${vars.fontSizeTextSmall};
    font-weight: ${vars.fontWeightLight};
    color: ${vars.colorPrimary};
    text-align: right;
    padding-bottom: 0.5em;
  }

  @media (min-width: 104.67em) {
    margin-top: 2rem;

    span {
      top: 2.5rem;
      left: 0;
      bottom: auto;
      right: auto;
    }
  }
`;

const ItemDescription = styled.p`
  display: block;
  margin: 0;
  font-size: ${vars.fontSizeTextSmall};

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: ${vars.fontSizeText};
  }
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
  background-size: cover;
  background-position: left bottom;
  background-repeat: no-repeat;
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

const ItemLinks = styled.div`
  display: flex;
  margin-top: auto;
  a {
    color: ${vars.colorPrimary};
    font-weight: ${vars.fontWeightBold};
  }

  a + a {
    margin-left: 1.5rem;
  }

  @media (min-width: 104.67em) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    a {
      padding: 1em;
      border-radius: ${vars.borderRadiusSmall};
      text-align: center;
      cursor: pointer;
      background-color: ${vars.colorPrimary};
      color: ${vars.colorWhite};
      will-change: transform;
      transform: scale(1);
      transition: all 250ms ${vars.ease};
      transition-property: background-color, color, transform;

      :hover,
      :focus {
        background-color: ${vars.colorHighlight};
        color: ${vars.colorAlmostBlack};
        transform: scale(0.99);
        transition: all 250ms ${vars.ease};
        transition-property: background-color, color, transform;
      }
    }

    a + a {
      margin-left: 0;
      margin-top: 1.5rem;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
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
