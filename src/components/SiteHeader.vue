<script setup>
import BuyButton from './BuyButton.vue'

/**
 * showBuy: Kauf-Mini-CTA anzeigen (Landing). Auf Rechtsseiten false ->
 * schlichter Header ohne Verkaufsdruck ("ohne Sticky-CTA-Zwang").
 * homeHref: Ziel der Wortmarke — auf der Landing der Top-Anker, auf
 * Rechtsseiten zurück zur Startseite (#/).
 */
defineProps({
  showBuy: { type: Boolean, default: true },
  homeHref: { type: String, default: '#top' }
})
</script>

<template>
  <header class="header">
    <div class="container container--wide header__inner">
      <a class="brand" :href="homeHref" aria-label="Testotwins Startseite">
        <img class="brand__avatar" src="/img/profile.jpg" alt="Profilbild der Testotwins Luca und Finn" width="32" height="32">
        <span class="brand__name">Testotwins</span>
      </a>
      <BuyButton v-if="showBuy" btn-class="btn--sm" aria-label="Paket auswählen, ab 12 Euro">Ab 12&euro; sichern</BuyButton>
    </div>
  </header>
</template>
