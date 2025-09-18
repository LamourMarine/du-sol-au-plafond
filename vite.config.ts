import { defineConfig } from 'vite'
// @ts-expect-error - Vite plugins don't always ship with type definitions
import react from '@vitejs/plugin-react'
// @ts-expect-error
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})