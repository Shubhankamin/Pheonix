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

  site: { name: "PHEONIX ACADEMY", url: "https://pheonixacademy.in/" },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
    excludeAppSources: true,
    xslColumns: [
      // URL column must always be set, no value needed
      { label: "URL", width: "75%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
    // autoLastmod: true,
    discoverImages: false,
    xslTips: false,
  },

  nitro: {
    routeRules: {
      "/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
    },
  },

  runtimeConfig: {
    public: {
      supaBaseUrl: process.env.SUPABASE_URL,
      supaBaseKey: process.env.SUPABASE_KEY,
      resendKey: process.env.RESEND_KEY,
    },
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
