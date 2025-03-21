<script setup lang="ts">
/**
 ** Компонент многострочного текстового поля
 *
 * @prop label - метка поля
 * @prop modelValue - значение поля (v-model)
 * @prop placeholder - подсказка в поле
 * @prop required - обязательное поле
 * @prop error - текст ошибки
 * @prop rows - количество строк
 */

const {
  label = '',
  modelValue = '',
  placeholder = '',
  required = false,
  error = '',
  rows = 4,
} = defineProps<{
  label?: string
  modelValue: string
  placeholder?: string
  required?: boolean
  error?: string
  rows?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="v-textarea-container">
    <label
      v-if="label"
      class="v-textarea-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="v-textarea-required"
        >*</span
      >
    </label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      class="v-textarea-field"
      :class="{ 'v-textarea-error': error }"
      @input="updateValue"
    ></textarea>
    <p
      v-if="error"
      class="v-textarea-error-text"
    >
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
@reference "../../../app/styles/theme.css";

.v-textarea-container {
  @apply w-full;
  margin-bottom: 1rem;
}

.v-textarea-label {
  @apply block text-[hsl(var(--foreground))] mb-1;
  font-size: 1.4rem;
  font-weight: 500;
}

.v-textarea-required {
  color: #ef4444;
}

.v-textarea-field {
  @apply w-full border border-border text-[hsl(var(--foreground))];
  background-color: hsl(var(--bg-light));
  
  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
  border-radius: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  @apply transition duration-200;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: hsl(var(--primary));
    box-shadow: 0 0 0 2px hsla(var(--primary), 0.2);
  }
}

.v-textarea-field.v-textarea-error {
  @apply border-red-500;
  
  &:focus {
    border-color: rgb(239, 68, 68);
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
  }
}

.v-textarea-error-text {
  @apply text-sm mt-1;
  color: #ef4444;
}
</style>
