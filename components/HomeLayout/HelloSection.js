import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Container, PageSection, Heading } from '../styled/global';

import vars from '../../styles/vars';
import meSrcMobile from '../../public/images/me-large.jpg';

const HelloSection = () => {
  return (
    <HelloWrapper>
      <HelloContainer>
        <HelloHeading as="h1">Hello there!</HelloHeading>
        <IntroText>
          My name is Kyle Lemire. I’m a <span>designer and web developer</span>{' '}
          based in Chicago.
        </IntroText>
      </HelloContainer>
    </HelloWrapper>
  );
};

const HelloWrapper = styled(PageSection)`
  grid-column: 1 / -1;
  border-bottom-left-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  background-color: ${vars.colorWhite};
  box-shadow: 0 4px 90px ${rgba(vars.colorAlmostBlack, 0.3)};
  z-index: 1;

  @media (max-width: ${vars.breakpointLarge}) {
    background-image: url(${meSrcMobile});
    background-repeat: no-repeat;
    background-position: top 0 right -20rem;
    background-size: 42rem;
  }

  @media (min-height: ${vars.breakpointMedium}) {
    background-position: top 0 right -23rem;
    background-size: 45rem;
  }
`;

const HelloContainer = styled(Container)`
  @media (max-width: ${vars.breakpointLarge}) {
    margin-bottom: -4rem;
  }
`;

const HelloHeading = styled(Heading)`
  font-size: ${vars.fontSizeHeading4};
`;

const IntroText = styled.p`
  span {
    font-weight: ${vars.fontWeightBold};
    color: ${vars.colorPrimary};
  }
`;

export default HelloSection;
