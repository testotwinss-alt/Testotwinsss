<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BuyButton from './BuyButton.vue'

// Sichtbar, sobald über den Hero hinaus gescrollt wurde (~600px).
// Nur mobil sichtbar (CSS blendet ab 768px aus).
const visible = ref(false)
let observer = null
let scrollHandler = null

onMounted(() => {
  const hero = document.querySelector('.hero')
  if (hero && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.value = !entry.isIntersecting
        })
      },
      { threshold: 0, rootMargin: '-600px 0px 0px 0px' }
    )
    observer.observe(hero)
  } else {
    scrollHandler = () => { visible.value = window.scrollY > 600 }
    window.addEventListener('scroll', scrollHandler, { passive: true })
    scrollHandler()
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <div class="stickybar" :class="{ 'is-visible': visible }" :aria-hidden="!visible" :inert="!visible">
    <div class="stickybar__price">
      <span class="stickybar__now">29&euro;</span>
      <span class="stickybar__once">einmalig, kein Abo</span>
    </div>
    <BuyButton btn-class="btn--sm">Jetzt sichern</BuyButton>
  </div>
</template>
