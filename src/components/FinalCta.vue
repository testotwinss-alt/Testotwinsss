<script setup>
import BuyButton from './BuyButton.vue'
</script>

<template>
  <section class="finale" aria-labelledby="finale-title">
    <img class="finale__bg" src="/img/chad-finale.jpg" alt="Luca und Finn im definierten Shape im Gym" loading="lazy" width="933" height="1400" style="object-position: center 28%;">
    <div class="finale__scrim" aria-hidden="true"></div>
    <div class="container">
      <h2 class="finale__title" id="finale-title">Dein Move, <span class="hl hl--solid">Broski</span>.</h2>
      <BuyButton>Jetzt den Blueprint sichern</BuyButton>
      <p class="finale__trust">Ab 12&euro; &bull; kein Abo</p>
    </div>
  </section>
</template>
