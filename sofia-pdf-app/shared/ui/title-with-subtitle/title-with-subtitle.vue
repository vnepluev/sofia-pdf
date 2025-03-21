<script setup lang="ts">
/**
 ** TitleWithSubtitle component
 *
 * @slot title - заголовок
 * @slot subtitle - подзаголовок
 *
 */
</script>

<template>
  <div class="wrapper">
    <h1 class="title-text">
      <slot name="title"></slot>
    </h1>
    <p class="subtitle-text">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.wrapper {
  width: 100%;
  margin-inline: auto;
  text-align: center;
}

.title-text {
  font-weight: 700;
  font-size: var(--font-size-xl);
  line-height: var(--line-height-base);
  color: hsl(var(--card-text));
  margin-bottom: 1rem;
}

.subtitle-text {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-lg);
  color: hsl(var(--card-text));
  max-width: 86rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) {
    font-size: calc(var(--font-size-lg));
  }
}

@media (max-width: var(--screen-md)) {
  .title-text {
    font-size: calc(var(--font-size-xl) + 1.5rem);
  }

  .subtitle-text {
    font-size: calc(var(--font-size-lg) + 1.25rem);
  }
}
</style>
