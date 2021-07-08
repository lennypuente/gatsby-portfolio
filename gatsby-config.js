module.exports = {
  siteMetadata: {
    title: "Lennys Portfolio",
    description: "Portfolio Website mit GatsbyJS",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/pages/images/",
      },
      __key: "images",
    },
  ],
};
