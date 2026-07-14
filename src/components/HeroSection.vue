<script setup>
import BuyButton from './BuyButton.vue'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero__bg" src="/img/pump.jpg" alt="Luca und Finn beim Pump-Training im Gym" width="1080" height="1920" fetchpriority="high">
    <div class="hero__scrim" aria-hidden="true"></div>
    <div class="container hero__content">
      <span class="eyebrow">Das Natural-Programm der Testotwins</span>
      <h1 class="hero__title" id="hero-title">Von skinny zu <span class="hl hl--solid">mogged</span> &mdash; der Plan, mit dem wir es gebaut haben.</h1>
      <p class="hero__sub">Das komplette Training + Ernährung, mit dem wir als Twins von 0 auf crazy Progress gekommen sind &mdash; kein Bro-Science, kein Abo, einmal 29&euro; und es gehört dir.</p>
      <div class="hero__cta-row">
        <BuyButton>Hol dir den Blueprint</BuyButton>
      </div>
      <p class="hero__trust">Sichere Zahlung &bull; Sofort-Zugang &bull; Einmalzahlung, kein Abo</p>
      <p class="hero__followers"><span class="star" aria-hidden="true">&starf;</span> 16.800+ folgen den Twins</p>
    </div>
  </section>
</template>
