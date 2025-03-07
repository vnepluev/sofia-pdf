import en from '@/app/i18n/locales/en.json'
import ru from '@/app/i18n/locales/ru.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
    { code: 'en', iso: 'en', name: 'English' },
    { code: 'ru', iso: 'ru', name: 'Russian' },
  ],
  messages: {
    en,
    ru,
  },
}))
