import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  /*
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  */
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
]);
