module.exports = {
  siteMetadata: {
    title: 'RayLiao',
    description: 'WingRay Liao',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RayLiao`,
        short_name: `rayliao`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.jpeg`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glslify`,
    `gatsby-plugin-typescript`,
  ],
}