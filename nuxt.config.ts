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
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
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
    cssPath: './assets/css/tailwind.css',
    config: {
      theme: {
        extend: {
          colors: {
            background: 'hsl(var(--background))',
            'icon-hover': 'hsl(var(--icon-hover))',
            icon: 'hsl(var(--icon))',
            primary: 'hsl(var(--primary))',
            secondary: 'hsl(var(--secondary))',
            border: 'hsl(var(--border))',
          },
        },
      },
      content: [
        `app/components/**/*.{vue,js}`,
        `app/layouts/**/*.vue`,
        'app/pages/**/*.vue',
        'app/composables/**/*.{js,ts}',
        `plugins/**/*.{js,ts}`,
        `app/App.{js,ts,vue}`,
        `app/app.{js,ts,vue}`,
      ],
      darkMode: 'class',

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      plugins: [require('tailwindcss-primeui')],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  primevue: {
    options: {
      theme: 'none',
    },
  },
})
