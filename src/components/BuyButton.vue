<script setup>
import { useBuy } from '../composables/useBuy.js'

/**
 * Zentraler Kauf-CTA. Rendert ein <a>, das entweder zum Stripe-Payment-Link
 * (neuer Tab) oder – als Fallback – sanft zur Preis-Box scrollt.
 *
 * Slot = Button-Label. `arrow` zeigt den animierten Pfeil (Default: true).
 * `btnClass` erlaubt Varianten (z. B. "btn--sm", "btn--block").
 */
defineProps({
  btnClass: { type: String, default: '' },
  arrow: { type: Boolean, default: true },
  ariaLabel: { type: String, default: null }
})

const { buyHref, buyTarget, buyRel, handleBuyClick } = useBuy()
</script>

<template>
  <a
    class="btn btn-primary"
    :class="btnClass"
    :href="buyHref"
    :target="buyTarget"
    :rel="buyRel"
    :aria-label="ariaLabel"
    @click="handleBuyClick"
  >
    <slot />
    <span v-if="arrow" class="btn__arrow" aria-hidden="true">&rarr;</span>
  </a>
</template>
