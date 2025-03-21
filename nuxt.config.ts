// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  srcDir: process.env.SRC_DIR,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    // Удаляем @nuxtjs/tailwindcss, так как теперь используем Vite плагин
    '@nuxt/image',
    '@nuxt/ui',
  ],
  css: ['~/app/styles/tailwind.css'],
  // Удаляем конфигурацию PostCSS, так как теперь используем Vite плагин
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    theme: {
      transitions: true,
    },
  },

  // Конфигурация модуля tailwindcss
  tailwindcss: {
    // Указываем, что используем @tailwindcss/postcss вместо tailwindcss
    exposeConfig: true,
    // Отключаем автоматическую конфигурацию PostCSS
    configPath: '~/tailwind.config.js',
    cssPath: '~/app/styles/tailwind.css',
    // Важно для Tailwind CSS v4
    viewer: false,
  },

  // Алиасы путей (перенесены из components.json)
  alias: {
    '@/entities': '~/entities',
    '@/shared/lib/utils': '~/shared/lib/utils',
    '@/shared/ui': '~/shared/ui',
    '@/shared/lib': '~/shared/lib',
    '@/features': '~/features',
    '@/widgets': '~/widgets',
    '@/pages': '~/pages',
    '@/app': '~/app',
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
      ownerPhone: process.env.OWNER_PHONE,
      ownerEmail: process.env.OWNER_EMAIL,
    },
  },
})
