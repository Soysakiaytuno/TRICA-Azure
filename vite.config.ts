import { defineConfig } from 'vite';

export default defineConfig({
  // Le decimos a Vite que incluya los .hbs como archivos de assets estáticos
  assetsInclude: ['**/*.hbs'],
});