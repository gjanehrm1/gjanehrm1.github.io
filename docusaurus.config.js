// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '준돌이네',
  tagline: '초보 개발자',
  url: 'https://gjanehrm1.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: "gh-pages", // https://docusaurus.io/ko/docs/api/docusaurus-config#deploymentBranch
  trailingSlash: false, //https://docusaurus.io/ko/docs/api/docusaurus-config#trailingSlash
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gjanehrm1', // Usually your GitHub org/user name.
  projectName: 'gjanehrm1.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '준돌이네',
        logo: {
          alt: '뚜들겨 팹니다',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/프로그래밍',
            position: 'left',
            label: '프로그래밍',
          },
          {to: '/blog', label: '끄적끄적', position: 'left'},
          {
            href: 'https://gjanehrm1.github.io',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '프로그래밍',
            items: [
              {
                docId: 'programming/react/react',
                label: 'React',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                docId: 'programming/javascript/javascript',
                label: 'Java Script',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                docId: 'programming/java/java',
                label: 'JAVA',
                href: 'https://twitter.com/docusaurus',
              },
              {
                docId: 'programming/algorithm/algorithm',
                label: 'Algorithm',
                href: 'https://twitter.com/docusaurus',
              },
              {
                docId: 'programming/web/web',
                label: 'Web Develop',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '끄적끄적',
            items: [
              {
                label: '일상 이야기',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gjanehrm1',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 준돌이네, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

