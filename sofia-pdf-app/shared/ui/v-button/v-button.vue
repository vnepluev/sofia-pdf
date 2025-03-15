<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next'

const {
  variant = 'primary',
  type = 'button',
  disabled = false,
  icon = undefined,
} = defineProps<{
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: LucideIcon
}>()
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'v-button',
      variant === 'primary' ? 'v-button-primary' : 'v-button-secondary',
      disabled && 'v-button-disabled',
    ]"
  >
    <component
      v-if="icon"
      :is="icon"
      class="v-button-icon"
    />
    <slot />
  </button>
</template>

<style scoped>
.v-button {
  @apply flex items-center justify-center rounded-md px-6 py-2 text-base font-medium;
  transition: all var(--button-animation-duration);
}

.v-button:hover {
  transform: scale(var(--button-animation-scale));
  @apply shadow-md;
}

.v-button-primary {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
}

.v-button-primary:hover {
  background-color: var(--button-primary-hover-bg);
}

.v-button-primary:focus {
  @apply outline-none ring-2 ring-offset-2;
  --tw-ring-color: var(--button-focus-ring);
}

.v-button-secondary {
  border: 1px solid var(--button-secondary-border);
  color: var(--button-secondary-text);
}

.v-button-secondary:hover {
  background-color: var(--button-secondary-hover-bg);
  color: var(--button-secondary-hover-text);
}

.v-button-secondary:focus {
  @apply outline-none ring-2 ring-offset-2;
  --tw-ring-color: var(--button-focus-ring);
}

.v-button-disabled {
  @apply cursor-not-allowed opacity-50;
}

.v-button-icon {
  @apply mr-2 h-5 w-5;
}
</style>
