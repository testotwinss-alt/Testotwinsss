<script setup>
const bullets = [
  'Gleiche Gene, gleicher Start — der beste Beweis, dass das System funktioniert',
  'Wir haben uns motiviert, wenn der andere mal schwach wurde',
  'Bei Fragen erreichst du uns jederzeit auf Instagram'
]
</script>

<template>
  <section class="section usp reveal" aria-labelledby="usp-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Der Twin-Vorteil</span>
        <h2 class="h1" id="usp-title">2 Brüder. 1 System.</h2>
        <p class="lead">Wir sind nicht zwei Meinungen, sondern ein eingespieltes Team. Wir haben uns über 3 Jahre gegenseitig gepusht, kontrolliert und am Ball gehalten.</p>
      </div>
      <article class="usp__panel usp__card usp__card--accent">
        <div class="usp__card-head">
          <img class="usp__avatar" src="/img/profile.jpg" alt="Profilbild von Luca und Finn" loading="lazy" width="48" height="48">
          <span class="usp__amp" aria-hidden="true">&amp;</span>
          <div>
            <div class="usp__name">Luca &amp; Finn</div>
            <div class="usp__tag">3 Jahre natural</div>
          </div>
        </div>
        <ul class="usp__bullets">
          <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
