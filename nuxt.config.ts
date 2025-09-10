// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    publicKey: process.env.PUBLIC_KEY,
    secretKey: process.env.SECRET_KEY,
  },
  devServer: {
    port: 8000
  },
  app: {
    head: {
      title: 'Vigelon - Drone & EVTOL Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience the future of digital solutions with our cutting-edge platform.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favi-novo.png' }
      ]
    },
    
  },

})
