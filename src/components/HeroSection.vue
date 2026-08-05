<script setup>
import BuyButton from './BuyButton.vue'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero__bg" src="/img/chad-hero.jpg" alt="Luca und Finn im aktuellen, definierten Shape beim Posing" width="933" height="1400" fetchpriority="high" style="object-position: center 32%;">
    <div class="hero__scrim" aria-hidden="true"></div>
    <div class="container hero__content">
      <span class="eyebrow">Das Natural-Programm der Testotwins</span>
      <h1 class="hero__title" id="hero-title"><span class="hl hl--solid">+20 kg</span> Muskeln, deutlich weniger Fett &mdash; in 3 Jahren 100% natural.</h1>
      <p class="hero__sub">Das komplette Training + Ernährung, mit dem wir als Twins über 3 Jahre echten Progress aufgebaut haben &mdash; kein Bro-Science, kein Abo, einmal zahlen und es gehört dir.</p>
      <div class="hero__cta-row">
        <BuyButton>Hol dir den Blueprint</BuyButton>
      </div>
      <p class="hero__trust">Sichere Zahlung &bull; Sofort-Zugang &bull; Einmalzahlung, kein Abo</p>
      <p class="hero__followers"><span class="star" aria-hidden="true">&starf;</span> 70.000+ folgen den Twins</p>
    </div>
  </section>
</template>
