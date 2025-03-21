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
      variant === 'primary'
        ? 'v-button-primary'
        : 'v-button-secondary',
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
@reference "@/app/styles/theme.css";

.v-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-weight: 500;
  font-size: var(--font-size-sm);
  border-radius: var(--button-border-radius);
  border: var(--button-border-size) solid
    hsl(var(--button-primary-border));
  transition: all var(--button-animation-duration);

  @media (max-width: 640px) {
    font-size: var(--font-size-lg);
    padding: 2rem 4rem;
  }
}

.v-button:hover {
  transform: scale(var(--button-animation-scale));
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.v-button-primary {
  background-color: hsl(var(--button-primary-bg));
  color: hsl(var(--button-primary-text));
}

.v-button-primary:hover {
  background-color: hsl(var(--button-primary-hover-bg));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-button-primary:focus {
  @apply outline-none ring-2 ring-offset-2;
  --tw-ring-color: var(--button-focus-ring);
}

.v-button-primary:active {
  transform: translateY(1px);
  background-color: hsl(var(--button-primary-hover-bg));
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.v-button-secondary {
  border: var(--button-border-size) solid
    hsl(var(--button-secondary-border));
  color: hsl(var(--button-secondary-text));
  background-color: hsl(var(--button-secondary-bg));
  border-radius: var(--button-border-radius);
}

.v-button-secondary:hover {
  background-color: hsl(var(--button-secondary-hover-bg));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-button-secondary:focus {
  @apply outline-none ring-2 ring-offset-2;
  --tw-ring-color: var(--button-focus-ring);
}

.v-button-secondary:active {
  transform: translateY(1px);
  background-color: hsl(var(--button-secondary-hover-bg));
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.v-button-disabled {
  @apply cursor-not-allowed opacity-50;
}

.v-button-icon {
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 0.5rem;
}
</style>
