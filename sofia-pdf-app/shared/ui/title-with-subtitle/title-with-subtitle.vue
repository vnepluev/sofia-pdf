<script setup lang="ts">
/**
 ** TitleWithSubtitle component
 *
 * @prop title - заголовок
 * @prop subtitle - подзаголовок
 *
 */

const { title = '', subtitle = '' } = defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div>
    <h1 class="title-text">
      {{ title }}
    </h1>
    <p class="subtitle-text">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.title-text {
  @apply font-bold text-3xl text-on-light mb-4;
  line-height: 1.2;
}

.subtitle-text {
  @apply italic text-lg text-on-light max-w-[34rem];
  line-height: 1.4;
}
</style>
