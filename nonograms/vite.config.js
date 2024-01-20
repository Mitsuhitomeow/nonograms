import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'assets',
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
  },
  base: '/mitsuhitomeow-JSFE2023Q4/',
});
