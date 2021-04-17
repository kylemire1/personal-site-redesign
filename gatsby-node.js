exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          slug
          frontmatter {
            featuredImg
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }
  const posts = result.data.allMdx.nodes;

  posts.forEach((post) => {
    console.log(post.frontmatter);
    actions.createPage({
      path: `/projects/${post.slug}`,
      component: require.resolve('./src/templates/postTemplate.js'),
      context: {
        slug: post.slug,
        featuredImgSlug: post.frontmatter.featuredImg,
      },
    });
  });
};
