<script setup>
const shots = [
  { src: '/img/rage.jpg', alt: 'Finn in aggressiver Pose nach dem Training', w: 640, h: 1138 },
  { src: '/img/summer.jpg', alt: 'Luca im Sommer-Shape, definiert', w: 640, h: 1138 },
  { src: '/img/jacked.jpg', alt: 'Muskulöser Oberkörper eines der Twins', w: 640, h: 1138 },
  { src: '/img/kapitel.jpg', alt: 'Ganzkörper-Physique eines der Testotwins', w: 900, h: 1200 }
]
</script>

<template>
  <section class="section physique reveal" aria-labelledby="physique-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Das Ergebnis</span>
        <h2 class="h1" id="physique-title">Gebaut mit dem, was wir dir geben.</h2>
      </div>
      <div class="physique__grid">
        <div v-for="s in shots" :key="s.src" class="physique__cell">
          <img :src="s.src" :alt="s.alt" loading="lazy" :width="s.w" :height="s.h">
        </div>
      </div>
    </div>
  </section>
</template>
