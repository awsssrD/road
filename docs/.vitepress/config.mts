import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Road",
  description: "My Road",
  head: [["link", { rel: "icon", href: "/motorway.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Libs", link: "/libs" },
    ],

    sidebar: [
      {
        text: "Frontend",
        items: [
          // { text: "介绍", link: "/frontend/index" },
          { text: "架构", link: "/frontend/architecture" },
        ],
      },
      {
        text: "Backend",
        // items: [{ text: "介绍", link: "/backend" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/awsssrD" }],
  },
});
