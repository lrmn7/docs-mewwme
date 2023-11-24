// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mewwme`s',
  tagline: 'Mewwme`s is the fastest, most feature rich bot ever.',
  url: 'https://docs.mewwme.is-a.fun',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mewwme.webp',
  organizationName: 'Madebytragic',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/mewwme/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          path: 'docs',
          routeBasePath: '/',
          include: ['**/**/*.mdx'],
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
        },
        blog: {
          blogTitle: "Mewwme's Blog",
          blogDescription: 'The ramblings of the Developers @ Mewwme`s',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Mewwme's`,
          },
          showReadingTime: true,
          editUrl: 'https://github.com/mewwme/docs/',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexPages: true,
        docsRouteBasePath: '/',
        blogRouteBasePath: '/blog',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'mewwme-logo',
          src: 'img/mewwme.webp',
        },
        items: [{to: 'blog', label: 'Blog', position: 'left'}],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Stay In The Loop ',
            items: [
              {
                label: 'Server Support',
                to: 'https://mewwme.is-a.fun/support',
              },
              {
                label: 'Invite',
                to: 'https://mewwme.is-a.fun/invite',
              },
              {
                label: 'Sponsor',
                to: 'https://mewwme.is-a.fun/sponsor',
              },
            ],
          },
          {
            title: 'Partners',
            items: [
              {
                label: 'Mangex Hosting',
                to: 'https://hosting.mangex.pro/',
              },
              {
                label: 'Oh!BOTLiST',
                to: 'https://ohbotlist.is-a.fun/',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/@soniaoctarini/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Beranda',
                to: 'https://mewwme.is-a.fun',
              },
              {
                label: 'Privacy Policy',
                to: 'https://mewwme.is-a.fun/privacy',
              },
              {
                label: 'Terms Of Service',
                to: 'https://mewwme.is-a.fun/termsofservice',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Mewwme's`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {},
      },
    },
};

module.exports = config;
