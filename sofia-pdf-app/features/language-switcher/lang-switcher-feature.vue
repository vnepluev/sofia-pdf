<script setup lang="ts">
/**
 ** Переключения языка (русский/английский)
 */
import { LocalStorageKeys, getFromStorage, saveToStorage } from '~/shared/lib/local-storage'

const { t, locale } = useI18n()

const availableLocales = (process.env.LOCALES || 'ru,en').split(',')

const toggleLocale = () => {
  const currentIndex = availableLocales.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  locale.value = availableLocales[nextIndex] || 'en'

  // Сохраняем выбранный язык в localStorage
  saveToStorage(LocalStorageKeys.LOCALE, locale.value)
}
</script>

<template>
  <button
    @click="toggleLocale"
    class="lang-button"
    :title="
      locale === 'ru'
        ? t('components.langSwitcher.en')
        : t('components.langSwitcher.ru')
    "
  >
    <span class="lang-text">{{
      locale.toUpperCase()
    }}</span>
  </button>
</template>

<style scoped>
.lang-button {
  @apply flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-accent transition-colors min-w-[48px] sm:min-w-[64px];
}

.lang-text {
  @apply text-base font-medium;
}
</style>
