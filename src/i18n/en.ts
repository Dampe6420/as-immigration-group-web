import type { Dict } from './es';

/**
 * Versión en inglés — PENDIENTE.
 *
 * Para activarla:
 * 1. Reemplazar `null` por un objeto con la misma forma que `es` (el tipo `Dict` lo exige).
 * 2. Crear src/pages/en/index.astro, en/privacy.astro y en/terms.astro (igual que las de español, con locale="en").
 * 3. Poner `site.i18n.showLanguageSwitcher = true` en src/config/site.ts.
 */
export const en: Dict | null = null;
