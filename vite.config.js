import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist/client',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        allSuperheroes: resolve(__dirname, 'src/all-superheroes/index.html'),
        heroDetails: resolve(__dirname, 'src/hero/index.html'),
        notes: resolve(__dirname, 'src/notes/index.html'),
      },
    },
  },
});
