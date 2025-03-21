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
      <div class="cookie-wrapper">
        <Cookie class="cookie-icon" />
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
        class="cookie-button"
        variant="primary"
        @click="acceptCookies"
      >
        {{ t('components.cookieNotification.accept') }}
      </VButton>
    </div>
  </Transition>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.cookie-notification {
  display: flex;
  align-items: center;
  background-color: hsl(var(--card));
  box-shadow: var(--shadow-lg);
  padding: 3rem;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-modal);
}

.cookie-wrapper {
  flex-shrink: 0;
  color: hsl(var(--card-text));
  margin-right: 1rem;
}

.cookie-icon {
  height: 4rem;
  width: 4rem;
}

.cookie-content {
  @apply text-[hsl(var(--foreground))];
  font-size: var(--font-size-xs);
  flex-grow: 1;
  margin-right: 1rem;
}

.cookie-link-wrapper {
  display: inline;
}

.cookie-link {
  @apply text-[hsl(var(--foreground))] underline decoration-1 underline-offset-2;
  &:hover {
    text-decoration-thickness: 2px;
  }
  font-size: inherit;
  font-weight: inherit;
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-all duration-300;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  @apply transform translate-y-full;
}

.cookie-button {
  font-size: var(--font-size-xs);
}
</style>
