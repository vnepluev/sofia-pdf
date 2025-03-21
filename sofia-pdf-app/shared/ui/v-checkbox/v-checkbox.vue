<script setup lang="ts">
/**
 ** Компонент чекбокса
 *
 * @prop modelValue - значение чекбокса (v-model)
 * @prop label - текст метки
 */

const { modelValue = false, label = '' } = defineProps<{
  modelValue: boolean
  label?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggleCheckbox = () => {
  emit('update:modelValue', !modelValue)
}
</script>

<template>
  <div
    class="v-checkbox-container"
    @click="toggleCheckbox"
  >
    <div
      class="v-checkbox"
      :class="{ 'v-checkbox-checked': modelValue }"
    >
      <div
        class="v-checkbox-icon"
        v-if="modelValue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
    <label
      v-if="label"
      class="v-checkbox-label"
      >{{ label }}</label
    >
  </div>
</template>

<style scoped>
@reference "../../../app/styles/theme.css";

.v-checkbox-container {
  @apply flex items-start cursor-pointer;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.v-checkbox {
  @apply rounded border border-border flex items-center justify-center transition-all duration-200;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.v-checkbox-checked {
  @apply bg-primary border-primary;
}

.v-checkbox-icon {
  color: #ffffff;
}

.v-checkbox-label {
  @apply text-[hsl(var(--foreground))] leading-tight mt-1;
  font-size: 1.4rem;
}
</style>
