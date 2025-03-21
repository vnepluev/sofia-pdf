<script setup lang="ts">
/**
 * Компонент для переключения темы (светлая/темная)
 */
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import {
  LocalStorageKeys,
  getFromStorage,
  saveToStorage,
} from '~/shared/lib/local-storage-lib'

const { t } = useI18n()
const isDark = ref(false)

// Функция для переключения темы
const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

// Функция для обновления темы в DOM
const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    saveToStorage(LocalStorageKeys.THEME, 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    saveToStorage(LocalStorageKeys.THEME, 'light')
  }
}

// Инициализация темы при загрузке компонента
onMounted(() => {
  // Проверяем сохраненную тему в localStorage
  const savedTheme = getFromStorage(LocalStorageKeys.THEME)

  // Проверяем системные настройки, если нет сохраненной темы
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  // Устанавливаем тему на основе сохраненных настроек или системных предпочтений
  isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)

  // Применяем тему
  updateTheme()

  // Слушаем изменения системных настроек
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!getFromStorage(LocalStorageKeys.THEME)) {
        isDark.value = e.matches
        updateTheme()
      }
    })
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="theme-button"
    :title="
      isDark
        ? t('components.themeSwitcher.toLight')
        : t('components.themeSwitcher.toDark')
    "
  >
    <Sun
      v-if="isDark"
      class="icon"
    />
    <Moon
      v-else
      class="icon"
    />
  </button>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.theme-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.8rem;
  border-radius: var(--radius-lg);
  padding: var(--button-inline-padding);
  background-color: hsl(var(--bg-light));
  font-weight: 500;
  border: 1px solid hsl(var(--button-primary-bg));
  transition: all var(--transition-standard);
  height: 100%;

  font-size: var(--font-size-xl);
  color: hsl(var(--link-color));

  @media (min-width: 640px) {
    font-size: var(--font-size-lg);
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

.icon {
  width: var(--font-size-sm);
  height: var(--font-size-sm);

  @media (max-width: 640px) {
    width: calc(var(--font-size-xl));
    height: calc(var(--font-size-xl));
  }
}
</style>
