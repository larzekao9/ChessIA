// Landing de ChessIA como sitio estático. En GitHub Pages se sirve bajo /ChessIA/;
// en Vercel (variable VERCEL=1 durante el build) se sirve desde la raíz.
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.LANDING_BASE ?? (process.env.VERCEL ? '/' : '/ChessIA/'),
  plugins: [react(), tailwindcss()],
});
