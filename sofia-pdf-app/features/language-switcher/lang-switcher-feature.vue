<script setup lang="ts">
/**
 ** Переключения языка (русский/английский)
 */
import {
  LocalStorageKeys,
  getFromStorage,
  saveToStorage,
} from '~/shared/lib/local-storage-lib'

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
    <span class="lang-text">{{ locale.toUpperCase() }}</span>
  </button>
</template>

<style scoped>
.lang-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  padding: var(--button-inline-padding);
  background-color: hsl(var(--bg-light));
  color: hsl(var(--text-on-light));
  font-weight: 500;
  border: 1px solid hsl(var(--button-primary-bg));
  transition: all var(--transition-standard);

  @media (min-width: var(--screen-sm)) {
    padding: 0.5rem 2rem;
  }

  &:hover {
    background-color: hsl(var(--btn-hover));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: hsl(var(--button-primary-hover-bg));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }

  :root.dark & {
    background-color: rgba(255, 255, 255, 0.1);
    color: hsl(var(--text-on-dark));
    border-color: rgba(255, 255, 255, 0.2);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      color: hsl(var(--text-on-dark));
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.lang-text {
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--font-size-xl);
  color: hsl(var(--link-color));

  @media (min-width: 640px) {
    font-size: var(--font-size-sm);
  }
}
</style>
