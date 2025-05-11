import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Flashify - Crie Anúncios Profissionais',
        short_name: 'Anúncio IA',
        description: 'Crie anúncios visualmente perfeitos com inteligência artificial e publique no Instagram, Google Ads ou WhatsApp.',
        theme_color: '#48BB78',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [{
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }, {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }]
      }
    })
  ]
});
