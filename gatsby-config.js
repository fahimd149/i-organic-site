module.exports = {
  siteMetadata: {
    title: 'i-organic',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'i-organic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#81c784',
        theme_color: '#81c784',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/product`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
