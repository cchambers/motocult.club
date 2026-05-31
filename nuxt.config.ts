export default defineNuxtConfig({
  compatibilityDate: '2025-05-31',
  devtools: { enabled: false },
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
