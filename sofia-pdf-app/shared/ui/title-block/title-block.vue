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
    class="p-16 m-16"
    :class="{
      'bg-primary text-foreground rounded-lg shadow-lg': props.isBackground,
      'bg-transparent': !props.isBackground,
    }"
  >
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-4">
        <slot></slot>
      </h1>
      <p class="text-3xl">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
