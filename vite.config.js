import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      'comp': fileURLToPath(new URL('./src/components', import.meta.url)),
      'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      'layout': fileURLToPath(new URL('./src/layout', import.meta.url)),
      'stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      'views': fileURLToPath(new URL('./src/views', import.meta.url)),
    }
  }
})