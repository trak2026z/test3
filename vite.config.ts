import { defineConfig } from 'vite';
import react from '@vite/js/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5000
  }
});