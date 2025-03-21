<script setup lang="ts">
/**
 ** Компонент текстового поля ввода
 *
 * @prop label - метка поля
 * @prop modelValue - значение поля (v-model)
 * @prop type - тип поля (text, email, tel, etc.)
 * @prop placeholder - подсказка в поле
 * @prop required - обязательное поле
 * @prop error - текст ошибки
 */

const {
  label = '',
  modelValue = '',
  type = 'text',
  placeholder = '',
  required = false,
  error = '',
} = defineProps<{
  label?: string
  modelValue: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="v-input-container">
    <label
      v-if="label"
      class="v-input-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="v-input-required"
        >*</span
      >
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      class="v-input-field"
      :class="{ 'v-input-error': error }"
      @input="updateValue"
    />
    <p
      v-if="error"
      class="v-input-error-text"
    >
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
@reference "../../../app/styles/theme.css";

.v-input-container {
  @apply w-full;
  margin-bottom: 1rem;
}

.v-input-label {
  @apply block text-[hsl(var(--foreground))] mb-1;
  font-size: 1.4rem;
  font-weight: 500;
}

.v-input-required {
  color: #ef4444;
}

.v-input-field {
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
  
  &:focus {
    outline: none;
    border-color: hsl(var(--primary));
    box-shadow: 0 0 0 2px hsla(var(--primary), 0.2);
  }
}

.v-input-field.v-input-error {
  @apply border-red-500;
  
  &:focus {
    border-color: rgb(239, 68, 68);
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
  }
}

.v-input-error-text {
  @apply text-sm mt-1;
  color: #ef4444;
}
</style>
