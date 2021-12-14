import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#dd9933",
  },
  content: {
    markdown: {
      remarkPlugins: ["~~/plugins/contributors.js"],
    },
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  router: {
    base: "/42AbuDhabi-docs/",
  },
  i18n: {
    locales:()=>[
      {
        code: "ar",
        iso: "ar-Ar",
        file: "en-US.js",
        name: "العربية",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
  },
  loading: { color: "#00CD81" },
});
