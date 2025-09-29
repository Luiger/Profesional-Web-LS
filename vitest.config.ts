// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  // Obtenemos la configuración de Vite de Astro para que Vitest entienda .astro
  ...getViteConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      dir: 'src/tests',
    },
  }),

  // --- ¡AQUÍ ESTÁ LA SOLUCIÓN! ---
  // Añadimos explícitamente la configuración de alias para Vitest.
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
});
