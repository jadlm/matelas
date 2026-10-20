import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Always use the domain root on Vercel; GitHub Pages uses /matelas/.
  base: process.env.VERCEL ? '/' : process.env.BASE_PATH || '/',
});
