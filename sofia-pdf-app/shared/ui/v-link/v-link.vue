<script setup lang="ts">
const {
  variant = 'primary',
  to = '',
  external = false,
} = defineProps<{
  variant?: 'primary' | 'white'
  to: string
  external?: boolean
}>()
</script>

<template>
  <component
    :is="external ? 'a' : 'NuxtLink'"
    :to="external ? undefined : to"
    :href="external ? to : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="['v-link', `v-link-${variant}`]"
  >
    <slot />
  </component>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.v-link {
  @apply inline-flex items-center transition-all duration-300 cursor-pointer;
  &:hover {
    text-decoration: underline;
  }
  font-weight: 500;
  font-size: 1.4rem;
  transform: scale(1);
}

.v-link-primary {
  color: hsl(var(--link-color));
}

.v-link-primary:hover {
  transform: scale(var(--button-animation-scale));
}
</style>
