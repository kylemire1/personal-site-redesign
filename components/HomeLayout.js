import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import Layout from './Layout';
import { Wrapper, Container, PageSection, Heading } from './styled/global';

import vars from '../styles/vars';
import MessageButton from './MessageButton';

const HelloWrapper = styled(PageSection)`
  border-bottom-left-radius: ${vars.borderRadiusLarge};
  border-bottom-right-radius: ${vars.borderRadiusLarge};
  background-color: ${vars.colorWhite};
  box-shadow: 0 4px 90px ${rgba(vars.colorPrimary, 0.3)};
  z-index: 1;
  padding-top: 5em;
  padding-bottom: 3em;
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

const Me = styled(PageSection)`
  display: none;

  @media (min-width: ${vars.breakpointLarge}) {
    display: block;
  }
`;

const MyOverview = styled(PageSection)`
  margin-top: -2rem;
  padding: 6em 0 1em;
  background-color: ${vars.colorPrimary};
  z-index: 0;
`;

const OverviewText = styled.p`
  color: ${vars.colorWhite};

  &:first-child {
    margin-top: -3rem;
  }
`;

const ContactMeNow = styled(PageSection)`
  padding: 3em 0;
  background-color: ${vars.colorPrimaryDark};
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorPrimaryLight};
  font-size: ${vars.fontSizeHeading2};
`;

const ContactText = styled.p`
  color: ${vars.colorPrimaryLight};
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;

const HomeLayout = () => {
  return (
    <Layout>
      <Wrapper>
        <HelloWrapper>
          <Container>
            <HelloHeading as="h1">Hello there!</HelloHeading>
            <IntroText>
              My name is Kyle Lemire. I’m a{' '}
              <span>designer and web developer</span> based in Chicago.
            </IntroText>
          </Container>
        </HelloWrapper>
        <Me></Me>
        <MyOverview>
          <Container>
            <OverviewText>
              I’ve been designing and building websites professionally for over
              5 years. In that time I’ve served a wide variety of clients
              ranging from individuals to non-profit organizations and city
              governments.
            </OverviewText>
            <OverviewText>
              My interests lie in creating fast, beautiful websites and helping
              other developers do the same through consulting.
            </OverviewText>
          </Container>
        </MyOverview>
        <ContactMeNow>
          <Container>
            <ContactHeading as="h2">Don't need convincing?</ContactHeading>
            <ContactText>
              Or just want to say hi?{' '}
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </ContactText>
            <ButtonWrapper>
              <MessageButton />
            </ButtonWrapper>
          </Container>
        </ContactMeNow>
      </Wrapper>
    </Layout>
  );
};

export default HomeLayout;
