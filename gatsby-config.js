module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/elevate-gatsby-test`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        display: 'browser',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     sassOptions: {
    //       quietDeps: true,
    //       silenceDeprecations: ['mixed-decls', 'legacy-js-api'],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
