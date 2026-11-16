// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático. Español es el idioma principal (sin prefijo en la URL);
// la versión en inglés vivirá bajo /en/ cuando se active.
//
// Despliegue actual: GitHub Pages como "project site".
// Al pasar a un dominio propio: poner site: 'https://tudominio.com' y QUITAR `base`.
export default defineConfig({
  site: 'https://dampe6420.github.io',
  base: '/as-immigration-group-web',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
