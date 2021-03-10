module.exports = {
  siteMetadata: {
    title: `Chicago based web developer Kyle Lemire`,
    description: `I’ve been designing and building websites professionally for over 5 years. In that time I’ve served a wide variety of clients ranging from individuals to non-profit organizations and city governments.`,
    author: `KyleLemire1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#524A86`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sass',
  ],
};
