<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProofBar from './components/ProofBar.vue'
import StorySection from './components/StorySection.vue'
import ProblemSection from './components/ProblemSection.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import ProductPeek from './components/ProductPeek.vue'
import PhysiqueGrid from './components/PhysiqueGrid.vue'
import TwinUsp from './components/TwinUsp.vue'
// TODO: erst mit ECHTEN Kundenstimmen wieder aktivieren — erfundene Bewertungen sind wettbewerbswidrig
// import Testimonials from './components/Testimonials.vue'
import PricingBox from './components/PricingBox.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCta from './components/FinalCta.vue'
import SiteFooter from './components/SiteFooter.vue'
import StickyCtaBar from './components/StickyCtaBar.vue'
import ImpressumPage from './components/ImpressumPage.vue'
import DatenschutzPage from './components/DatenschutzPage.vue'
import WiderrufPage from './components/WiderrufPage.vue'
import { useReveal } from './composables/useReveal.js'
import { currentPage, initHashRoute } from './composables/useHashRoute.js'

const legalPages = {
  impressum: ImpressumPage,
  datenschutz: DatenschutzPage,
  widerruf: WiderrufPage
}

initHashRoute()
useReveal()
</script>

<template>
  <!-- Rechtsseiten: schlichtes Layout, kein Verkaufsdruck, keine Sticky-Bar -->
  <template v-if="legalPages[currentPage]">
    <SiteHeader :show-buy="false" home-href="#/" />
    <main>
      <component :is="legalPages[currentPage]" />
    </main>
    <SiteFooter />
  </template>

  <!-- Landing (Default) -->
  <template v-else>
    <SiteHeader />
    <span id="top"></span>
    <main>
      <HeroSection />
      <ProofBar />
      <StorySection />
      <ProblemSection />
      <FeatureGrid />
      <ProductPeek />
      <PhysiqueGrid />
      <TwinUsp />
      <!-- TODO: erst mit ECHTEN Kundenstimmen wieder aktivieren — erfundene Bewertungen sind wettbewerbswidrig -->
      <!-- <Testimonials /> -->
      <PricingBox />
      <FaqSection />
      <FinalCta />
    </main>
    <SiteFooter />
    <StickyCtaBar />
  </template>
</template>
