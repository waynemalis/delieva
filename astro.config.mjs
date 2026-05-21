// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.botanasdelieva.com',
  
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    }
  },

  integrations: [react(), sitemap(), robotsTxt()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'jp', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    },
  },
});