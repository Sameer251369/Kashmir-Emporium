import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: './', // Ensures assets are relative to index.html
  plugins: [react(), tailwindcss(), svgr()],
})