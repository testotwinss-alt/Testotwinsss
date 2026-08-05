<script setup>
const shots = [
  { src: '/img/chad-front.jpg', alt: 'Luca und Finn im definierten Shape, Frontpose', w: 933, h: 1400, pos: 'center 38%' },
  { src: '/img/chad-biceps.jpg', alt: 'Luca und Finn beim Bizeps-Posing gegenüber', w: 933, h: 1400, pos: 'center 40%' },
  { src: '/img/chad-back.jpg', alt: 'Ausgebauter Rücken von Luca und Finn, Back-Double-Biceps', w: 933, h: 1400, pos: 'center 42%' }
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
