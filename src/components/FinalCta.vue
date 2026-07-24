<script setup>
import BuyButton from './BuyButton.vue'
</script>

<template>
  <section class="finale" aria-labelledby="finale-title">
    <img class="finale__bg" src="/img/sidechest.jpg" alt="Einer der Testotwins im definierten Shape" loading="lazy" width="1012" height="1800">
    <div class="finale__scrim" aria-hidden="true"></div>
    <div class="container">
      <h2 class="finale__title" id="finale-title">Dein Move, <span class="hl hl--solid">Broski</span>.</h2>
      <BuyButton>Jetzt den Blueprint sichern</BuyButton>
      <p class="finale__trust">Ab 12&euro; &bull; kein Abo &bull; Sofort-Zugang per Mail</p>
    </div>
  </section>
</template>
