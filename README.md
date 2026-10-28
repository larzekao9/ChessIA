# ChessIA · Humano vs. IA — Landing

Landing pública del proyecto ChessIA (UAGRM FICCT · ADASC): un Dobot CR5 controlado por Turing, la IA de ChessIA, que juega ajedrez en un tablero real.

**En vivo:** https://larzekao9.github.io/ChessIA/

## Correr en local

```bash
npm install
npm run dev
```

## Publicar

```bash
npm run build
```

El contenido de `dist/` se sube a la rama `gh-pages` (GitHub Pages sirve esa rama en `/ChessIA/`).

## Estructura

- `src/paginas/Landing/Landing.jsx` — la página.
- `src/paginas/Landing/EscenaBrazoAjedrez.jsx` — escena 3D (three.js) del brazo moviendo el peón e7→e5. Es una ilustración, no lee el brazo real.
- `src/paginas/Landing/Landing.css` — estilos propios (cuadrícula, vidrio, haz de escaneo).
- `src/index.css` — tema Tailwind compartido con la app de ChessIA.

Las cifras de Turing (Elo ≈ 1808 con búsqueda, 1355 la red sola) son las medidas que publica la app en su ficha de Confianza; el Elo es relativo a Stockfish calibrado, no oficial.
