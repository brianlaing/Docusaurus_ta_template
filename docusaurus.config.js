module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
//    algolia: {
//      apiKey: 'YOUR_API_KEY',
//      indexName: 'YOUR_INDEX_NAME',
//    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} KYOCERA Document Solutions, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // In order to display a link to edit your documents, please change this value.
          // Refer to Docusaurus v2 documentation for more info.
          // editUrl: 'http://easydita.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
 plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
    indexDocs: true,
         docsRouteBasePath: '/',
         indexDocSidebarParentCategories: 3,
         indexPages: false,
         language: ["en",  "ja"],
     }]
  ],
  i18n: {
    "defaultLocale": "en",
    "locales": [
      "en",
      "ja-jp"
    ],
    "localeConfigs": {}
  }
};
