import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React_Tasks/',
  plugins: [react()],
  build: { 
    outDir: 'dist',
    rollupOptions: {
      external: ['@mui/material']
    }
  },
  resolve: { 
    alias: { 
      '@': '/src' 
    } 
  }
})
