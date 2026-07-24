<script setup>
// PLATZHALTER-TESTIMONIALS: durch echte ersetzen.
// Struktur pro Eintrag: { quote, name, initials, context }.
const testimonials = [
  { quote: 'Endlich ein Plan statt 20 offene Tabs. Nach 8 Wochen zum ersten Mal echten Progress an den Armen gesehen. No cap.', name: 'Jonas M.', initials: 'JM', context: 'seit 8 Wochen dabei' },
  { quote: 'Der High-Intensity-Split von Finn ist perfekt neben der Ausbildung. 45 Min, rein, raus, gains. Genau mein Ding.', name: 'Leon K.', initials: 'LK', context: 'Team Finn' },
  { quote: 'Hab als Frau lange gesucht und immer nur Männer-Bro-Science gefunden. Hier war der Recomp-Teil endlich verständlich. 10/10.', name: 'Mia S.', initials: 'MS', context: 'Recomp-Phase' },
  { quote: 'Einmal zahlen statt Coaching-Abo für 150 im Monat. Ehrlich der beste Deal, den ich im Fitness-Bereich gemacht hab.', name: 'Tim B.', initials: 'TB', context: 'seit 3 Monaten dabei' },
  { quote: 'Die Ernährungsprotokolle sind so easy erklärt. Ich musste nichts abwiegen wie ein Nerd und hab trotzdem 4 Kilo aufgebaut.', name: 'Noah P.', initials: 'NP', context: 'Aufbau-Phase' },
  { quote: 'Das mit dem Twin-Vergleich ist genial. Hab beide Splits probiert und für mich rausgefunden, dass High-Volume mein Style ist.', name: 'Elias K.', initials: 'EK', context: 'Team Luca' },
  { quote: 'War kurz vorm Aufgeben. Der Mindset-Teil hat mich echt zurückgeholt. Aura kommt wirklich vom Grind, die Jungs haben recht.', name: 'Finn H.', initials: 'FH', context: 'seit 5 Monaten dabei' }
]
</script>

<template>
  <section class="section testi reveal" aria-labelledby="testi-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Was die Community sagt</span>
        <h2 class="h1" id="testi-title">Nicht nur wir sind überzeugt.</h2>
      </div>
      <div class="testi__track">
        <article v-for="t in testimonials" :key="t.name" class="testi__card">
          <div class="testi__stars" aria-label="5 von 5 Sternen">&starf;&starf;&starf;&starf;&starf;</div>
          <p class="testi__quote">&bdquo;{{ t.quote }}&ldquo;</p>
          <div class="testi__person">
            <span class="testi__initials" aria-hidden="true">{{ t.initials }}</span>
            <div class="testi__meta">
              <div class="testi__name">{{ t.name }}</div>
              <div class="testi__ctx">{{ t.context }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
