<script setup lang="ts">
/**
 ** Cookie policy page
 */
import { TitleWithSubtitle } from '~/shared/ui/title-with-subtitle'
import { ThemeSwitcherFeature } from '~/features/theme-switcher'
import { LangSwitcherFeature } from '~/features/language-switcher'
import { VLink } from '~/shared/ui/v-link'

const { t } = useI18n()
const config = useRuntimeConfig()

definePageMeta({
  layout: 'blank-layout',
})

useSeoMeta({
  title: t('pages.cookie-policy.seoTitle'),
  description: t('pages.cookie-policy.seoDescription'),
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
      <div class="title-container">
        <TitleWithSubtitle>
          <template #title>{{
            t('pages.cookie-policy.title')
          }}</template>
          <template #subtitle>
            {{ t('pages.cookie-policy.subtitle') }}
            <span class="owner">{{
              t('pages.cookie-policy.owner')
            }}</span>
          </template>
        </TitleWithSubtitle>
      </div>

      <div class="policy-content">
        <p class="intro">{{ t('pages.cookie-policy.intro') }}</p>

        <!-- Section 1 -->
        <div class="policy-section">
          <h3 class="section-title">
            {{ t('pages.cookie-policy.section1.title') }}
          </h3>
          <p>{{ t('pages.cookie-policy.section1.content') }}</p>
        </div>

        <!-- Section 2 -->
        <div class="policy-section">
          <h3 class="section-title">
            {{ t('pages.cookie-policy.section2.title') }}
          </h3>
          <p>{{ t('pages.cookie-policy.section2.content') }}</p>
          <ul class="policy-list">
            <li>
              {{ t('pages.cookie-policy.section2.list.0') }}
            </li>
            <li>
              {{ t('pages.cookie-policy.section2.list.1') }}
            </li>
            <li>
              {{ t('pages.cookie-policy.section2.list.2') }}
            </li>
          </ul>
        </div>

        <!-- Section 3 -->
        <div class="policy-section">
          <h3 class="section-title">
            {{ t('pages.cookie-policy.section3.title') }}
          </h3>
          <p>{{ t('pages.cookie-policy.section3.content') }}</p>
          <ul class="policy-list">
            <li>
              {{ t('pages.cookie-policy.section3.list.0') }}
            </li>
            <li>
              {{ t('pages.cookie-policy.section3.list.1') }}
            </li>
          </ul>
          <p>{{ t('pages.cookie-policy.section3.additional') }}</p>
        </div>

        <!-- Section 4 -->
        <div class="policy-section">
          <h3 class="section-title">
            {{ t('pages.cookie-policy.section4.title') }}
          </h3>
          <p>{{ t('pages.cookie-policy.section4.content') }}</p>
          <ul class="policy-list">
            <li>{{ t('pages.cookie-policy.section4.list.0') }}</li>
            <li>{{ t('pages.cookie-policy.section4.list.1') }}</li>
            <li>{{ t('pages.cookie-policy.section4.list.2') }}</li>
          </ul>
          <p>{{ t('pages.cookie-policy.section4.additional') }}</p>
        </div>

        <!-- Section 5 -->
        <div class="policy-section">
          <h3 class="section-title">
            {{ t('pages.cookie-policy.section5.title') }}
          </h3>
          <p>{{ t('pages.cookie-policy.section5.content') }}</p>
          <p>{{ t('pages.cookie-policy.section5.owner') }}</p>
          <p>
            {{
              t('pages.cookie-policy.section5.email') +
              ' ' +
              config.public.ownerEmail
            }}
          </p>
          <p>
            {{
              t('pages.cookie-policy.section5.phone') +
              ' ' +
              config.public.ownerPhone
            }}
          </p>
        </div>

        <!-- Section 6 -->
        <div class="policy-section">
          <h3 class="section-title">
            {{ t('pages.cookie-policy.section6.title') }}
          </h3>
          <p>{{ t('pages.cookie-policy.section6.content') }}</p>
          <p class="last-update">
            {{ t('pages.cookie-policy.section6.lastUpdate') }}
          </p>
          <p class="agreement">
            {{ t('pages.cookie-policy.section6.agreement') }}
          </p>
        </div>
      </div>

      <!-- Back to main page link -->
      <div class="back-link-container">
        <VLink
          to="/"
          variant="primary"
          class="back-link"
        >
          ← {{ t('common.backToMain') }}
        </VLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
@reference "@/app/styles/theme.css";

.app-container {
  min-height: 100vh;
  width: 100%;
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

.main-content {
  @apply container mx-auto flex flex-col items-center;
  padding: 2rem 1rem;
  color: hsl(var(--text-primary));
  max-width: 80rem;

  :root.dark & {
    color: hsl(var(--text-on-dark));
  }
}

.title-container {
  margin-bottom: 3rem;
  text-align: center;
  width: 100%;
}

.owner {
  display: block;
  margin-top: 0.5rem;
  font-size: var(--font-size-xs);
  opacity: 0.8;
}

.policy-content {
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
}

.intro {
  margin-bottom: 2rem;
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.policy-section {
  margin-bottom: 3rem;
}

.policy-section p {
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: hsl(var(--text-primary));

  :root.dark & {
    color: hsl(var(--text-on-dark));
  }
}

.policy-list {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.policy-list li {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: var(--font-size-sm);
}

.last-update {
  margin-top: 2rem;
  font-style: italic;
}

.agreement {
  margin-top: 1rem;
  font-weight: 600;
}

.back-link-container {
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.back-link {
  font-size: var(--font-size-sm);
}
</style>
