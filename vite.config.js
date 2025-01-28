import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    legalComments: 'none', // Removes eval-like comments
  },
  build: {
    sourcemap: false, // Avoid eval-based sourcemaps
  },
});
