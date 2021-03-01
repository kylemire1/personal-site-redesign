import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Container, PageSection, Heading } from '../styled/global';

import vars from '../../styles/vars';

const HelloSection = () => {
  return (
    <HelloWrapper>
      <Container>
        <HelloHeading as="h1">Hello there!</HelloHeading>
        <IntroText>
          My name is Kyle Lemire. I’m a <span>designer and web developer</span>{' '}
          based in Chicago.
        </IntroText>
      </Container>
    </HelloWrapper>
  );
};

const HelloWrapper = styled(PageSection)`
  border-bottom-left-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  background-color: ${vars.colorWhite};
  box-shadow: 0 4px 90px ${rgba(vars.colorPrimary, 0.3)};
  z-index: 1;
  padding-top: 8em;
  padding-bottom: 6em;
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
