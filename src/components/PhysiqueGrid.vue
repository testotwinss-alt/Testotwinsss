<script setup>
const shots = [
  { src: '/img/see-backpose.jpg', alt: 'Rückenpose eines der Testotwins am See', w: 970, h: 1094, pos: 'center' },
  { src: '/img/gym-selfie.jpg', alt: 'Gym-Selfie eines der Twins nach dem Training', w: 1088, h: 1068, pos: 'center 20%' },
  { src: '/img/backday.jpg', alt: 'Ausgebauter Rücken eines der Testotwins am Back-Day', w: 900, h: 1200, pos: 'center' }
]
</script>

<template>
  <section class="section physique reveal" aria-labelledby="physique-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Das Ergebnis</span>
        <h2 class="h1" id="physique-title">Gebaut mit dem, was wir dir geben.</h2>
      </div>
      <div class="physique__grid physique__grid--trio">
        <div v-for="s in shots" :key="s.src" class="physique__cell">
          <img :src="s.src" :alt="s.alt" loading="lazy" :width="s.w" :height="s.h" :style="{ objectPosition: s.pos }">
        </div>
      </div>
    </div>
  </section>
</template>
