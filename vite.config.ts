import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <-- Исправлено здесь

export default defineConfig({
  plugins: [react()],
  base: '/gh-pages-demo/',
})
