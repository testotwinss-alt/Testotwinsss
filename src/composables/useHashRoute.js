import { ref } from 'vue'

/**
 * Leichtes Hash-Routing ohne vue-router.
 *
 * WICHTIG: Nur Hashes mit Prefix "#/" gelten als Route. Normale Sprung-Anker
 * wie "#checkout" oder "#top" werden NICHT abgefangen und funktionieren weiter
 * als native Scroll-Anker.
 */
const ROUTES = {
  '#/impressum': 'impressum',
  '#/datenschutz': 'datenschutz',
  '#/widerruf': 'widerruf',
  '#/danke': 'danke'
}

const TITLES = {
  home: 'Twin Blueprint — Das Natural-Programm der Testotwins',
  impressum: 'Impressum — Testotwins',
  datenschutz: 'Datenschutzerklärung — Testotwins',
  widerruf: 'Widerrufsbelehrung — Testotwins',
  danke: 'Danke für deinen Kauf — Testotwins'
}

// Singleton-State: von App und Kind-Komponenten gemeinsam genutzt.
export const currentPage = ref(resolvePage())

function resolvePage() {
  const hash = window.location.hash
  if (hash.startsWith('#/')) {
    return ROUTES[hash] || 'home'
  }
  // Leerer Hash oder normaler Anker (#checkout, #top) -> Landing.
  return 'home'
}

function apply() {
  const hash = window.location.hash
  const page = resolvePage()
  currentPage.value = page
  document.title = TITLES[page] || TITLES.home

  // Unterseiten werden auch DIREKT aufgerufen (die Danke-Seite als
  // Stripe-success_url). Beim Neuladen stellt der Browser sonst die alte
  // Scroll-Position wieder her — und zwar NACH dem Rendern, womit das
  // scrollTo(0,0) unten wirkungslos verpufft.
  // Muss bei JEDEM Routenwechsel laufen, nicht nur beim Init: Hash-Wechsel
  // laden das Dokument nicht neu, sonst bliebe "manual" für den Rest der
  // Session kleben und die Landing verlöre ihre Scroll-Wiederherstellung.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = page === 'home' ? 'auto' : 'manual'
  }

  if (page !== 'home') {
    // Rechtsseite: immer oben starten.
    window.scrollTo(0, 0)
  } else if (hash === '' || hash === '#/' || hash === '#top') {
    // Zurück zur Landing ohne spezifischen Anker -> nach oben.
    window.scrollTo(0, 0)
  }
  // Andernfalls (echter Anker wie #checkout): Browser-Standardsprung belassen.
}

let initialized = false

/**
 * Einmalig in App.vue aufrufen: setzt Titel für die Startroute und
 * registriert den hashchange-Listener.
 */
export function initHashRoute() {
  if (initialized) return
  initialized = true
  apply()
  window.addEventListener('hashchange', apply)
}
