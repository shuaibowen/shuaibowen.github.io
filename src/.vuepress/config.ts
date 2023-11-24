import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "帥的博客",
  description: "vuepress-theme-hope 的博客",

  theme,

  plugins: [
    searchPlugin({
      // 你的选项
    }),
    
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
