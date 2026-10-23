import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { publications } from './src/data/publications.js';
import { cop17 } from './src/data/cop17.js';

const publicationPaths = new Set(['/publications', ...publications.map((item) => item.path), cop17.path]);

export default defineConfig(({ command }) => ({
  plugins: [react(), {
    name: 'preview-publication-pages',
    configurePreviewServer(server) {
      // Mirror Vercel's static publication rewrites in the local production preview.
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url, 'http://localhost');
        const path = url.pathname.replace(/\/+$/, '');
        if (publicationPaths.has(path)) request.url = `${path}/index.html${url.search}`;
        next();
      });
    },
  }],
  cacheDir: '.vite-cache',
  optimizeDeps: {
    include: command === 'serve' ? ['react', 'react-dom/client'] : [],
    noDiscovery: true,
  },
}));
