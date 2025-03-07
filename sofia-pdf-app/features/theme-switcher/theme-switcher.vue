<template>
  <button
    @click="toggleTheme"
    class="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
    :title="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
  >
    <div v-if="isDark" class="w-5 h-5">
      <!-- Иконка солнца для темной темы -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </div>
    <div v-else class="w-5 h-5">
      <!-- Иконка луны для светлой темы -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

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
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Инициализация темы при загрузке компонента
  onMounted(() => {
    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem('theme')

    // Проверяем системные настройки, если нет сохраненной темы
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    // Устанавливаем тему на основе сохраненных настроек или системных предпочтений
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)

    // Применяем тему
    updateTheme()

    // Слушаем изменения системных настроек
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
        updateTheme()
      }
    })
  })
</script>
