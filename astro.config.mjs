// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/delieva',  // nombre exacto de tu repositorio
  
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    }
  },

  server: {
    allowedHosts: true
  },

  integrations: [react()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'jp', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});