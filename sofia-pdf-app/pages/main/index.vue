<script setup lang="ts">
/**
 ** Main page (create or edit certificate)
 */
import { TitleWithSubtitle } from '~/shared/ui/title-with-subtitle'
import { ThemeSwitcherFeature } from '~/features/theme-switcher'
import { LangSwitcherFeature } from '~/features/language-switcher'
import { CookieNotificationFeature } from '~/features/cookie-notification'
import { VButton } from '~/shared/ui/v-button'
import { VLink } from '~/shared/ui/v-link'
import boatImage from './ui/boat-image.png'

const { t } = useI18n()

definePageMeta({
  layout: 'blank-layout',
})

useSeoMeta({
  title: t('pages.main.seoTitle'),
  description: t('pages.main.seoDescription'),
})
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <div class="switchers-container">
          <LangSwitcherFeature />
          <ThemeSwitcherFeature />
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="mb-16">
        <img
          :src="boatImage"
          :alt="t('pages.main.boatImageAlt')"
          loading="lazy"
          decoding="async"
          class="boat-image"
        />
      </div>
      <!-- Title and description -->
      <div class="text-center mb-16">
        <TitleWithSubtitle
          :title="t('pages.main.title')"
          :subtitle="t('pages.main.subtitle')"
        />
      </div>
      <!-- buttons -->
      <div class="mb-16">
        <div class="flex gap-4">
          <VButton variant="primary">
            {{ t('pages.main.createNew') }}
          </VButton>
          <VButton variant="secondary">
            {{ t('pages.main.edit') }}
          </VButton>
        </div>
      </div>
      
      <!-- Legal information link -->
      <div class="mt-16 text-center">
        <VLink to="/legal" variant="primary" class="legal-link text-sm">
          {{ t('pages.main.legalInfo') }}
        </VLink>
      </div>
    </main>
    
    <!-- Cookie notification -->
    <CookieNotificationFeature />
  </div>
</template>

<style scoped>
.app-container {
  @apply min-h-screen bg-background-light text-foreground transition-colors duration-300;
}

.app-header {
  @apply bg-card p-4 shadow-sm;
}

.header-content {
  @apply container mx-auto flex justify-end items-stretch h-12;
}

.switchers-container {
  @apply flex items-center gap-1 sm:gap-2;
}

.main-content {
  @apply container mx-auto p-4 flex flex-col items-center justify-center text-on-light;
}

.boat-image {
  @apply w-[400px] h-[400px] object-contain;
}

.legal-link {
  @apply text-lg;
}
</style>
