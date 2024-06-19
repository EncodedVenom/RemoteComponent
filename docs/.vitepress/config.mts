import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RemoteComponent",
  description: "An easy way to network Knit components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Quickstart', link: '/RemoteComponent/quickstart' },
          { text: 'API', link: '/RemoteComponent/api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EncodedVenom/RemoteComponent' }
    ]
  }
})