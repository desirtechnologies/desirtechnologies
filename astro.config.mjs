import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  srcDir: './www/src',
  outDir: './www/dist',
  publicDir: './www/public',
  base: '/',
  build: {
    format: 'file'
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
