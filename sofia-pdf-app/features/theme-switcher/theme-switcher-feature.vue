<script setup lang="ts">
/**
 * Компонент для переключения темы (светлая/темная)
 */
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { LocalStorageKeys, getFromStorage, saveToStorage } from '~/shared/lib/local-storage'

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
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  // Устанавливаем тему на основе сохраненных настроек или системных предпочтений
  isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)

  // Применяем тему
  updateTheme()

  // Слушаем изменения системных настроек
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
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
    :title="isDark ? t('components.themeSwitcher.toLight') : t('components.themeSwitcher.toDark')"
  >
    <Sun v-if="isDark" class="icon" />
    <Moon v-else class="icon" />
  </button>
</template>

<style scoped>
.theme-button {
  @apply flex items-center justify-center px-2 sm:px-3 h-full rounded-md hover:bg-accent transition-colors min-w-[48px] sm:min-w-[64px];
}

.icon {
  @apply w-5 h-5 sm:w-6 sm:h-6;
}
</style>
