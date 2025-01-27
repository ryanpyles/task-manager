import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true, // Keeps hot module replacement
    },
  },
  build: {
    sourcemap: false, // Avoid eval-based sourcemaps
  },
  esbuild: {
    legalComments: 'none', // Removes legal comments that might include eval
  },
});
