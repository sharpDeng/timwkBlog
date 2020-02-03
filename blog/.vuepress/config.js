module.exports = {
  title: 'timwk Blog',
  description: 'timwk的日常记录',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  base: '/timwkBlog/',
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '博客',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/sharpDeng',
        }
      ],
      copyright: [
        {
          text: '粤ICP备20002145号-1',
          link: 'http://www.beian.gov.cn',
        },
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
