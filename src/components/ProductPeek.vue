<script setup>
const items = [
  { title: 'Trainingsplan', desc: 'klar strukturiert, von Anfänger bis Fortgeschritten anpassbar.' },
  { title: 'Ernährungsguide + Beispiel-Ernährungspläne', desc: 'Aufbau, Diät & Recomp, budget-tauglich.' },
  { title: 'Progressive-Overload-System', desc: 'messbar stärker werden, Woche für Woche.' },
  { title: 'Unser eigener Trainingsplan', desc: 'inkl. Tipps & Tricks aus 3 Jahren Erfahrung.' },
  { title: 'Fragen?', desc: 'Direkter Draht zu uns über Instagram.' }
]
</script>

<template>
  <section class="section peek reveal" aria-labelledby="peek-title">
    <div class="container container--wide">
      <div class="section-head">
        <span class="eyebrow">Was du bekommst</span>
        <h2 class="h1" id="peek-title">Kein Plan von der Stange.</h2>
        <p class="lead">Kein loses PDF, kein Bro-Science-Zettel. Der Blueprint ist das System, mit dem wir selbst trainieren &mdash; sofort einsatzbereit, alles digital, in 3 Paketen, die aufeinander aufbauen.</p>
      </div>

      <div class="peek__split">
        <div class="peek__media">
          <div class="ratio ratio--3-4">
            <img src="/img/trizeps.jpg" alt="Trainingsarm eines der Testotwins in Aktion" loading="lazy" width="900" height="1600" style="object-position: center 42%;">
          </div>
        </div>

        <div class="peek__panel">
          <ul class="pricebox__list">
            <li v-for="item in items" :key="item.title">
              <span class="pricebox__check" aria-hidden="true">&check;</span>
              <span><b>{{ item.title }}</b><span class="peek__desc">{{ item.desc }}</span></span>
            </li>
          </ul>
          <p class="peek__micro">Sofort-Zugang &middot; alles digital &middot; einmal zahlen, behalten.</p>
        </div>
      </div>
    </div>
  </section>
</template>
