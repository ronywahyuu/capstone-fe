import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@vue/runtime-core",
        replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
      }
    ]
  }
})
