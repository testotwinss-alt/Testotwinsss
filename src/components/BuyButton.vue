<script setup>
import { useBuy } from '../composables/useBuy.js'

/**
 * Zentraler Kauf-CTA. Rendert ein <a>, das entweder direkt zum Stripe-Payment-
 * Link des gewählten Pakets (neuer Tab) oder – ohne Paket bzw. als Fallback –
 * sanft zur Paket-Auswahl (#checkout) scrollt.
 *
 * Slot = Button-Label. `arrow` zeigt den animierten Pfeil (Default: true).
 * `btnClass` erlaubt Zusatz-Varianten (z. B. "btn--sm", "btn--block").
 * `variant` = 'primary' | 'secondary' — Akzent-Disziplin: max. ein solider
 *   Orange-CTA pro Viewport, Rest als Outline.
 * `plan` = 'paket1' | 'paket2' | 'paket3' — nur die Paket-CTAs setzen das,
 *   alle generischen CTAs lassen es leer und scrollen zu #checkout.
 */
const props = defineProps({
  btnClass: { type: String, default: '' },
  arrow: { type: Boolean, default: true },
  ariaLabel: { type: String, default: null },
  variant: { type: String, default: 'primary' },
  plan: { type: String, default: '' }
})

const { buyHref, buyTarget, buyRel, handleBuyClick } = useBuy(props.plan)
</script>

<template>
  <a
    class="btn"
    :class="[variant === 'secondary' ? 'btn-secondary' : 'btn-primary', btnClass]"
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
