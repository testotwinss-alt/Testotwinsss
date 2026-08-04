<script setup>
// Features leicht editierbar als Daten-Array.
const features = [
  { n: '01', title: 'Trainingsplan', text: 'Klar strukturiert, mit dem wir selbst trainieren. Kein Rätselraten, welche Übungen wann dran sind.' },
  { n: '02', title: 'Ernährungsprotokolle', text: 'Aufbau, Diät & Recomp — Schritt für Schritt und budget-tauglich. Kein Steak-und-Lachs-jeden-Tag-Bullshit.' },
  { n: '03', title: 'Progressive-Overload-System', text: 'Der Motor hinter jedem Gain. Wir zeigen dir exakt, wie du Woche für Woche stärker wirst — messbar, nicht nach Gefühl.' }
]
</script>

<template>
  <section class="section features reveal" aria-labelledby="features-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Was drin ist</span>
        <h2 class="h1" id="features-title">Alles, was du brauchst — nichts, was du nicht brauchst.</h2>
      </div>
      <div class="features__grid features__grid--trio">
        <article
          v-for="f in features"
          :key="f.n"
          class="card feature"
        >
          <span class="feature__chip">{{ f.n }}</span>
          <h3 class="feature__title">{{ f.title }}</h3>
          <p class="feature__text">{{ f.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
