<script setup lang="ts">
/**
 ** 404 page
 *
 * TODO оптимизировать фоновую картинку
 */

const { t } = useI18n()

definePageMeta({
  layout: 'blank-layout',
})

useSeoMeta({
  title: t('pages.404.title'),
  ogTitle: t('pages.404.title'),
  description: t('pages.404.description'),
  ogDescription: t('pages.404.description'),
})
</script>

<template>
  <div class="page-container">
    <!-- Планшет с рамкой -->
    <div class="tablet-frame">
      <!-- Экран планшета с фоновым изображением -->
      <div class="tablet-screen">
        <div class="screen-content">
          <title-block is-background>
            <template #default>{{ t('pages.404.title') }}</template>
            <template #subtitle>{{ t('pages.404.description') }}</template>
          </title-block>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  @apply flex items-center justify-center min-h-screen p-4 bg-background;
}

/* Стилизация планшета */
.tablet-frame {
  position: relative;
  background-color: #333;
  width: 90%;
  max-width: 50rem;
  aspect-ratio: 4/3;
  padding: 1rem;
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.25);
  border: 0.125rem solid #000;
  border-radius: 2.5rem;
  transform-origin: center;
  transition: all 0.3s ease;
}

/* Экран планшета */
.tablet-screen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1.875rem;
  transition: all 0.3s ease;
}

.tablet-screen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/img/404.jpeg');
  background-size: cover;
  background-position: center;
  filter: blur(1px);
}

/* Контент на экране */
.screen-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Добавляем кнопку сбоку планшета с помощью псевдоэлемента */
.tablet-frame::before {
  content: '';
  position: absolute;
  width: 0.3125rem;
  height: 3.75rem;
  background-color: #666;
  right: -0.1875rem;
  top: 5rem;
  border-radius: 0.1875rem;
  transition: all 0.3s ease;
}

/* Добавляем еще одну кнопку */
.tablet-frame::after {
  content: '';
  position: absolute;
  width: 0.3125rem;
  height: 3.75rem;
  background-color: #666;
  right: -0.1875rem;
  top: 10rem;
  border-radius: 0.1875rem;
  transition: all 0.3s ease;
}

/* Адаптивность для планшетов */
@media (max-width: 768px) {
  .tablet-frame {
    aspect-ratio: 3/4; /* Вертикальная ориентация */
    max-width: 30rem;
  }

  /* Перемещаем кнопки в вертикальном режиме */
  .tablet-frame::before {
    width: 3.75rem;
    height: 0.3125rem;
    right: auto;
    top: -0.1875rem;
    left: 5rem;
  }

  .tablet-frame::after {
    width: 3.75rem;
    height: 0.3125rem;
    right: auto;
    top: -0.1875rem;
    left: 10rem;
  }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 480px) {
  .tablet-frame {
    border-radius: 1.5rem;
    padding: 0.75rem;
  }

  .tablet-screen {
    border-radius: 1.25rem;
  }
}
</style>
