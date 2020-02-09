require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Christophe Gagnier - Blog`,
    siteTitle: `Christophe Gagnier`,
    author: `@CGagnier`,
    siteUrl: `https://christophegagnier.com`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/CGagnier`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/cgagnier11/`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/christophegagnier/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christophe Gagnier - Blog`,
        short_name: `blog`,
        description: `Personnal blog.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffba5a`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
