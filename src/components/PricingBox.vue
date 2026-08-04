<script setup>
import BuyButton from './BuyButton.vue'

// Preise & Vererbung exakt nach Wording V2. KEINE erfundenen Streichpreise/Anker.
// Akzent-Disziplin: nur das Premium-Paket trägt den soliden CTA (primary),
// die übrigen bleiben Outline (secondary). Preise nie orange (Token-Regel).
const tiers = [
  {
    id: 'paket1',
    name: 'Essentials',
    price: '12',
    inherit: null,
    featured: false,
    variant: 'secondary',
    features: [
      'Die 3 wichtigsten Grundlagen zu Training & Ernährung',
      'Sofort-Zugang, alles digital'
    ]
  },
  {
    id: 'paket2',
    name: 'Advanced',
    price: '30',
    inherit: 'Essentials',
    featured: false,
    variant: 'secondary',
    features: [
      'Ausführliche Ernährungsprotokolle',
      'Beispiel-Ernährungspläne mit konkreten Lebensmitteln'
    ]
  },
  {
    id: 'paket3',
    name: 'Premium',
    price: '50',
    inherit: 'Advanced',
    featured: true,
    variant: 'primary',
    features: [
      'Unser eigener Trainingsplan, den wir selbst nutzen',
      'Tipps & Tricks aus 3 Jahren Erfahrung',
      'Direkter Draht zu uns über Instagram bei Fragen'
    ]
  }
]
</script>

<template>
  <section class="section pricing" id="checkout" aria-labelledby="pricing-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Wähl dein Paket</span>
        <h2 class="h1" id="pricing-title">Der Twin Blueprint &mdash; in 3 Tiefenstufen.</h2>
        <p class="pricing__note">Einmalzahlung &middot; kein Abo</p>
      </div>

      <div class="pricing__tiers reveal">
        <article
          v-for="t in tiers"
          :key="t.id"
          class="tier"
          :class="{ 'tier--featured': t.featured }"
        >
          <div v-if="t.featured" class="tier__badge">
            <span class="badge badge--accent">Komplettpaket</span>
          </div>

          <h3 class="tier__name">{{ t.name }}</h3>

          <div class="tier__price">
            <span class="tier__amount">{{ t.price }}&euro;</span>
            <span class="tier__once">einmalig</span>
          </div>

          <div v-if="t.inherit" class="tier__inherit">
            <span class="tier__inherit-arrow" aria-hidden="true">&#8627;</span>
            Enthält alles aus <b>{{ t.inherit.toUpperCase() }}</b>
          </div>

          <ul class="tier__features">
            <li v-for="f in t.features" :key="f">
              <span class="pricebox__check" aria-hidden="true">&check;</span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <div class="tier__cta">
            <BuyButton
              :plan="t.id"
              :variant="t.variant"
              btn-class="btn--block"
              :aria-label="`${t.name}-Paket für ${t.price} Euro sichern`"
            >{{ t.name }} sichern</BuyButton>
          </div>
        </article>
      </div>

      <!-- TODO KUNDE: Zahlungsmethoden in Stripe aktivieren, sonst Aufzählung kürzen -->
      <p class="pricing__trust">Sichere Zahlung &bull; Sofort-Zugang per Mail &bull; Einmalzahlung, kein Abo</p>
      <p class="pricing__methods">PayPal &middot; Klarna &middot; Kredit- &amp; Debitkarte</p>
      <p class="pricebox__fineprint">Es gilt das gesetzliche <a href="#/widerruf">Widerrufsrecht für Verbraucher</a>. Digitales Produkt, sofortiger Zugang nach Kauf.</p>
    </div>
  </section>
</template>
