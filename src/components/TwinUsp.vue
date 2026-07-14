<script setup>
// TODO KUNDE: Zuordnung + Trainingsphilosophie mit den Twins abstimmen
const teams = [
  {
    name: 'Team Luca',
    tag: 'High Volume',
    avatar: '/img/profile.jpg',
    accent: true,
    bullets: [
      'Mehr Sätze, mehr Pump, mehr Volumen pro Muskel',
      'Ideal, wenn du gern lange & oft trainierst',
      'Fokus auf Mind-Muscle-Connection'
    ]
  },
  {
    name: 'Team Finn',
    tag: 'High Intensity',
    avatar: '/img/profile.jpg',
    accent: false,
    bullets: [
      'Weniger Sätze, brutal harte Ausführung',
      'Ideal, wenn du wenig Zeit hast',
      'Fokus auf Progressive Overload bis zum Versagen'
    ]
  }
]
</script>

<template>
  <section class="section usp reveal" aria-labelledby="usp-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Der Twin-Vorteil</span>
        <h2 class="h1" id="usp-title">2 Coaches. 1 Preis.</h2>
        <p class="lead">Die meisten Coaches sind eine Meinung. Wir sind zwei &mdash; gleiche Gene, gleicher Start, jeder Split an uns selbst getestet.</p>
      </div>
      <div class="usp__cards">
        <article
          v-for="team in teams"
          :key="team.name"
          class="usp__card"
          :class="{ 'usp__card--accent': team.accent }"
        >
          <div class="usp__card-head">
            <img class="usp__avatar" :src="team.avatar" :alt="team.name" loading="lazy" width="48" height="48">
            <div>
              <div class="usp__name">{{ team.name }}</div>
              <div class="usp__tag">{{ team.tag }}</div>
            </div>
          </div>
          <ul class="usp__bullets">
            <li v-for="(b, i) in team.bullets" :key="i">{{ b }}</li>
          </ul>
        </article>
        <span class="usp__vs" aria-hidden="true">VS</span>
      </div>
    </div>
  </section>
</template>
