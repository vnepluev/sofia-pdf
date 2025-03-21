<script setup lang="ts">
/**
 ** Layout для процесса создания нового заказа с выпадающим меню
 */
import { ref } from 'vue'
import { Menu, X, User, LogOut, ChevronRight } from 'lucide-vue-next'
import { ThemeSwitcherFeature } from '~/features/theme-switcher'
import { LangSwitcherFeature } from '~/features/language-switcher'

const { t } = useI18n()
const isMenuOpen = ref(false)

// Функция для переключения состояния меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="new-order-layout">
    <!-- Шапка -->
    <header class="header">
      <button
        class="menu-button"
        @click="toggleMenu"
        :aria-label="t('layouts.newOrder.openMenu')"
      >
        <Menu class="w-6 h-6" />
      </button>
      <h1 class="header-title">{{ t('app.name') }}</h1>
    </header>

    <!-- Оверлей для закрытия меню при клике вне его -->
    <div
      class="sidebar-overlay"
      :class="{ active: isMenuOpen }"
      @click="isMenuOpen = false"
    ></div>

    <!-- Боковое меню -->
    <aside
      class="sidebar"
      :class="{ open: isMenuOpen }"
    >
      <div class="sidebar-header">
        <h2 class="sidebar-title">
          {{ t('layouts.newOrder.menuTitle') }}
        </h2>
        <button
          class="close-button"
          @click="isMenuOpen = false"
          :aria-label="t('layouts.newOrder.closeMenu')"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <nav class="sidebar-nav">
        <!-- Профиль -->
        <a
          href="/profile"
          class="nav-item"
        >
          <User class="nav-icon" />
          <span>{{ t('layouts.newOrder.profile') }}</span>
          <ChevronRight class="arrow-icon" />
        </a>

        <!-- Переключатель темы -->
        <div class="theme-switcher-wrapper">
          <div class="nav-icon-wrapper">
            <User class="nav-icon" />
          </div>
          <ThemeSwitcherFeature />
        </div>

        <!-- Переключатель языка -->
        <div class="lang-switcher-wrapper">
          <div class="nav-icon-wrapper">
            <User class="nav-icon" />
          </div>
          <LangSwitcherFeature />
        </div>
      </nav>

      <div class="sidebar-footer">
        <button class="logout-button">
          <LogOut class="nav-icon" />
          <span>{{ t('layouts.newOrder.logout') }}</span>
        </button>
      </div>
    </aside>

    <!-- Основное содержимое -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
@reference "../app/styles/theme.css";

.new-order-layout {
  @apply flex flex-col min-h-screen bg-[hsl(var(--background))];
}

.header {
  @apply flex items-center h-16 border-b border-border z-10;
  background-color: hsl(var(--card));
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.menu-button {
  @apply flex items-center justify-center w-10 h-10 transition-colors;
  &:hover {
    background-color: hsl(var(--accent));
  }
  margin-right: 1rem;
  border-radius: 0.375rem;
}

.header-title {
  @apply text-xl text-[hsl(var(--foreground))];
  font-weight: 500;
}

.sidebar-overlay {
  @apply fixed inset-0 bg-black/50 z-20 opacity-0 pointer-events-none transition-opacity duration-300;
}

.sidebar-overlay.active {
  @apply opacity-100 pointer-events-auto;
}

.sidebar {
  @apply fixed top-0 left-0 bottom-0 w-64 border-r border-border z-30 transform -translate-x-full transition-transform duration-300 flex flex-col;
  background-color: hsl(var(--card));
}

.sidebar.open {
  @apply translate-x-0;
}

.sidebar-header {
  @apply flex items-center justify-between h-16 border-b border-border;
  padding-left: 1rem;
  padding-right: 1rem;
}

.sidebar-title {
  @apply text-lg text-[hsl(var(--foreground))];
  font-weight: 500;
}

.close-button {
  @apply flex items-center justify-center w-10 h-10 transition-colors;
  &:hover {
    background-color: hsl(var(--accent));
  }
  border-radius: 0.375rem;
}

.sidebar-nav {
  @apply overflow-y-auto;
  flex: 1 1 0%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.nav-item {
  @apply flex items-center text-[hsl(var(--foreground))] transition-colors relative;
  &:hover {
    background-color: hsl(var(--accent));
  }
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.nav-icon,
.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.nav-icon {
  @apply mr-3;
}

.arrow-icon {
  @apply ml-auto;
}

.theme-switcher-wrapper,
.lang-switcher-wrapper {
  @apply flex items-center text-[hsl(var(--foreground))] transition-colors;
  &:hover {
    background-color: hsl(var(--accent));
  }
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.nav-icon-wrapper {
  @apply mr-3;
}

.sidebar-footer {
  @apply border-t border-border;
  padding: 1rem;
}

.logout-button {
  @apply flex items-center w-full transition-colors;
  &:hover {
    background-color: hsl(var(--accent));
  }
  color: #ef4444;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.375rem;
}

.main-content {
  flex: 1 1 0%;
  padding: 1rem;
}
</style>
