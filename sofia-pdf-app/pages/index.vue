<script setup lang="ts">
  import { ThemeSwitcher } from '@/features/theme-switcher'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground transition-colors duration-300">
    <header class="container mx-auto p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-primary">Sofia PDF</h1>
      <ThemeSwitcher />
    </header>
    <main class="container mx-auto p-4">
      <NuxtPage />
    </main>
  </div>
</template>
