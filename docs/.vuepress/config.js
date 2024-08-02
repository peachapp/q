// 配置文件

const { defaultTheme } = require("vuepress");

module.exports = {
  /** 站点配置 */
  // 部署站点的基础路径。如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
  base: "/",
  // 站点的语言。它将会在最终渲染出的 HTML 中作为 <html> 标签的 lang 属性。
  lang: "zh-CN",
  // 站点的标题。它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
  title: "桃桃康的博客 ！",
  // 站点的描述。它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖。
  description: "...",
  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签。
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  // 多语言支持的各个语言 locales。
  locales: {},
  /** 主题配置 */
  // 设置站点要使用的主题。如果不设置该选项，将会使用默认主题。
  theme: defaultTheme({
    repo: "https://github.com/peachapp/q.git",
    // 导航栏
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端",
        link: "/HTML/index.md",
        children: [
          {
            text: "HTML",
            // link: "/HTML/index.md",
            link: "/HTML/html.md",
          },
          {
            text: "CSS",
            // link: "/CSS/index.md",
            link: "/CSS/css.md",
          },
          {
            text: "JAVASCRIPT",
            // link: "/JAVASCRIPT/index.md",
            link: "/JAVASCRIPT/js.md",
          },
          {
            text: "VUE",
            // link: "/VUE/index.md",
            link: "/VUE/vue.md",
          },
          {
            text: "REACT",
            // link: "/REACT/index.md",
            link: "/REACT/react.md",
          },
        ],
      },
      {
        text: "后端",
        children: [
          {
            text: "NODE",
            link: "/NODE/index.md",
          },
        ],
      },
      {
        text: "数据库",
        children: [{ text: "Mysql数据库", link: "" }],
      },
      {
        text: "WEBGL",
        link: "/WEBGL/index.md",
      },
      {
        text: "关于我",
        link: "/ABOUTME/index.md",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: "HTML",
        // link: "/HTML/index.md",
        path: "/HTML/html.md",
      },
    ],
  }),
};
