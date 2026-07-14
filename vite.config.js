import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Statische Single-Page-Landing. Kein Router, kein Pinia.
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2019',
    outDir: 'dist'
  }
})
