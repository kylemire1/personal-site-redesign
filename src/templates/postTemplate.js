import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Container } from '../components/styled/global';
import SEO from '../components/seo';

import vars from '../styles/vars';
import { usePrevPath } from '../utils/hooks/usePrevPath';
import PageTransition from '../components/PageTransition';

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

const Post = ({ data: { imageData, mdx }, pageContext }) => {
  const { body, frontmatter } = mdx;
  const featuredImage = getImage(imageData);
  const embeddedImages = pageContext.embeddedImgs || [];

  usePrevPath();

  return (
    <>
      <Header />
      <Layout>
        <SEO title={frontmatter.title} />
        <PageTransition>
          <ArticleContainer>
            <StyledArticle
              initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
              animate={{ opacity: 1, transform: 'translateY(0rem)' }}
              transition={{
                duration: 0.75,
                ease: vars.easeFramer,
                delay: 0.2,
              }}
            >
              <GatsbyImage
                className="project-banner"
                image={featuredImage}
                alt=""
              />
              <ContentWrapper>
                <MDXRenderer embeddedImages={embeddedImages}>
                  {body}
                </MDXRenderer>
              </ContentWrapper>
            </StyledArticle>
          </ArticleContainer>
        </PageTransition>
      </Layout>
    </>
  );
};

const ArticleContainer = styled(Container)`
  max-width: 61.25em;

  .project-banner,
  img {
    background-color: ${vars.colorPrimary};
    min-height: 7.813rem;
    border-top-left-radius: ${vars.borderRadiusLarge};
    border-top-right-radius: ${vars.borderRadiusLarge};
    overflow: hidden;
  }
`;

const StyledArticle = styled(motion.article)`
  background-color: ${vars.colorWhite};
  border-radius: ${vars.borderRadiusLarge};
  margin: 7em 0;
  box-shadow: 0 4px 90px ${rgba(vars.colorPrimaryDark, 0.4)};

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
    color: ${vars.colorPrimaryDark};
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
