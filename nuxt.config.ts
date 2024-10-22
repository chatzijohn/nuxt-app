// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: {

      content: [
        `app/components/**/*.{vue,js}`,
        `app/layouts/**/*.vue`,
        'app/pages/**/*.vue',
        'app/composables/**/*.{js,ts}',
        `plugins/**/*.{js,ts}`,
        `app/App.{js,ts,vue}`,
        `app/app.{js,ts,vue}`
      ],
      darkMode: 'class',


      plugins: [require('tailwindcss-primeui')]
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light'
  },
  primevue: {
    options: {
      theme: 'none'
    }
  }
})