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

const manifestPluginConfig = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: "Andrea Francesco Pavia's Portfolio",
    short_name: "Andrea Francesco Pavia's Portfolio",
    start_url: "/",
    background_color: "#d72638",
    icon: "src/images/icon.png",
    crossOrigin: `use-credentials`,
  },
};

module.exports = {
  siteMetadata: {
    
  },
  plugins: [
    "gatsby-plugin-sass",
    manifestPluginConfig
    // Uncomment to enable analytics
    // googleAnalyticsPluginConfig,
    // googleTagManagerPluginConfig
  ]
};