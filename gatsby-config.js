module.exports = {
  siteMetadata: {
    title: `Anne Ketola`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur ipsum a pretium vestibulum. Curabitur sed volutpat mauris. Nunc lobortis elit quis lobortis consectetur. Curabitur ut diam vitae augue rutrum pharetra.`,
    author: `@obpFin`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
