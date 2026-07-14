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
  '#/widerruf': 'widerruf'
}

const TITLES = {
  home: 'Twin Blueprint — Das Natural-Programm der Testotwins | 29€',
  impressum: 'Impressum — Testotwins',
  datenschutz: 'Datenschutzerklärung — Testotwins',
  widerruf: 'Widerrufsbelehrung — Testotwins'
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
  document.title = TITLES[currentPage.value] || TITLES.home
  window.addEventListener('hashchange', apply)
}
