# AS Immigration Group — sitio web

Sitio informativo de servicios de apoyo administrativo y preparación documental para trámites migratorios, dirigido a la comunidad latina en Estados Unidos.

- **Lineamientos del cliente:** [`docs/lineamientos.md`](docs/lineamientos.md) (convertido del PDF original en `docs/`).

## Stack

- [Astro](https://astro.build) 7 — sitio 100 % estático, sin framework de UI.
- CSS propio (sin dependencias), fuentes Cormorant Garamond + Lato (Google Fonts).
- i18n: español por defecto en `/`, inglés preparado bajo `/en/` (pendiente).

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Estructura

```
src/
  config/site.ts          ← marca, contacto, destino del formulario (editar aquí)
  i18n/es.ts              ← TODOS los textos en español
  i18n/en.ts              ← versión en inglés (pendiente)
  layouts/Base.astro      ← <head>, header, footer, botón de WhatsApp
  components/
    Disclaimer.astro      ← aviso de alcance (footer, servicios, cómo funciona)
    PaymentNotice.astro   ← mensaje de facilidades de pago (inicio, servicios)
    sections/*.astro      ← secciones de la página de inicio
  pages/
    index.astro           ← inicio (una sola página con anclas)
    privacidad.astro      ← borrador
    condiciones.astro     ← borrador
```

## Reglas de contenido (no romper al iterar)

Vienen de los lineamientos:

1. El **aviso de alcance** (§10) debe verse en el pie de página, en servicios y en la sección de contratación.
2. El **mensaje de facilidades de pago** (§8) debe destacarse en el inicio y en servicios.
3. El **formulario** pide solo nombre, teléfono, correo y servicio de interés.
4. Los **honorarios** deben distinguirse de las tarifas oficiales y de los gastos de envío. No se publican precios hasta que estén definidos.
5. El **comprobante de envío** es distinto del **recibo oficial**. Nunca se promete un recibo de la autoridad.
6. Evitar términos que sugieran práctica legal ("asesoría", salvo para negarla; "notario"; "garantizado"; "expertos legales").
