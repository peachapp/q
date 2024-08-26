import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "前端",
    icon: "pen-to-square",
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
      {
        text: "UNIAPP和WX",
        link: "/UNIAPP和WX/index.md",
      },
    ],
  },
  {
    text: "后端",
    icon: "pen-to-square",
    children: [
      {
        text: "NODE",
        link: "/NODE/index.md",
      },
    ],
  },
  // {
  //   text: "数据库",
  //   icon: "database",
  //   children: [{ text: "Mysql数据库", link: "" }],
  // },
  {
    text: "WEBGL",
    icon: "cube",
    link: "/WEBGL/index.md",
  },
  {
    text: "工具",
    icon: "wrench",
    link: "/TOOL/index.md"
  },
  {
    text: "UI设计",
    icon: "palette",
    link: "/UI/index.md"
  },
  {
    text: "问题",
    icon: "bug",
    link: "/BUGS/index.md"
  }
]);
