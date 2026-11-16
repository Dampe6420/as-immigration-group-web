// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático. Español es el idioma principal (sin prefijo en la URL);
// la versión en inglés vivirá bajo /en/ cuando se active.
export default defineConfig({
  // TODO: reemplazar por el dominio definitivo (ver DUDAS.md)
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
