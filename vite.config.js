import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { cloudflare } from "@cloudflare/vite-plugin";

// Statische Single-Page-Landing. Kein Router, kein Pinia.
export default defineConfig({
  plugins: [vue(), cloudflare()],
  build: {
    target: 'es2019',
    outDir: 'dist'
  }
})