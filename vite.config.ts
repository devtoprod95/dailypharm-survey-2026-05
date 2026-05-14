import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dailypharm-survey-2026-05/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})