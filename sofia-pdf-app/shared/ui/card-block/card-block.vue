<script setup lang="ts">
/**
 ** TitleBlock component
 * Компонент для отображения заголовка и подзаголовка
 *
 * @slot default - основное содержимое
 */
</script>

<template>
  <div class="card-block">
    <slot />
  </div>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.card-block {
  margin: 1rem;
  padding: 2rem 4rem;
  text-align: center;
  color: hsl(var(--card-text));
  background-color: hsl(var(--card));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 42rem;
  width: 100%;
}

@media (max-width: var(--screen-md)) {
  .card-block {
    padding: 1.5rem 2rem;
    margin: 0.5rem;
  }
}
</style>
