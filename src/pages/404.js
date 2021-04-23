import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Container } from '../components/styled/global';

import vars from '../styles/vars';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledContainer>
      <Heading>Whoops!</Heading>
      <Text>
        This page doesn't exist. <Link to="/">Head back home!</Link>
      </Text>
    </StyledContainer>
  </Layout>
);

const StyledContainer = styled(Container)`
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${vars.colorWhite};
`;

const Heading = styled.h1`
  font-size: ${vars.fontSizeHeadingHero};
  font-weight: ${vars.fontWeightBlack};
`;

const Text = styled.p`
  a {
    color: ${vars.colorHighlight};
    text-decoration: underline;
  }
`;

export default NotFoundPage;
