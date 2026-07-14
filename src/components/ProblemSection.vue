<script setup>
const pains = [
  'Jeder Fitness-Kanal sagt was anderes — und du weißt am Ende weniger als vorher.',
  'Du trainierst hart, aber ohne roten Faden bleibt der Progress aus.',
  'Ernährung fühlt sich an wie Raketenwissenschaft — also machst du irgendwas.'
]
</script>

<template>
  <section class="section problem reveal" aria-labelledby="problem-title">
    <div class="container">
      <span class="eyebrow">Kennst du das?</span>
      <h2 class="h1" id="problem-title">100 YouTube-Videos, 100 Meinungen, 0 Plan.</h2>
      <ul class="problem__list">
        <li v-for="(pain, i) in pains" :key="i" class="problem__item">
          <span class="problem__x" aria-hidden="true">&times;</span><span>{{ pain }}</span>
        </li>
      </ul>
      <p class="problem__outro">Wir haben genau diesen Chaos-Modus durchgemacht. Der Blueprint ist die Abkürzung, die wir uns damals gewünscht hätten.</p>
    </div>
  </section>
</template>
