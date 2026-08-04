<script setup>
// Erklärsektion: die 3 Pakete als aufeinander aufbauende Ladder (bewusst KEIN
// Card-Grid — das übernimmt die Preis-Sektion weiter unten).
const steps = [
  {
    n: '01',
    name: 'Essentials',
    desc: 'Die 3 wichtigsten Grundlagen zu Training und Ernährung. Der Kern von allem, was wirklich zählt.',
    inc: null
  },
  {
    n: '02',
    name: 'Advanced',
    desc: 'Ausführliche Ernährungsprotokolle und Beispiel-Ernährungspläne mit konkreten Lebensmitteln.',
    inc: 'Enthält Essentials'
  },
  {
    n: '03',
    name: 'Premium',
    desc: 'Unser eigener Trainingsplan, den wir selbst nutzen, inklusive Tipps & Tricks aus 3 Jahren Erfahrung.',
    inc: 'Enthält Advanced',
    premium: true
  }
]
</script>

<template>
  <section class="section pakete reveal" aria-labelledby="pakete-title">
    <div class="container">
      <div class="section-head section-head--center">
        <h2 class="h1" id="pakete-title">3 Pakete, die aufeinander aufbauen</h2>
        <p class="lead">Derselbe Blueprint &mdash; in der Tiefe, die du brauchst.</p>
      </div>

      <ol class="pakete__steps">
        <li
          v-for="step in steps"
          :key="step.n"
          class="pakete__step"
          :class="{ 'pakete__step--premium': step.premium }"
        >
          <span class="pakete__num" aria-hidden="true">{{ step.n }}</span>
          <div class="pakete__body">
            <h3 class="pakete__name">{{ step.name }}</h3>
            <p class="pakete__desc">{{ step.desc }}</p>
            <span v-if="step.inc" class="pakete__inc">+ {{ step.inc }}</span>
          </div>
        </li>
      </ol>

      <p class="pakete__outro">Fragen zwischendurch? Schreib uns einfach auf <a href="https://www.instagram.com/testotwins08/" target="_blank" rel="noopener noreferrer">Instagram</a> &mdash; wir antworten.</p>
    </div>
  </section>
</template>
