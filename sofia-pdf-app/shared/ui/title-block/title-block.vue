<script setup lang="ts">
/**
 ** TitleBlock component
 * Компонент для отображения заголовка и подзаголовка
 *
 * @prop isBackground - флаг для отображения фона (белый)
 * @slot default - основной текст (заголовок)
 * @slot subtitle - подзаголовок
 */

type Props = {
  isBackground?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isBackground: false,
})

defineSlots<{
  default(): any
  subtitle(): any
}>()
</script>

<template>
  <div
    class="p-4 m-4"
    :class="{
      'bg-primary text-foreground rounded-lg shadow-lg': props.isBackground,
      'bg-transparent': !props.isBackground,
    }"
  >
    <div class="container mx-auto px-4">
      <h1 class="title-text font-bold mb-4">
        <slot></slot>
      </h1>
      <p class="subtitle-text">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.title-text {
  font-size: 2.5rem;
  line-height: 1.2;
}

.subtitle-text {
  font-size: 1.5rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .title-text {
    font-size: 2rem;
  }
  
  .subtitle-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 1.75rem;
  }
  
  .subtitle-text {
    font-size: 1.125rem;
  }
}
</style>
