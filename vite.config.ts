import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Tiny assets (48px logo WebP) inline as data URIs: zero extra requests.
    assetsInlineLimit: 4096,
    modulePreload: { polyfill: false },
  },
});
