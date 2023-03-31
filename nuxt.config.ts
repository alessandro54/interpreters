// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vuestic/nuxt", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.INTERPRETERS_API_URL!,
      env: process.env.NODE_ENV!,
    },
  },
});
