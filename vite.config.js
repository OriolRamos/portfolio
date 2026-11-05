import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative asset paths work on GitHub Pages, Vercel, Netlify, etc.
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
