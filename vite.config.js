import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from 'vite-plugin-csp';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp({
      policies: {
        'script-src': ["'self'", "'unsafe-eval'"]
      }
    })
  ],
  
  
})
