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
      <img
        class="boat-image"
        :src="boatImage"
        :alt="t('pages.main.boatImageAlt')"
        loading="lazy"
        decoding="async"
      />
      <!-- Title and description -->
      <div class="title-container">
        <TitleWithSubtitle>
          <template #title>{{ t('pages.main.title') }}</template>
          <template #subtitle>{{
            t('pages.main.subtitle')
          }}</template>
        </TitleWithSubtitle>
      </div>
      <!-- buttons -->
      <div class="buttons-container">
        <VButton variant="primary">
          {{ t('pages.main.createNew') }}
        </VButton>
        <VButton variant="secondary">
          {{ t('pages.main.edit') }}
        </VButton>
      </div>

      <!-- Legal information link -->
      <div class="legal-info-container">
        <VLink
          to="/"
          variant="primary"
        >
          {{ t('pages.main.legalInfo') }}
        </VLink>
      </div>
    </main>

    <!-- Cookie notification -->
    <CookieNotificationFeature />
  </div>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.app-container {
  min-height: 100vh;
  min-width: 100%;
  color: hsl(var(--text-primary));
  background-color: hsl(var(--background));
  transition: all var(--transition-standard);
}

.app-header {
  width: 96%;
  padding: 1rem;
  background-color: transparent;
}

.header-content {
  @apply container mx-auto flex justify-end items-stretch;
}

.switchers-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;

  @media (min-width: var(--screen-sm)) {
    gap: 0.75rem;
  }
}

.switchers-container > :nth-child(1) {
  margin-right: 1rem;
}

.title-container {
  margin-bottom: var(--base-margin-bottom);
}

.main-content {
  @apply container mx-auto flex flex-col items-center;
  min-height: 100vh;
  padding: 1rem;
  color: hsl(var(--text-primary));
  position: relative;

  :root.dark & {
    color: hsl(var(--text-on-dark));
  }
}

.boat-image {
  width: 40rem;
  height: 40rem;
  object-fit: contain;
  margin-bottom: var(--base-margin-bottom);

  @media (max-width: 640px) {
    width: 70rem;
    height: 70rem;
  }
}

.legal-info-container {
  color: hsl(var(--link-color));
  font-size: var(--font-size-sm);
  position: absolute;
  bottom: 2rem;
  margin-top: auto;
}

.buttons-container {
  display: flex;
  gap: 2rem;
  margin-bottom: calc(
    var(--base-margin-bottom) + (var(--line-height-lg) * 1rem)
  );
}
</style>
