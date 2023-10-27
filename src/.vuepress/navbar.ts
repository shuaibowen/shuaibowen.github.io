import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "10k-rounded",
    link: "/demo/",
  },
  {
    text: "代码笔记",
    icon: "code",
    link: "/posts/",
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
