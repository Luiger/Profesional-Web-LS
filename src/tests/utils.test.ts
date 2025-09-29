// src/tests/utils.test.ts

import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils'; // Importamos la función a probar usando el alias

// 'describe' agrupa una serie de pruebas relacionadas bajo un mismo título.
describe('cn utility function', () => {
  // 'it' (o 'test') define un caso de prueba individual.
  // La descripción debe explicar qué es lo que se espera que haga la prueba.
  it('should merge classes from multiple arguments', () => {
    const result = cn('hello', 'world');
    expect(result).toBe('hello world');
  });

  it('should handle conditional classes correctly', () => {
    const isActive = true;
    const hasError = false;
    const result = cn('base-class', isActive && 'active', hasError && 'error');
    expect(result).toBe('base-class active');
  });

  it('should override conflicting Tailwind classes', () => {
    // tailwind-merge (la librería que usa 'cn') debe resolver conflictos.
    // La última clase de un mismo tipo (ej. padding) debe ganar.
    const result = cn('p-4', 'p-2');
    expect(result).toBe('p-2');
  });

  it('should handle complex arrays and nested conditionals', () => {
    const result = cn('font-bold', ['text-red-500', { 'bg-blue-500': true }]);
    expect(result).toBe('font-bold text-red-500 bg-blue-500');
  });

  it('should ignore null, undefined, and false values', () => {
    const result = cn('class-a', null, 'class-b', undefined, false, 'class-c');
    expect(result).toBe('class-a class-b class-c');
  });
});
