<script setup>
import BuyButton from './BuyButton.vue'

// TODO KUNDE: mit tatsächlichem Produktumfang abgleichen
// Inklusiv-Liste OHNE erfundene Einzelpreise/Anker.
const bonuses = [
  'Workout-Splits für 2–6 Trainingstage pro Woche, von Anfänger bis Fortgeschritten',
  'Ernährungsguide + Rezepte',
  'Trainings-Tracker-Sheet',
  'Zugang zur Community',
  'Twin-Q&A + Formcheck-Bonus',
  'Lebenslange Updates'
]
</script>

<template>
  <section class="section pricing" id="checkout" aria-labelledby="pricing-title">
    <div class="container">
      <div class="section-head section-head--center">
        <span class="eyebrow">Nur ein Klick entfernt</span>
        <h2 class="h1" id="pricing-title">Der komplette Twin Blueprint.</h2>
      </div>
      <div class="pricebox reveal">
        <div class="pricebox__banner">Einmalzahlung &middot; kein Abo</div>
        <div class="pricebox__body">
          <div class="pricebox__price">
            <span class="pricebox__now">29&euro;</span>
            <span class="pricebox__once">einmalig</span>
          </div>
          <ul class="pricebox__list">
            <li v-for="b in bonuses" :key="b">
              <span class="pricebox__check" aria-hidden="true">&check;</span>
              <span>{{ b }}</span>
            </li>
          </ul>
          <BuyButton btn-class="btn--block pricebox__cta">Twin Blueprint holen &mdash; 29&euro;</BuyButton>
          <!-- TODO KUNDE: Zahlungsmethoden in Stripe aktivieren, sonst Aufzählung kürzen -->
          <p class="pricebox__trust">Sichere Zahlung &bull; Sofort-Zugang per Mail &bull; Einmalzahlung, kein Abo<br>PayPal &middot; Klarna &middot; Kredit- &amp; Debitkarte</p>
          <!-- TODO KUNDE: Garantie bestätigen oder entfernen (dann auch WiderrufPage anpassen) -->
          <p class="pricebox__guarantee"><span class="g" aria-hidden="true">&check;</span> 30 Tage Geld-zurück-Garantie</p>
          <p class="pricebox__fineprint">Es gilt das gesetzliche <a href="#/widerruf">Widerrufsrecht für Verbraucher</a>. Digitales Produkt, sofortiger Zugang nach Kauf.</p>
        </div>
      </div>
    </div>
  </section>
</template>
