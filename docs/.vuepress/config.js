import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: "/",
  lang: 'en-US',
  title: 'ShinyLink',
  description: 'RShiny Based Record Linkage Tool',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],

  theme: defaultTheme({
    // default theme config
    // public file path
    logo: '/images/hero.png',
    repo: 'https://github.com/nelson-sci-labs/shinylink',

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Documentation',
        link: '/guide',
      },
      {
        text: 'Online Demo',
        link: 'https://nelsonscilabs.shinyapps.io/ShinyLink',
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Documentation',
        link: '/Guide/',
        children: [
          '/guide/README.md',
          '/guide/get-started.md',
          '/guide/data-uploading.md',
          '/guide/remove-duplicate.md',
          '/guide/assign-variables.md',
          '/guide/gender-race-recoding.md',
          '/guide/date-formatting.md',
          '/guide/simple-match.md',
        ],
      },
    ],
  }),
  plugins: [
    backToTopPlugin(),
  ],
})
