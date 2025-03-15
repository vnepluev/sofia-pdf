<script setup lang="ts">
  import { ThemeSwitcher } from '@/features/theme-switcher'
  const { setLocale } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground transition-colors duration-300">
    <header class="container mx-auto p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-primary">Sofia PDF</h1>
      <ThemeSwitcher />
    </header>
    <main class="container mx-auto p-4">
      <div>
        <button @click="setLocale('en')" class="pr-4">en</button>
        <button @click="setLocale('ru')">ru</button>
        <p>{{ $t('welcome') }}</p>
      </div>
    </main>
  </div>
</template>
