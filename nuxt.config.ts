// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'sofia-pdf-app',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  css: ['~/app/styles/tailwind.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './sofia-pdf-app/shared/ui',
  },
  i18n: {
    vueI18n: '../sofia-pdf-app/app/i18n/i18n.config.ts',
    lazy: true,
    defaultLocale: 'ru',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    skipSettingLocaleOnNavigate: false,
  },
})
