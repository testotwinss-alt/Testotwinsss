import { STRIPE_PAYMENT_LINK } from '../config.js'

/**
 * Gemeinsame Kauf-Logik für alle CTAs.
 *
 * - Ist STRIPE_PAYMENT_LINK gesetzt: CTA verhält sich wie ein externer Link
 *   (neuer Tab, rel="noopener").
 * - Ist er leer: CTA scrollt sanft zur Preis-Box (#checkout), respektiert
 *   prefers-reduced-motion.
 *
 * buyHref / buyTarget / buyRel eignen sich zum direkten Binden an ein <a>.
 * handleBuyClick fängt den Klick ab, um im Fallback-Fall das Scrollen zu
 * übernehmen (statt eines Sprungs zum Anker).
 */
export function useBuy() {
  const hasLink = Boolean(STRIPE_PAYMENT_LINK)

  const buyHref = hasLink ? STRIPE_PAYMENT_LINK : '#checkout'
  const buyTarget = hasLink ? '_blank' : null
  const buyRel = hasLink ? 'noopener noreferrer' : null

  function handleBuyClick(event) {
    if (hasLink) return // externer Link -> Standardverhalten des Browsers

    // Fallback: sanft zur Preis-Box scrollen
    event.preventDefault()
    const target = document.getElementById('checkout')
    if (!target) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return { hasLink, buyHref, buyTarget, buyRel, handleBuyClick }
}
