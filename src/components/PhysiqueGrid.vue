<script setup>
const shots = [
  { src: '/img/shredz.jpg', alt: 'Definierter Shape eines der Testotwins', w: 1012, h: 1800, pos: 'center 30%' },
  { src: '/img/sidechest2.jpg', alt: 'Side-Chest-Pose eines der Testotwins', w: 1012, h: 1800, pos: 'center 35%' },
  { src: '/img/sidechest.jpg', alt: 'Side-Chest-Pose eines der Testotwins', w: 1012, h: 1800, pos: 'center 32%' }
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
