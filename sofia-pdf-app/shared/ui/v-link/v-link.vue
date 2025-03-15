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
    :class="[
      'v-link',
      `v-link-${variant}`
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.v-link {
  @apply inline-flex items-center text-base font-medium transition-all duration-300 hover:underline cursor-pointer;
  transform: scale(1);
}

.v-link-primary {
  color: var(--button-primary-bg);
}

.v-link-primary:hover {
  color: var(--button-primary-hover-bg);
  transform: scale(var(--button-animation-scale));
}

.v-link-white {
  @apply text-white;
}

.v-link-white:hover {
  @apply text-gray-200;
  transform: scale(var(--button-animation-scale));
}
</style>
