<script setup lang="ts">
/**
 * Компонент всплывающего уведомления о cookie
 */
import { ref, onMounted } from 'vue'
import { Cookie } from 'lucide-vue-next'
import { VButton } from '~/shared/ui/v-button'
import { LocalStorageKeys, getFromStorage, saveToStorage } from '~/shared/lib/local-storage'

const { t } = useI18n()
const isVisible = ref(false)

// Функция для закрытия уведомления и сохранения настроек
const acceptCookies = () => {
  isVisible.value = false
  saveToStorage(LocalStorageKeys.COOKIE_ACCEPTED, 'true')
}

// Проверяем, было ли уже принято соглашение
onMounted(() => {
  const cookieAccepted = getFromStorage(LocalStorageKeys.COOKIE_ACCEPTED)
  isVisible.value = cookieAccepted !== 'true'
})
</script>

<template>
  <Transition name="slide-up">
    <div v-if="isVisible" class="cookie-notification">
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
.cookie-notification {
  @apply fixed bottom-0 left-0 right-0 flex items-center gap-4 p-4 bg-card shadow-lg z-50;
}

.cookie-icon {
  @apply text-primary flex-shrink-0;
}

.cookie-content {
  @apply flex-grow text-foreground;
}

.cookie-link-wrapper {
  @apply inline;
}

.cookie-link {
  @apply text-foreground underline decoration-1 underline-offset-2 hover:decoration-2;
  font-size: inherit;
  font-weight: inherit;
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  @apply transform translate-y-full;
}
</style>
