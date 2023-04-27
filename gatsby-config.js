const manifestPluginConfig = {
    resolve: `gatsby-plugin-manifest`,
    options: {
        name: "Andrea Francesco Pavia's Portfolio",
        short_name: "Andrea Francesco Pavia's Portfolio",
        start_url: '/',
        background_color: '#d72638',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
    },
};

const siteMetaData = {
    title: `Andrea's portfolio`,
    description: `
My own showcase website.
`,
    author: `@andreapavia`,
    siteUrl: `https://andreafrancescopavia.it/`,
};

const gatsbySourceFileSystem = {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: `${__dirname}/src/images`,
    },
};

const gatsbyPluginEslint = {
    resolve: 'gatsby-plugin-eslint',
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: { ...siteMetaData },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sass',
        'gatsby-plugin-layout',
        'gatsby-plugin-page-transitions',
        gatsbySourceFileSystem,
        gatsbyPluginEslint,
        manifestPluginConfig,
    ],
};
