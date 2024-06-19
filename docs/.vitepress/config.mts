import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RemoteComponent",
  description: "An easy way to network Knit components",
  base: "/RemoteComponent/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Quickstart', link: '/quickstart' },
          { text: 'API', link: '/api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EncodedVenom/RemoteComponent' }
    ]
  }
})
