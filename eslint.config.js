import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginAstro from 'eslint-plugin-astro';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  // Configuración global recomendada por typescript-eslint
  ...tseslint.configs.recommended,

  // Configuración para archivos Astro
  ...pluginAstro.configs['flat/recommended'],

  // Configuración para accesibilidad en JSX
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    // Aplicar solo a archivos que contienen JSX
    files: ['**/*.{jsx,tsx,astro}'],
  },

  // Configuración personalizada para todo el proyecto
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // Configuración específica para archivos de prueba (Playwright y Jest)
  {
    files: ['tests/**/*.{ts,tsx}', 'src/tests/**/*.{ts,tsx}'],
    rules: {
      // Desactivamos esta regla para los archivos de prueba
      '@typescript-eslint/no-explicit-any': 'off',
      // También es buena idea desactivar reglas de accesibilidad en los tests
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },

  // Configuración específica para archivos fuera de src (como archivos de config)
  {
    ignores: ['dist', '.astro', 'src/env.d.ts'],
    files: ['*.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
