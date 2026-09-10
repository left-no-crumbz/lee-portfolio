import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { beasties } from 'vite-plugin-beasties';
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // The single stylesheet (~33KB source, ~8KB transfer) inlines whole via
    // inlineThreshold: no render-blocking CSS request, no extra dependency in
    // the client bundle. preloadFonts stays off so font downloads keep their
    // current low-priority profile and can't contend with the LCP image.
    beasties({ options: { inlineThreshold: 40960, preloadFonts: false, logLevel: "warn" } }),
  ],
  build: {
    // Tiny assets (48px logo WebP) inline as data URIs: zero extra requests.
    assetsInlineLimit: 4096,
    modulePreload: { polyfill: false },
  },
});
