import { defineConfig } from 'vite';

// base './' keeps asset paths relative so the built site works on GitHub Pages project URLs.
export default defineConfig({
  base: './',
});
