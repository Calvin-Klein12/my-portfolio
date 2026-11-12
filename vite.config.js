import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/,
// so every asset URL needs the "/<repo>/" prefix. If you rename the repo, change `base`.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
})
