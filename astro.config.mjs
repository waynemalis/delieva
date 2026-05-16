// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.botanasdelieva.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'jp', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});