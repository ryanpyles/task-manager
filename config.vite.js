import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Development server port
  },
  build: {
    minify: true, // Enables minification for optimized builds
  },
});
