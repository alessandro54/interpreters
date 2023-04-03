// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Traductores e intérpretes de lenguas indígenas",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.INTERPRETERS_API_URL!,
      env: process.env.NODE_ENV!,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@nuxtjs/eslint-module",
  ],
});
