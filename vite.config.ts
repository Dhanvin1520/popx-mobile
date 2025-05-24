import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // explicitly set base path
  build: {
    outDir: 'dist',
  },
})