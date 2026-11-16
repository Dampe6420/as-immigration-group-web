/**
 * Datos centrales del sitio. Todo lo que dependa del negocio (marca, contacto,
 * destino del formulario) se cambia aquí y solo aquí.
 *
 * ⚠️ Los datos de contacto son PLACEHOLDERS evidentes. Ver DUDAS.md.
 */
export const site = {
  /** Nombre comercial. El PDF usa variantes; se toma la del logo (ver DUDAS.md). */
  brand: 'AS Immigration Group',
  /** Nombre que aparece en el logo bajo la marca. */
  owner: 'Adriana Sosa',
  tagline: 'Immigration Services',

  contact: {
    /** Teléfono como se muestra al público. */
    phoneDisplay: '+1 (000) 000-0000',
    /** Teléfono para enlaces tel: (solo dígitos y +). */
    phoneHref: '+10000000000',
    /** Número de WhatsApp en formato internacional, solo dígitos. */
    whatsapp: '10000000000',
    email: 'contacto@example.com',
    /** Horario de atención (placeholder). */
    hours: 'Lunes a viernes · Horario por confirmar',
  },

  form: {
    /**
     * Destino del formulario de contacto inicial.
     * - 'whatsapp': arma un mensaje con los 4 datos y abre WhatsApp (sin backend).
     * Pendiente decidir un destino definitivo (ver DUDAS.md).
     */
    mode: 'whatsapp' as const,
  },

  i18n: {
    /** Mostrar el selector de idioma cuando la versión en inglés esté lista. */
    showLanguageSwitcher: false,
  },
};

/**
 * Antepone el `base` de Astro (p. ej. /as-immigration-group-web en GitHub Pages)
 * a una ruta interna. Usar siempre para enlaces y recursos que empiezan con "/".
 * Con dominio propio el base es "/" y esto no cambia nada.
 */
export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
};

export const whatsappLink =(text?: string) =>
  `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
