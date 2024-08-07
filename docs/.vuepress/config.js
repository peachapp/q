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
        children: [
          {
            text: "HTML",
            link: "/HTML/index.md",
          },
          {
            text: "CSS",
            link: "/CSS/index.md",
          },
          {
            text: "JAVASCRIPT",
            link: "/JAVASCRIPT/index.md",
          },
          {
            text: "VUE",
            link: "/VUE/index.md",
          },
          {
            text: "REACT",
            link: "/REACT/index.md",
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
    sidebar: {
      "/HTML/": [
        "W3C和Web标准",
        "DOCTYPE",
        "标准模式和怪异模式",
        "H5和HTML5",
        "HTML语义化",
        "块级元素和行内元素",
        "HTML标签",
        "link和@import",
        "src和href",
        "title和alt",
        "iframe",
        "meta",
        "SEO",
        "微格式",
        "网页开发和小程序开发",
        "实现在图片的某个区域做到点击事件",
        "前端开发必记单词",
      ],
      "/CSS/": ["", "css"],
      "/JAVASCRIPT/": [
        "数据类型",
        "判断数据类型",
        "包装类",
        "预解析和变量提升",
        "暂时性死区",
        "浮点数精度",
        "数组的原生方法",
        "forEach和map",
        "forEach跳出循环",
        "arguments",
        "数组合并和对象合并",
        "数组和函数在内存中的存储",
        "深拷贝和浅拷贝",
        "箭头函数",
        "立即执行函数",
        "柯里化",
        "作用域和作用域链",
        "闭包",
        "防抖和节流",
        "内存泄漏",
        "v8垃圾回收机制",
        "原型和原型链",
        "继承",
        "this",
        "call和apply和bind",
        "new操作符",
        "事件捕获事件冒泡",
        "事件委托",
        "ajax",
        "常见的请求方式",
        "跨域",
        "fetch",
        "Promise",
        "Generator",
        "async await",
        "事件循环机制",
        "CommonJS和ES6",
        "一次渲染10w条数据",
        "移动端上拉加载下拉刷新",
        "从输入一个url到浏览器页面展示经历哪些过程",
        "页面重定向",
        "捕获异常",
        "前端监控",
        "进程和线程",
      ],
      "/VUE/": ["", "vue"],
      "/REACT/": ["", "react"],
    },
  }),
};
