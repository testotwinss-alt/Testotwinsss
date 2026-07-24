<script setup>
import BuyButton from './BuyButton.vue'

// Paket 1 (Essentials): Inhalte vom Kunden bestätigt — echter Guide-Inhalt
//   (3 Grundprinzipien, Anfängerfehler, Progressive Overload).
// TODO KUNDE: Inhalte von Paket 2 (Advanced) & 3 (Premium) noch final bestätigen.
// KEINE erfundenen Einzelpreise/Anker — nur der ehrliche Aufpreis-Hinweis (delta).
const tiers = [
  {
    id: 'paket1',
    name: 'Essentials',
    tagline: 'Die Grundlagen, die wirklich zählen',
    price: '12',
    delta: null,
    inherit: null,
    featured: false,
    variant: 'secondary',
    features: [
      'Die 3 Grundprinzipien des Muskelaufbaus — Trainingsreiz, Ernährung, Regeneration',
      'Progressive Overload erklärt — wie du systematisch stärker wirst',
      'Die häufigsten Anfängerfehler — und wie du sie umgehst',
      'Klar & ehrlich, ohne Fachbegriff-Overkill oder Wundermittel'
    ],
    newItem: null
  },
  {
    id: 'paket2',
    name: 'Advanced',
    tagline: 'Essentials + Ernährungsfahrplan',
    price: '30',
    delta: 'nur 18 € mehr als Essentials',
    inherit: 'Essentials',
    featured: false,
    variant: 'secondary',
    features: [],
    newItem: {
      title: 'Ernährungsfahrplan',
      // TODO KUNDE: genauen Umfang des Ernährungsfahrplans bestätigen.
      desc: 'Wie du deine Ernährung auf Muskelaufbau ausrichtest — Kalorien, Protein und Mahlzeiten-Timing.'
    }
  },
  {
    id: 'paket3',
    name: 'Premium',
    tagline: 'Komplettpaket: Muskelaufbau, Ernährung & Trainingsplan aus einer Hand',
    price: '50',
    delta: 'nur 20 € mehr als Advanced',
    inherit: 'Advanced',
    featured: true,
    variant: 'primary',
    features: [],
    newItem: {
      title: 'Fertiger Trainingsplan',
      // TODO KUNDE: genauen Umfang des Trainingsplans bestätigen.
      desc: 'Muskelaufbau, Ernährung und Training als ein durchgeplantes Programm — du ziehst nur noch durch.'
    }
  }
]
</script>

<template>
  <section class="section pricing" id="checkout" aria-labelledby="pricing-title">
    <div class="container container--wide">
      <div class="section-head section-head--center">
        <span class="eyebrow">Wähl dein Paket</span>
        <h2 class="h1" id="pricing-title">Drei Wege, ein Ziel.</h2>
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
          <p class="tier__tagline">{{ t.tagline }}</p>

          <div class="tier__price">
            <span class="tier__amount">{{ t.price }}&euro;</span>
            <span class="tier__once">einmalig</span>
          </div>
          <p v-if="t.delta" class="tier__delta">{{ t.delta }}</p>

          <div v-if="t.inherit" class="tier__inherit">
            <span class="tier__inherit-arrow" aria-hidden="true">&#8627;</span>
            Enthält alles aus <b>{{ t.inherit.toUpperCase() }}</b>
          </div>

          <ul class="tier__features">
            <li v-for="f in t.features" :key="f">
              <span class="pricebox__check" aria-hidden="true">&check;</span>
              <span>{{ f }}</span>
            </li>
            <li v-if="t.newItem">
              <span class="pricebox__check" aria-hidden="true">&check;</span>
              <span><b>{{ t.newItem.title }}</b><span class="peek__desc">{{ t.newItem.desc }}</span></span>
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
