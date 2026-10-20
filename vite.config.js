import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vercel serves this site at the domain root; GitHub Pages uses /matelas/.
  base: process.env.BASE_PATH || '/',
});
