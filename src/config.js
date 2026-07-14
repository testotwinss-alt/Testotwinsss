/**
 * Zentrale Konfiguration.
 *
 * STRIPE_PAYMENT_LINK — die Kauf-URL für den "Twin Blueprint".
 *
 * So erstellst du den Link (kein Code, kein Backend nötig):
 *   1. Stripe-Dashboard öffnen -> "Produktkatalog" -> "Produkt hinzufügen".
 *      Name: "Twin Blueprint", Preis: 29,00 EUR, einmalig (Type: "Einmalig").
 *   2. Links im Menü "Payment Links" -> "Neuer Link" -> das Produkt wählen.
 *   3. Zahlungsmethoden aktivieren (PayPal, Klarna, Karte) und Link erstellen.
 *   4. Die generierte URL (Form: https://buy.stripe.com/XXXXXXXX) kopieren.
 *   5. Unten bei PAYMENT_LINK eintragen und neu deployen.
 *      (Optional überschreibt die Env-Variable VITE_STRIPE_PAYMENT_LINK den Wert.)
 *
 * Solange kein GÜLTIGER Link gesetzt ist, scrollen alle CTAs sanft zur Preis-Box
 * (#checkout) statt zu einer toten Zahlungsseite zu führen (siehe useBuy-Composable).
 */

// ⚠️ Aktuell der Stripe-TEST-Link — vor Livegang gegen den Live-Link tauschen!
const PAYMENT_LINK = 'https://buy.stripe.com/test_cNifZagiA2pLeKMfHkbAs01'

const RAW_LINK = (import.meta.env.VITE_STRIPE_PAYMENT_LINK || PAYMENT_LINK || '').trim()

const STRIPE_PREFIX = 'https://buy.stripe.com/'

/**
 * Gültig nur, wenn es eine echte Stripe-Payment-Link-URL ist: beginnt mit
 * https://buy.stripe.com/ und enthält keinen Platzhalter. Ein versehentlich
 * unverändert kopierter Beispielwert (z. B. ".../DEIN_LINK") wird damit wie
 * "leer" behandelt, sodass der sichere Scroll-Fallback greift.
 */
function isValidPaymentLink(url) {
  if (!url.startsWith(STRIPE_PREFIX)) return false
  if (/DEIN_LINK|XXXXXXXX/i.test(url)) return false
  return url.length > STRIPE_PREFIX.length // nach dem Prefix muss ein Slug folgen
}

export const STRIPE_PAYMENT_LINK = isValidPaymentLink(RAW_LINK) ? RAW_LINK : ''
