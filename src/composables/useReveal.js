import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { currentPage } from './useHashRoute.js'

/**
 * Scroll-Reveal via IntersectionObserver.
 * Beobachtet alle Elemente mit .reveal und schaltet .is-visible, sobald sie
 * in den Viewport kommen.
 *
 * Re-scannt bei Routenwechsel (z. B. Rückkehr von einer Rechtsseite zur
 * Landing), damit neu gemountete .reveal-Elemente wieder animiert werden.
 *
 * prefers-reduced-motion oder fehlender IntersectionObserver: Elemente sofort
 * sichtbar.
 */
export function useReveal() {
  let observer = null

  function scan() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = Array.from(document.querySelectorAll('.reveal:not(.is-visible)'))

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
      )
    }

    els.forEach((el) => observer.observe(el))
  }

  onMounted(scan)
  watch(currentPage, () => nextTick(scan))

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
