import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,       // ⬅️ on passe sur un autre port
    strictPort: true  // ⬅️ pour éviter le changement automatique
  }
})
