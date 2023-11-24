import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "数据库",
    prefix: "/数据库",
    icon: "database",
    children: [
      {
        text: "MySQL",
        prefix: "/MySQL",
        children: [
          // {
          //   text: "基础篇",
          //   // icon: "pen-to-square",
          //   link: "/基础篇/README",
          // },
          // {
          //   text: "高级篇",
          //   // icon: "pen-to-square",
          //   link: "/高级篇/README",
          // },
          // {
          //   text: "进阶篇",
          //   // icon: "pen-to-square",
          //   link: "/进阶篇/README",
          // },
        ]
      },
      {
        text: "Redis",
        prefix: "/Redis/",
        children: [
          {
            text: "基础篇",
            // icon: "pen-to-square",
            link: "基础篇/README",
          },
          {
            text: "实战篇",
            // icon: "pen-to-square",
            link: "实战篇/README",
          },
          {
            text: "高级篇",
            // icon: "pen-to-square",
            link: "高级篇/README",
          },
          {
            text: "原理篇",
            // icon: "pen-to-square",
            link: "原理篇/README",
          },
        ]
      }
    ]
  },
  {
    text: "Java",
    icon: "fa-brands fa-java",
    prefix: "/Java",
    children: [
      {
        text: "Java基础",
        // icon: "pen-to-square",
        prefix: "/JavaBasic",
        children: [
          {
            text: "基础篇",
            // icon: "pen-to-square",
            link: "/基础篇/REDAME",
          },
          {
            text: "高级篇",
            // icon: "pen-to-square",
            link: "/高级篇/REDAME"
          },
        ]
      },
      {
        text: "Java进阶",
        // icon: "pen-to-square",
        prefix: "/JavaAdvanced",
        children: [
          {
            text: "大数据",
            // icon: "pen-to-square",
            link: "/大数据/REDAME"
          },
          {
            text: "并发框架",
            // icon: "pen-to-square",
            link: "/concurrent"
          },
        ]
      },
    ]
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
