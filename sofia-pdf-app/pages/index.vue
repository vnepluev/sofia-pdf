<script setup lang="ts">
  /**
   * 404 page
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

  const { getImage } = useImage()

  const bgImage = getImage('/assets/img/404.jpeg', {
    width: 1080,
    quality: 80,
    format: 'webp',
  })
</script>

<template>
  <NuxtImg :src="bgImage.url" />
  {{ bgImage.url }}
  <!-- <div class="hero" :style="{ backgroundImage: `url(${bgImage})` }"></div> -->
</template>

<style lang="postcss" scoped>
  .hero {
    @apply w-screen h-screen bg-cover bg-center bg-no-repeat bg-primary-foreground;
  }
</style>
