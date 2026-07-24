<script setup>
import BuyButton from './BuyButton.vue'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero__bg" src="/img/aestethics.jpg" alt="Einer der Testotwins im aktuellen, definierten Shape" width="900" height="1600" fetchpriority="high">
    <div class="hero__scrim" aria-hidden="true"></div>
    <div class="container hero__content">
      <span class="eyebrow">Das Natural-Programm der Testotwins</span>
      <h1 class="hero__title" id="hero-title"><span class="hl hl--solid">+6 KG</span> in einem Jahr &mdash; der Plan, mit dem wir es gebaut haben.</h1>
      <p class="hero__sub">Das komplette Training + Ernährung, mit dem wir als Twins in einem Jahr echten Progress aufgebaut haben &mdash; kein Bro-Science, kein Abo, ab 12&euro; und es gehört dir.</p>
      <div class="hero__cta-row">
        <BuyButton>Hol dir den Blueprint</BuyButton>
      </div>
      <p class="hero__trust">Sichere Zahlung &bull; Sofort-Zugang &bull; Einmalzahlung, kein Abo</p>
      <p class="hero__followers"><span class="star" aria-hidden="true">&starf;</span> 16.800+ folgen den Twins</p>
    </div>
  </section>
</template>
