import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

export default getViteConfig({
  // Obtenemos la configuración de Vite de Astro para que Vitest entienda .astro

  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    dir: 'src/tests',

    // Habilita las APIs globales de Vitest (expect, it, describe, etc.).
    // Esto es necesario para que librerías como @testing-library/jest-dom,
    // que esperan que 'expect' exista globalmente, funcionen correctamente.
    globals: true,

    // EXCLUIR PATRONES DE PRUEBA
    // Le decimos a Vitest que ignore explícitamente ciertos directorios.
    // Esto es crucial para evitar que intente ejecutar las pruebas E2E de Playwright.
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      // Excluir la carpeta de pruebas de Playwright
      'tests/e2e/**',
    ],
  },

  // Se añade explícitamente la configuración de alias para Vitest.
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
});
