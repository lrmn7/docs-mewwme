// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  sidebars: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        {
          type: 'doc',
          id: 'Introduction/landing',
        },
        {
          type: 'doc',
          id: 'Introduction/features',
        },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'Getting Started/adding_mewwme',
        },
        {
          type: 'doc',
          id: 'Getting Started/play_song',
        },
        {
          type: 'doc',
          id: 'Getting Started/commands',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          type: 'doc',
          id: 'Advanced/faq',
        },
        {
          type: 'doc',
          id: 'Advanced/playlists',
        },
        {
          type: 'doc',
          id: 'Advanced/favorites',
        },
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      items: [
        {
          type: 'doc',
          id: 'Dashboard/starting_dashboard',
        },
      ],
    },
  ],
};
