const path = require('path');

module.exports = {
  siteMetadata: {
    title: "what's up with klangstof?",
    description: 'all the latest and greatest',
    author: 'klangstof',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "what's up with klangstof?",
        short_name: 'klangstof news',
        start_url: '/',
        background_color: '#ff88d9',
        theme_color: '#ff88d9',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        path: './src/posts',
        plugins: [
          {
            resolve: 'gatsby-yaml-full-file',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '#components': path.join(__dirname, 'src/components'),
        '#lib': path.join(__dirname, 'src/lib'),
        '#types': path.join(__dirname, 'src/types'),
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
