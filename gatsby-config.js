const googleAnalyticsPluginConfig = {
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: [
      "G-Q1TM1KGNSK",
    ],
    pluginConfig: {
      head: true,
    },
  },
};

const googleTagManagerPluginConfig = {
  resolve: "gatsby-plugin-google-tagmanager",
  options: {
    id: "GTM-T8VMFNB",
    includeInDevelopment: false,
    defaultDataLayer: { platform: "gatsby" },
    dataLayerName: "dataLayer",
    enableWebVitalsTracking: true,
  },
};

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.andreafrancescopavia.it/`
  },
  plugins: [
    "gatsby-plugin-sass",
    // Uncomment to enable analytics
    // googleAnalyticsPluginConfig,
    // googleTagManagerPluginConfig
  ]
};