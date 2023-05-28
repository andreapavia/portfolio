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

const gatsbyPluginGoogleFonts = {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
        fonts: [`Press Start 2P\:400`],
        display: 'swap',
    },
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
        `gatsby-plugin-glslify`,
        gatsbySourceFileSystem,
        gatsbyPluginEslint,
        manifestPluginConfig,
        gatsbyPluginGoogleFonts,
    ],
};

{
    /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link> */
}
