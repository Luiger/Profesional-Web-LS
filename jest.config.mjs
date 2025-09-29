/** @type {import('jest').Config} */
export default {
  // Usa el preset oficial de Astro para manejar archivos .astro, TS, etc.
  preset: 'astro/jest',

  // Indica a Jest que ejecute nuestro archivo de setup antes de cada prueba.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Fija el entorno de prueba a 'jsdom' para simular un navegador.
  testEnvironment: 'jest-environment-jsdom',

  // Mapea los alias de importación para que Jest los entienda.
  moduleNameMapper: {
    // Alias para '@/...' -> 'src/...'
    '^@/(.*)$': '<rootDir>/src/$1',

    // Mock para archivos de estilos (CSS, SCSS, etc.)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};