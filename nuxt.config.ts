// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },
  nitro: {
    preset: 'static'
  },
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'JoyInZaika\'s PowerBites - Premium Protein Bars | Fuel Your Day Naturally',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover JoyInZaika\'s PowerBites - delicious, premium protein bars made with natural ingredients. Perfect for your active lifestyle. Fuel your body with joy!' },
        { name: 'keywords', content: 'PowerBites, protein bars, healthy snacks, natural ingredients, fitness food, energy bars, JoyInZaika' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
