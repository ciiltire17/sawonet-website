import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  cacheDir: '.vite-cache',
  optimizeDeps: {
    include: command === 'serve' ? ['react', 'react-dom/client'] : [],
    noDiscovery: true,
  },
}));
