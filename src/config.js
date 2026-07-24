/**
 * Zentrale Konfiguration — Stripe Payment Links pro Paket.
 *
 * Der "Twin Blueprint" wird in 3 Paketen verkauft (Essentials / Advanced /
 * Premium). Jedes Paket hat einen eigenen Stripe-Payment-Link. Es gibt kein
 * Backend und keine Stripe-JS-Lib — der Kauf läuft rein über diese Links.
 *
 * So erstellst du einen Link (kein Code nötig):
 *   1. Stripe-Dashboard -> "Produktkatalog" -> "Produkt hinzufügen".
 *      Je ein Produkt: "Twin Blueprint Essentials/Advanced/Premium",
 *      Preis 12 / 30 / 50 EUR, einmalig (Type: "Einmalig").
 *   2. "Payment Links" -> "Neuer Link" -> Produkt wählen.
 *   3. WICHTIG (digitales Produkt): consent_collection.terms_of_service =
 *      required + custom_text mit der Widerrufs-Erlöschens-Erklärung
 *      (§ 356 Abs. 5 BGB) setzen — sonst kollidiert der Checkout mit der
 *      WiderrufPage. Für ALLE drei Links identisch konfigurieren.
 *   4. Die generierte URL (Form: https://buy.stripe.com/XXXX) unten eintragen.
 *      (Optional überschreiben die Env-Variablen VITE_STRIPE_LINK_PAKET1/2/3
 *      den jeweiligen Wert.)
 *
 * Solange für ein Paket KEIN gültiger Link gesetzt ist, scrollt dessen CTA
 * sanft zur Paket-Auswahl (#checkout) statt auf eine tote Zahlungsseite zu
 * führen (siehe useBuy-Composable).
 */

// ⚠️ Stripe-LIVE-Links — echte Zahlungen! Jeder Link muss im Stripe-Dashboard
// mit Widerrufs-Checkbox (consent_collection.terms_of_service=required +
// custom_text § 356 Abs. 5 BGB, OHNE Garantie-Zusatz) und Weiterleitung auf
// /#/danke konfiguriert sein.
const PAYMENT_LINKS = {
  paket1: 'https://buy.stripe.com/7sYeVe09xfGx6Ni3KkcjS00', // Essentials 12 €
  paket2: 'https://buy.stripe.com/6oU5kEbSfamdb3yft2cjS01', // Advanced 30 €
  paket3: 'https://buy.stripe.com/fZudRa7BZ1PH4FaeoYcjS02'  // Premium 50 €
}

const ENV_LINKS = {
  paket1: import.meta.env.VITE_STRIPE_LINK_PAKET1,
  paket2: import.meta.env.VITE_STRIPE_LINK_PAKET2,
  paket3: import.meta.env.VITE_STRIPE_LINK_PAKET3
}

const STRIPE_PREFIX = 'https://buy.stripe.com/'

/**
 * Gültig nur, wenn es eine echte Stripe-Payment-Link-URL ist: beginnt mit
 * https://buy.stripe.com/ und enthält keinen Platzhalter. Ein versehentlich
 * unverändert kopierter Beispielwert (z. B. ".../DEIN_LINK") wird damit wie
 * "leer" behandelt, sodass der sichere Scroll-Fallback greift.
 */
function isValidPaymentLink(url) {
  if (!url || typeof url !== 'string') return false
  const u = url.trim()
  if (!u.startsWith(STRIPE_PREFIX)) return false
  if (/DEIN_LINK|XXXXXXXX/i.test(u)) return false
  return u.length > STRIPE_PREFIX.length // nach dem Prefix muss ein Slug folgen
}

/**
 * Map paket1/2/3 -> gültiger Link (oder '' wenn ungültig/leer).
 * Jeder Link wird EINZELN validiert; ein defektes Paket bricht die anderen
 * nicht. Env-Variable überschreibt den hinterlegten Default.
 */
export const STRIPE_PAYMENT_LINKS = Object.fromEntries(
  Object.keys(PAYMENT_LINKS).map((key) => {
    const raw = (ENV_LINKS[key] || PAYMENT_LINKS[key] || '').trim()
    return [key, isValidPaymentLink(raw) ? raw : '']
  })
)
