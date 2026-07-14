<script setup>
import BuyButton from './BuyButton.vue'
</script>

<template>
  <section class="finale" aria-labelledby="finale-title">
    <img class="finale__bg" src="/img/shredded.jpg" alt="Einer der Testotwins im definierten Shape" loading="lazy" width="986" height="984" style="object-position: center 45%;">
    <div class="finale__scrim" aria-hidden="true"></div>
    <div class="container">
      <h2 class="finale__title" id="finale-title">Dein Move, <span class="hl hl--solid">Broski</span>.</h2>
      <BuyButton>Jetzt den Blueprint sichern</BuyButton>
      <!-- TODO KUNDE: Garantie bestätigen oder entfernen (dann auch WiderrufPage anpassen) -->
      <p class="finale__trust">Einmal 29&euro; &bull; kein Abo &bull; 30 Tage Geld-zurück-Garantie</p>
    </div>
  </section>
</template>
