import { es, type Dict } from './es';
import { en } from './en';

export type Locale = 'es' | 'en';

const dictionaries: Record<Locale, Dict | null> = { es, en };

/** Devuelve los textos del idioma pedido; si aún no existe, usa español. */
export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? es;
}

/** Rutas de las páginas legales por idioma. */
export const routes: Record<Locale, { home: string; privacy: string; terms: string }> = {
  es: { home: '/', privacy: '/privacidad/', terms: '/condiciones/' },
  en: { home: '/en/', privacy: '/en/privacy/', terms: '/en/terms/' },
};
