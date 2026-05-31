export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: false },
  nitro: {
    preset: 'netlify'
  },
  app: {
    head: {
      title: 'Moto Cult',
      meta: [
        { name: 'description', content: 'Moto Cult — Horizon Club Scene' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/motocult.png' },
      ],
    },
  },
})
