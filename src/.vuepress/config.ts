import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
