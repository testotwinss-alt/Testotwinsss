import { STRIPE_PAYMENT_LINKS } from '../config.js'

/**
 * Gemeinsame Kauf-Logik für alle CTAs.
 *
 * @param {string} [plan] — 'paket1' | 'paket2' | 'paket3'. Nur die Paket-CTAs
 *   in der Preis-Sektion übergeben einen Plan und führen dann direkt auf den
 *   passenden Stripe-Payment-Link. ALLE anderen CTAs (Hero, Header, Sticky-Bar,
 *   Final-CTA) lassen `plan` leer und scrollen bewusst zur Paket-Auswahl
 *   (#checkout) — sie behaupten keinen Einzelpreis mehr.
 *
 * - Gültiger Link für den Plan vorhanden: CTA verhält sich wie ein externer
 *   Link (neuer Tab, rel="noopener").
 * - Kein Plan / kein gültiger Link: CTA scrollt sanft zu #checkout und
 *   respektiert prefers-reduced-motion.
 *
 * buyHref / buyTarget / buyRel eignen sich zum direkten Binden an ein <a>.
 * handleBuyClick fängt den Klick ab, um im Fallback-Fall das Scrollen zu
 * übernehmen (statt eines Sprungs zum Anker).
 */
export function useBuy(plan) {
  const link = plan ? (STRIPE_PAYMENT_LINKS[plan] || '') : ''
  const hasLink = Boolean(link)

  const buyHref = hasLink ? link : '#checkout'
  const buyTarget = hasLink ? '_blank' : null
  const buyRel = hasLink ? 'noopener noreferrer' : null

  function handleBuyClick(event) {
    if (hasLink) return // externer Link -> Standardverhalten des Browsers

    // Fallback: sanft zur Paket-Auswahl scrollen
    event.preventDefault()
    const target = document.getElementById('checkout')
    if (!target) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return { hasLink, buyHref, buyTarget, buyRel, handleBuyClick }
}
