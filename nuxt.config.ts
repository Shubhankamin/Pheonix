import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },

  css: ["/assets/css/style.css"],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",

    //...
  ],

  site: { name: "PHEONIX ACADEMY", url: "https://nemmadicare.com/" },
  sitemap: {
    defaults: {
      lastmod: "2024-11-29",
      priority: 0.5,
      changefreq: "weekly",
    },
    xslColumns: [
      // URL column must always be set, no value needed
      { label: "URL", width: "75%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
    // autoLastmod: true,
    discoverImages: false,
    xslTips: false,
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: "2025-01-04",
});
