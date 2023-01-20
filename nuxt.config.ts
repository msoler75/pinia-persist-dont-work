// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // 'nuxt-windicss',
    // 'nuxt-runtime-compiler',
  ],

  
})
