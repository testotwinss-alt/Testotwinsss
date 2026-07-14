<script setup>
// Features leicht editierbar als Daten-Array. `accent: true` = grün betonte Card.
const features = [
  { n: '01', title: 'Workout-Splits', text: 'Von Anfänger bis Fortgeschritten, 2–6× die Woche. Egal wie oft du kannst — es gibt einen Split, der zu deinem Leben passt.' },
  { n: '02', title: 'Ernährungsprotokolle', text: 'Aufbau, Diät & Recomp — Schritt für Schritt und budget-tauglich. Kein Steak-und-Lachs-jeden-Tag-Bullshit.' },
  { n: '03', title: 'Progressive-Overload-System', text: 'Der Motor hinter jedem Gain. Wir zeigen dir exakt, wie du Woche für Woche stärker wirst — messbar, nicht nach Gefühl.' },
  { n: '04', title: 'Mindset & Konstanz', text: '„Aura kommt vom Grind." Wie du am Ball bleibst, wenn die Motivation weg ist — der Teil, an dem die meisten scheitern.' },
  { n: '05', title: 'Cardio & Recomp', text: 'Fett verlieren, ohne Muskeln zu opfern. Wie viel Cardio wirklich nötig ist — und wie du es clever einsetzt.' },
  // TODO KUNDE: Zuordnung + Trainingsphilosophie mit den Twins abstimmen
  { n: '06', title: 'Twin-Vergleich: Luca vs. Finn', text: 'High-Volume (Luca) gegen High-Intensity (Finn) — zwei Wege, ein Ergebnis. Wähl den Typ, der zu dir passt.', accent: true }
]
</script>

<template>
  <section class="section features reveal" aria-labelledby="features-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Was drin ist</span>
        <h2 class="h1" id="features-title">Alles, was du brauchst — nichts, was du nicht brauchst.</h2>
      </div>
      <div class="features__grid">
        <article
          v-for="f in features"
          :key="f.n"
          class="card feature"
          :class="{ 'card--accent': f.accent }"
        >
          <span class="feature__chip">{{ f.n }}</span>
          <h3 class="feature__title">{{ f.title }}</h3>
          <p class="feature__text">{{ f.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
