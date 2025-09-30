// tests/index.spec.ts
import { test, expect } from '@playwright/test';
import { describe } from 'vitest';

// 'describe' agrupa pruebas relacionadas. Es bueno para la organización.
describe('Homepage', () => {
  // 'test' define un caso de prueba individual.
  test('should have the correct title', async ({ page }) => {
    // 1. Navega a la URL raíz del servidor de prueba.
    await page.goto('/');

    // 2. Crea una aserción. Espera que la página tenga un título
    //    que contenga la palabra "Luiger Santana".
    //    ¡Asegúrate de cambiar esto al título que usarás en tu página!
    await expect(page).toHaveTitle(/Luiger Santana/);
  });

  test('should have a visible h1 heading', async ({ page }) => {
    // 1. Navega a la URL raíz.
    await page.goto('/');

    // 2. Busca un elemento h1 en la página.
    const heading = page.getByRole('heading', { level: 1 });

    // 3. Espera que ese encabezado sea visible para el usuario.
    await expect(heading).toBeVisible();
  });
});
