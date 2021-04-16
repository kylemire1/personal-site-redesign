import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import Header from '../components/Header';
import { Container } from '../components/styled/global';

import vars from '../styles/vars';

const PostLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ArticleContainer>
        <StyledArticle>{children}</StyledArticle>
      </ArticleContainer>
    </>
  );
};

const ArticleContainer = styled(Container)`
  max-width: 61.25em;
`;

const StyledArticle = styled.article`
  background-color: ${vars.colorWhite};
  border-radius: ${vars.borderRadiusLarge};
  padding: 4em;
  margin: 6em 4em 4em;
  box-shadow: 0 4px 90px ${rgba(vars.colorPrimaryDark, 0.4)};

  h1 {
    font-size: ${vars.fontSizeHeading4};
    font-weight: ${vars.fontWeightBlack};
  }
`;

export default PostLayout;
