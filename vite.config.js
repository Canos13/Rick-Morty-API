import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://canos13.github.io/Rick-Morty-API/",
  plugins: [react()]
})
