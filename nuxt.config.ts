// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  srcDir: process.env.SRC_DIR,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
  ],
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
    componentDir: `./${process.env.SRC_DIR}/shared/ui`,
  },
  i18n: {
    vueI18n: `../${process.env.SRC_DIR}/app/i18n/i18n.config.ts`,
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
  runtimeConfig: {
    // Серверные переменные
    // dbConnection: process.env.DB_CONNECTION,

    // Клиентские переменные
    public: {
      environment: process.env.NODE_ENV,
    },
  },
})