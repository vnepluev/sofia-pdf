<script setup lang="ts">
/**
 * Компонент всплывающего уведомления о cookie
 */
import { ref, onMounted } from 'vue'
import { Cookie } from 'lucide-vue-next'
import { VButton } from '~/shared/ui/v-button'
import {
  LocalStorageKeys,
  getFromStorage,
  saveToStorage,
} from '~/shared/lib/local-storage-lib'

const { t } = useI18n()
const isVisible = ref(false)

// Функция для закрытия уведомления и сохранения настроек
const acceptCookies = () => {
  isVisible.value = false
  saveToStorage(LocalStorageKeys.COOKIE_ACCEPTED, 'true')
}

// Проверяем, было ли уже принято соглашение
onMounted(() => {
  const cookieAccepted = getFromStorage(
    LocalStorageKeys.COOKIE_ACCEPTED,
  )
  isVisible.value = cookieAccepted !== 'true'
})
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="isVisible"
      class="cookie-notification"
    >
      <div class="cookie-icon">
        <Cookie />
      </div>
      <div class="cookie-content">
        {{ t('components.cookieNotification.messageBefore') }}
        <span class="cookie-link-wrapper">
          <NuxtLink
            :to="t('components.cookieNotification.cookieUrl')"
            class="cookie-link"
          >
            {{ t('components.cookieNotification.cookieLink') }}
          </NuxtLink>
        </span>
        {{ t('components.cookieNotification.messageAfter') }}
      </div>
      <VButton
        variant="primary"
        @click="acceptCookies"
      >
        {{ t('components.cookieNotification.accept') }}
      </VButton>
    </div>
  </Transition>
</template>

<style scoped>
@reference "../../../app/styles/theme.css";

.cookie-notification {
  @apply fixed bottom-0 left-0 right-0 flex items-center z-50;
  background-color: hsl(var(--card));
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  gap: 1rem;
}

.cookie-icon {
  flex-shrink: 0;
  color: hsl(var(--primary));
}

.cookie-content {
  @apply text-[hsl(var(--foreground))];
  flex-grow: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  @apply transform translate-y-full;
}

.cookie-link-wrapper {
  @apply inline;
}

.cookie-link {
  @apply text-[hsl(var(--foreground))] underline decoration-1 underline-offset-2;
  &:hover {
    text-decoration-thickness: 2px;
  }
  font-size: inherit;
  font-weight: inherit;
}
</style>
