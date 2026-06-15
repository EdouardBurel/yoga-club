import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' uses relative asset paths, which works both on a GitHub Pages
// project URL (username.github.io/repo-name/) and on a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
