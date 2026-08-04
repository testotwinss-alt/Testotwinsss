<script setup>
const pains = [
  'Du findest tausend Videos, tausend Meinungen, tausend Ansätze — und weißt am Ende nicht, wo du anfangen sollst.',
  'Du trainierst hart, aber ohne klaren Plan bleibt der Progress aus.',
  'Ernährung wird komplizierter gemacht, als sie sein muss — also machst du irgendwas.'
]
</script>

<template>
  <section class="section problem reveal" aria-labelledby="problem-title">
    <div class="container">
      <span class="eyebrow">Kennst du das?</span>
      <h2 class="h1" id="problem-title">Zu viele Infos, null Klarheit.</h2>
      <ul class="problem__list">
        <li v-for="(pain, i) in pains" :key="i" class="problem__item">
          <span class="problem__x" aria-hidden="true">&times;</span><span>{{ pain }}</span>
        </li>
      </ul>
      <p class="problem__outro">Wir haben genau dieses Chaos durchgemacht. Der Blueprint enthält nur das Wichtigste, was wir in 3 Jahren gelernt haben &mdash; ohne Schnickschnack.</p>
    </div>
  </section>
</template>
