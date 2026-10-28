// En Vercel la landing animada (public/animada) pasa a ser la portada;
// la landing de React queda disponible en /react.html.
import { copyFileSync, existsSync, renameSync } from 'node:fs';

if (process.env.VERCEL && existsSync('dist/animada/index.html')) {
  renameSync('dist/index.html', 'dist/react.html');
  copyFileSync('dist/animada/index.html', 'dist/index.html');
  console.log('portada: landing animada · landing React en /react.html');
}
