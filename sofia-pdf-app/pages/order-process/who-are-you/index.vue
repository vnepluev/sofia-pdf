<script setup lang="ts">
/**
 ** Главная страница (Вход / Редактирование)
 */
import { CardBlock } from '~/shared/ui/card-block'
import { TitleWithSubtitle } from '~/shared/ui/title-with-subtitle'
import { OrderSlider } from '~/features/order-slider-feature'
import { VInput } from '~/shared/ui/v-input'
import { VTextarea } from '~/shared/ui/v-textarea'
import { VCheckbox } from '~/shared/ui/v-checkbox'
import { VButton } from '~/shared/ui/v-button'

definePageMeta({
  layout: 'new-order-layout',
})

const { t } = useI18n()

// Конфигурация слайдера
const totalSteps = 5 // Общее количество шагов
const activeStep = 1 // Текущий шаг (первый шаг - "Кто вы?")

// Данные формы
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  otherMethods: '',
  consent: false,
})

// Валидация формы
const errors = reactive({
  name: '',
  phone: '',
  email: '',
})

// Проверка на валидность email
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Проверка на валидность телефона
const validatePhone = (phone: string) => {
  const re = /^\+?[0-9\s\-\(\)]{10,20}$/
  return re.test(phone)
}

// Валидация формы перед отправкой
const validateForm = () => {
  let isValid = true

  // Сбрасываем ошибки
  errors.name = ''
  errors.phone = ''
  errors.email = ''

  // Проверяем имя
  if (!formData.name.trim()) {
    errors.name = t('pages.orderProcess.whoAreYou.form.required')
    isValid = false
  }

  // Проверяем телефон
  if (!formData.phone.trim()) {
    errors.phone = t('pages.orderProcess.whoAreYou.form.required')
    isValid = false
  } else if (!validatePhone(formData.phone)) {
    errors.phone = t('pages.orderProcess.whoAreYou.form.invalidPhone')
    isValid = false
  }

  // Проверяем email
  if (!formData.email.trim()) {
    errors.email = t('pages.orderProcess.whoAreYou.form.required')
    isValid = false
  } else if (!validateEmail(formData.email)) {
    errors.email = t('pages.orderProcess.whoAreYou.form.invalidEmail')
    isValid = false
  }

  // Проверяем согласие
  if (!formData.consent) {
    isValid = false
  }

  return isValid
}

// Обработчик отправки формы
const handleSubmit = () => {
  if (validateForm()) {
    // Переход на следующий шаг
    console.log('Form submitted:', formData)
    // TODO: Добавить переход на следующий шаг
  }
}

// Обработчик кнопки "Назад"
const handleBack = () => {
  // Возврат на предыдущую страницу
  navigateTo('/')
}
</script>

<template>
  <div class="who-are-you-page">
    <!-- Компонент слайдера в верхней части страницы -->
    <div class="slider-container">
      <OrderSlider
        :total-steps="totalSteps"
        :active-step="activeStep"
      />
    </div>

    <div class="content-container">
      <!-- Заголовок страницы -->
      <CardBlock>
        <TitleWithSubtitle class="page-title">
          <template #title>{{
            t('pages.orderProcess.whoAreYou.title')
          }}</template>
          <template #subtitle>{{
            t('pages.orderProcess.whoAreYou.subtitle')
          }}</template>
        </TitleWithSubtitle>
      </CardBlock>

      <!-- Форма контактов -->
      <form
        @submit.prevent="handleSubmit"
        class="contact-form"
      >
        <VInput
          v-model="formData.name"
          :label="t('pages.orderProcess.whoAreYou.form.name')"
          :error="errors.name"
          required
        />

        <VInput
          v-model="formData.phone"
          :label="t('pages.orderProcess.whoAreYou.form.phone')"
          type="tel"
          :error="errors.phone"
          required
        />

        <VInput
          v-model="formData.email"
          :label="t('pages.orderProcess.whoAreYou.form.email')"
          type="email"
          :error="errors.email"
          required
        />

        <VTextarea
          v-model="formData.otherMethods"
          :label="t('pages.orderProcess.whoAreYou.form.otherMethods')"
        />

        <VCheckbox
          v-model="formData.consent"
          :label="t('pages.orderProcess.whoAreYou.form.consent')"
        />

        <div class="form-buttons">
          <VButton
            variant="secondary"
            @click="handleBack"
          >
            {{ t('pages.orderProcess.whoAreYou.form.back') }}
          </VButton>

          <VButton
            variant="primary"
            type="submit"
            :disabled="!formData.consent"
          >
            {{ t('pages.orderProcess.whoAreYou.form.nextStep') }}
          </VButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.who-are-you-page {
  @apply flex flex-col items-center w-full;
}

.slider-container {
  @apply w-full;
  margin-bottom: 4rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.page-title {
  margin-bottom: 4rem;
}

.content-container {
  width: 100%;
  margin-inline: auto;
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.contact-form {
  @apply w-full mx-auto rounded-lg;
  background-color: hsl(var(--bg-light));
  max-width: 28rem;
  padding: 1.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.form-buttons {
  @apply flex justify-between mt-8;
}
</style>
