<script setup lang="ts">
/**
 ** Компонент слайдера для отображения прогресса в процессе заказа
 */
import { computed } from 'vue'

const { t } = useI18n()

// Пример импорта изображения:
// import sliderImage from './slider-image.png'

interface OrderSliderProps {
  totalSteps?: number
  activeStep?: number
  imageUrl?: string
}

const {
  totalSteps = 1,
  activeStep = 1,
  imageUrl,
} = defineProps<OrderSliderProps>()

/**
 * Массив шагов для отображения в слайдере
 */
const steps = computed(() => {
  return Array.from({ length: totalSteps }, (_, index) => ({
    id: index + 1,
    isActive: index + 1 <= activeStep,
  }))
})
</script>

<template>
  <div class="order-slider">
    <!-- Контейнер для изображения (всегда отображается) -->
    <div class="slider-image-container">
      <div class="slider-image-placeholder">
        <!-- Изображение слайдера (если предоставлено) -->
        <img
          v-if="imageUrl"
          :src="imageUrl"
          :alt="t('pages.orderProcess.sliderImageAlt')"
          loading="lazy"
          decoding="async"
          class="slider-image"
        />
      </div>
    </div>

    <!-- Индикаторы шагов -->
    <div class="slider-steps">
      <div
        v-for="step in steps"
        :key="step.id"
        :class="[
          'slider-step',
          { 'slider-step-active': step.isActive || step.id === 1 },
        ]"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@reference "../../../app/styles/theme.css";

.order-slider {
  @apply w-full flex flex-col items-center;
  gap: 1rem;
}

.slider-image-container {
  @apply w-full flex justify-center;
  margin-bottom: 0.5rem;
}

.slider-image-placeholder {
  @apply w-[650px] h-[308px] rounded-lg overflow-hidden border border-border flex items-center justify-center;
  background-color: var(--slider-inactive-bullet);
  box-shadow: -2px 2px 0 rgba(0, 0, 0, 0.2);
}

.slider-image {
  @apply w-full h-full object-cover;
}

.slider-steps {
  @apply flex items-center justify-center w-full;
  gap: 0.5rem;
  max-width: 28rem;
}

.slider-step {
  @apply h-2 rounded-full transition-colors;
  flex: 1 1 0%;
  background-color: var(--slider-inactive-bullet);
}

.slider-step-active {
  background-color: var(--button-primary-bg);
}
</style>
