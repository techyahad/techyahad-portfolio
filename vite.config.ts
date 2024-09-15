import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/techyahad-portfolio/',  // Set base for GitHub Pages deployment
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for build
  }  
})
