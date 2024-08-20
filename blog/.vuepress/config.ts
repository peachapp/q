import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  /** 站点配置 */
  // 部署站点的基础路径。如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
  base: "/",
  // 站点的语言。它将会在最终渲染出的 HTML 中作为 <html> 标签的 lang 属性。
  lang: "zh-CN",
  // 站点的标题。它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
  title: "🍑的博客 ！",
  // 站点的描述。它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖。
  description: "...",
  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签。
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  // 多语言支持的各个语言 locales。
  locales: {},
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
