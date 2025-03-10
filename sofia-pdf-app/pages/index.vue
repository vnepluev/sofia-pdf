<script setup lang="ts">
/**
 ** 404 page
 *
 * TODO оптимизировать фоновую картинку
 */

const { t } = useI18n()

definePageMeta({
  layout: 'blank-layout',
})

useSeoMeta({
  title: t('pages.404.title'),
  ogTitle: t('pages.404.title'),
  description: t('pages.404.description'),
  ogDescription: t('pages.404.description'),
})
</script>

<template>
  <div class="hero">
    <div class="content-wrapper">
      <title-block is-background class="title-container">
        <template #default>{{ t('pages.404.title') }}</template>
        <template #subtitle>{{ t('pages.404.description') }}</template>
      </title-block>
    </div>
  </div>
</template>

<style scoped>
.hero {
  @apply relative w-screen h-screen bg-cover bg-center bg-no-repeat bg-primary-foreground;
  background-image: url('/assets/img/404-mobile.webp');
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
}

.content-wrapper {
  @apply absolute inset-0 flex items-center justify-center;
  z-index: 2;
}
</style>
