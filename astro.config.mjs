// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ong-ist.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
