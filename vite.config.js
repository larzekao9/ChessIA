// Landing de ChessIA como sitio estático. En GitHub Pages se sirve bajo /ChessIA/.
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.LANDING_BASE ?? '/ChessIA/',
  plugins: [react(), tailwindcss()],
});
