<script setup>
// Origin-Timeline: der Weg VOR dem heutigen Shape (amsee.jpg = "heute"-Anker).
const journey = [
  { src: '/img/duenn2021.jpg', year: '2021', label: 'dünn', pos: 'center 42%', w: 1200, h: 900, alt: 'Luca und Finn 2021, dünn' },
  { src: '/img/duenn2022.jpg', year: '2022', label: 'schmal, kein Plan', pos: 'center 30%', w: 1200, h: 900, alt: 'Luca und Finn 2022, schmal und ohne Trainingsplan' },
  { src: '/img/skinnyfat2022.jpg', year: '2022', label: 'viel gegessen, kein Kraftsport', pos: 'center 40%', w: 678, h: 1200, alt: 'Luca und Finn 2022, mehr Masse ohne Kraftsport' }
]
</script>

<template>
  <section class="section story reveal" aria-labelledby="story-title">
    <div class="container container--wide story__grid">
      <div class="story__media">
        <div class="ratio ratio--3-4">
          <img src="/img/amsee.jpg" alt="Luca und Finn am See, aktueller Shape" loading="lazy" width="900" height="1600" style="object-position: center 35%;">
        </div>
        <img class="story__avatar" src="/img/profile.jpg" alt="Profilbild der Testotwins" loading="lazy" width="72" height="72">
      </div>
      <div class="story__text">
        <span class="eyebrow">Wer wir sind</span>
        <h2 class="h2" id="story-title">Zwei Brüder, gleiche Gene, ein Ziel.</h2>
        <p class="body">Wir sind Luca &amp; Finn. Früher waren wir <strong>dünn</strong>. Dann haben wir angefangen, viel zu essen &mdash; aber ohne Kraftsport. Das Ergebnis: wir wurden <strong>fett statt muskulös</strong>. Erst als wir mit Kraftsport angefangen haben, hat sich alles verändert. Über die letzten 3 Jahre haben wir extrem viel gelernt und richtig gute Muskeln aufgebaut &mdash; <strong>100% natural</strong>.</p>
        <p class="body">Das Beste am Zwilling-Sein: Wir pushen uns jeden Tag gegenseitig. Gleiche Gene, gleicher Start &mdash; was bei uns beiden funktioniert, ist kein Genetik-Glück, sondern ein <strong>System</strong>. Genau dieses System bekommst du.</p>
      </div>
    </div>

    <div class="container container--wide">
      <ul class="journey" aria-label="Unser Weg von 2021 bis heute" tabindex="0">
        <li v-for="(step, i) in journey" :key="i" class="journey__cell">
          <div class="ratio ratio--3-4">
            <img :src="step.src" :alt="step.alt" loading="lazy" :width="step.w" :height="step.h" :style="{ objectPosition: step.pos }">
            <div class="journey__scrim" aria-hidden="true"></div>
          </div>
          <span class="badge badge--neutral journey__chip">{{ step.year }} &middot; {{ step.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
