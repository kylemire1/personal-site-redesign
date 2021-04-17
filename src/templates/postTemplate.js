import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { rgba } from 'polished';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Container } from '../components/styled/global';

import vars from '../styles/vars';

export const query = graphql`
  query($slug: String!, $featuredImgSlug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
      }
      body
    }
    imageData: file(base: { eq: $featuredImgSlug }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100, layout: FULL_WIDTH)
      }
    }
  }
`;

const Post = ({ data: { imageData, mdx } }) => {
  const { body } = mdx;
  const image = getImage(imageData);

  return (
    <Layout>
      <Header />
      <ArticleContainer>
        <StyledArticle>
          <GatsbyImage image={image} alt="" />
          <ContentWrapper>
            <MDXRenderer>{body}</MDXRenderer>
          </ContentWrapper>
        </StyledArticle>
      </ArticleContainer>
    </Layout>
  );
};

const ArticleContainer = styled(Container)`
  max-width: 61.25em;

  .gatsby-image-wrapper {
    min-height: 7.813rem;
  }
`;

const StyledArticle = styled.article`
  background-color: ${vars.colorWhite};
  border-radius: ${vars.borderRadiusLarge};
  margin: 7em 0;
  box-shadow: 0 4px 90px ${rgba(vars.colorPrimaryDark, 0.4)};
  overflow: hidden;

  strong {
    font-weight: ${vars.fontWeightBold};
  }

  ol,
  ul {
    li {
      font-size: ${vars.fontSizeText};
      font-weight: ${vars.fontWeightLight};
    }
  }

  h1,
  h2 {
    font-size: ${vars.fontSizeHeading2};
    font-weight: ${vars.fontWeightBlack};
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: ${vars.fontSizeHeading1};
  }

  @media (min-width: ${vars.breakpointMedium}) {
    h1 {
      font-size: ${vars.fontSizeHeading3};
    }
    margin: 6em 4em 4em;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    h1 {
      font-size: ${vars.fontSizeHeading4};
    }

    h2 {
      font-size: ${vars.fontSizeHeading2};
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 3em 2em;

  @media (min-width: ${vars.breakpointMedium}) {
    padding: 4em;
  }
`;

export default Post;
