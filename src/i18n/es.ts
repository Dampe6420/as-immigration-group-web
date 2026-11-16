import { site } from '../config/site';

const B = site.brand;

/**
 * Textos del sitio en español (idioma principal).
 * Los textos marcados con «literal» provienen del documento de lineamientos
 * (docs/lineamientos.md) y no deben reescribirse sin aprobación del cliente.
 */
export const es = {
  meta: {
    lang: 'es',
    title: `${B} | Preparación documental y gestión de trámites migratorios`,
    description: `${B}: preparación documental, envío y radicación de trámites migratorios, con atención en español para la comunidad latina en Estados Unidos. Facilidades de pago.`,
  },

  nav: {
    home: 'Inicio',
    about: 'Quiénes somos',
    services: 'Servicios',
    process: 'Cómo funciona',
    delivery: 'Expediente',
    payments: 'Pagos',
    faq: 'Preguntas',
    contact: 'Contacto',
    menu: 'Menú',
    close: 'Cerrar menú',
    skip: 'Saltar al contenido',
  },

  cta: {
    check: 'Consultar mi trámite',
    info: 'Solicitar información',
    payments: 'Conocer las facilidades de pago',
    whatsapp: 'Escríbenos por WhatsApp',
  },

  /** «literal» Sección 10 del documento. */
  disclaimer: {
    title: 'Aviso sobre el alcance de nuestros servicios',
    p1: `${B} presta servicios de apoyo administrativo, preparación documental y gestión de trámites migratorios. No somos abogados autorizados para ejercer en Estados Unidos, no brindamos asesoría jurídica ni representación legal ante USCIS, las Cortes de Inmigración, la BIA u otras autoridades.`,
    p2: 'Los trámites se presentan a nombre del cliente, con su revisión, firma y autorización cuando corresponda. No estamos afiliados al Gobierno de Estados Unidos. Las decisiones, citas y tiempos de respuesta dependen de las autoridades competentes.',
  },

  /** «literal» Sección 8 del documento. */
  paymentNotice: `En ${B} contamos con facilidades de pago. Consulta nuestras opciones de pago por cuotas y las condiciones disponibles para el trámite que necesitas.`,

  /** «literal» Sección 11 del documento. */
  hero: {
    eyebrow: 'Atención en español para la comunidad migrante latina en Estados Unidos',
    title: 'Tu trámite migratorio, organizado y presentado con atención en español.',
    lead: `En ${B} nos encargamos de la preparación documental, el envío y la radicación del trámite contratado. Tú nos proporcionas la información y los documentos requeridos; nosotros gestionamos su presentación y te entregamos copia completa del expediente con sus comprobantes.`,
    closing: 'Contamos con facilidades de pago. Contáctanos para conocer nuestros servicios.',
    highlights: [
      'Preparación y organización documental',
      'Envío y radicación del trámite contratado',
      'Copia completa del expediente y comprobantes',
    ],
  },

  about: {
    kicker: 'Quiénes somos',
    title: 'Apoyo administrativo cercano, ordenado y transparente',
    paragraphs: [
      `${B} ofrece servicios de apoyo administrativo, preparación documental, organización, envío y radicación de trámites migratorios.`,
      'Acompañamos a la comunidad migrante latina en Estados Unidos con atención en español, explicando cada paso del servicio contratado y entregando copia completa de lo presentado.',
      'No somos abogados autorizados para ejercer en Estados Unidos, no brindamos asesoría jurídica y no ofrecemos representación legal. Los trámites se presentan a nombre del cliente, con su revisión, firma y autorización cuando corresponda.',
    ],
    values: [
      { title: 'Claridad', text: 'Te explicamos qué incluye el servicio, qué documentos necesitamos y qué pasos te corresponden a ti.' },
      { title: 'Orden', text: 'Organizamos tu expediente y te entregamos una copia digital completa con sus comprobantes.' },
      { title: 'Cercanía', text: 'Atención en español y canales de contacto directos: WhatsApp, teléfono y correo.' },
    ],
  },

  services: {
    kicker: 'Servicios',
    title: 'Trámites en los que te apoyamos',
    intro: 'Cada servicio corresponde a apoyo administrativo y documental. El trámite se presenta a nombre del cliente, con su revisión, firma y autorización cuando corresponda.',
    groups: [
      {
        id: 'asilo',
        title: 'Asilo',
        items: [
          {
            id: 'asilo-afirmativo',
            title: 'Asilo afirmativo ante USCIS',
            paragraphs: [
              'Apoyo en la preparación y organización del expediente y asistencia para su presentación directamente en la plataforma de USCIS, cuando el caso permita la presentación electrónica, utilizando la cuenta personal del solicitante. El cliente conservará el acceso y control de su cuenta.',
              'El servicio incluye seguimiento a la notificación de la cita de biometría, cuya programación corresponde a USCIS, y entrega de copia digital completa del expediente presentado, con sus anexos y comprobantes disponibles.',
            ],
          },
          {
            id: 'asilo-defensivo',
            title: 'Asilo defensivo ante la Corte de Inmigración',
            paragraphs: [
              'Apoyo documental para la preparación, organización y presentación de la solicitud ante la corte correspondiente, con copia a la oficina de OPLA competente y la respectiva certificación de servicio, según el procedimiento aplicable.',
              'El cliente recibirá una copia digital completa del expediente presentado y de los comprobantes de envío, entrega y radicación disponibles.',
            ],
          },
        ],
      },
      {
        id: 'permisos',
        title: 'Permisos de trabajo por asilo pendiente, categoría (c)(8)',
        items: [
          {
            id: 'permiso-c8',
            title: 'Permiso de trabajo (c)(8) — solicitud inicial',
            paragraphs: [
              'Apoyo documental y administrativo para preparar, organizar y presentar la solicitud de autorización de empleo cuando se cumplan los requisitos correspondientes.',
              'Por regla general, la solicitud puede presentarse al completar 150 días computables del reloj de asilo, y la autorización no puede concederse antes de completar 180 días computables. No basta con contar los días calendario desde la presentación del asilo, pues pueden existir interrupciones o demoras que no se computen.',
              `El cliente deberá pagar las tarifas oficiales y los cargos adicionales que USCIS exija y tenga vigentes en la fecha de presentación. Estos pagos son independientes del trámite de asilo y de los honorarios de ${B} por la preparación y presentación de la solicitud.`,
            ],
          },
          {
            id: 'renovacion-c8',
            title: 'Renovación de permiso de trabajo (c)(8)',
            paragraphs: [
              'Apoyo documental y administrativo para preparar y presentar la renovación del permiso de trabajo por asilo pendiente, siempre que el cliente continúe cumpliendo los requisitos aplicables.',
              'Recomendamos iniciar la preparación con suficiente anticipación y presentar la renovación preferiblemente con 180 días de anticipación al vencimiento del permiso vigente, conforme a las instrucciones de USCIS aplicables al momento del trámite.',
              `El cliente deberá pagar la tarifa oficial de renovación y cualquier cargo adicional (fee) exigido por USCIS, según los valores vigentes en la fecha de presentación. Estos pagos son independientes de los honorarios de ${B}, que se informarán por separado.`,
            ],
          },
        ],
        note: `En ambos servicios, ${B} solicitará la información y los documentos necesarios, gestionará la preparación documental, el envío y la radicación contratados, y entregará al cliente copia completa del expediente presentado, con los comprobantes de envío y los recibos oficiales disponibles.`,
      },
      {
        id: 'mociones',
        title: 'Mociones legales a nombre propio y apoyo documental para solicitudes',
        items: [
          {
            id: 'reloj-asilo',
            title: 'Reloj de asilo',
            paragraphs: ['Solicitudes relacionadas con la activación, reanudación o corrección del reloj de asilo, cuando correspondan.'],
          },
          {
            id: 'cambio-sede',
            title: 'Cambio de sede de la Corte de Inmigración',
            paragraphs: ['Solicitudes de cambio de sede de la Corte de Inmigración por traslado de residencia a otro estado o jurisdicción.'],
          },
          {
            id: 'domicilio-uscis',
            title: 'Cambio de domicilio ante USCIS',
            paragraphs: ['Apoyo documental para informar el cambio de domicilio ante USCIS.'],
          },
          {
            id: 'domicilio-corte',
            title: 'Cambio de domicilio ante la Corte de Inmigración',
            paragraphs: ['Cambios de domicilio ante la Corte de Inmigración, con copia a OPLA y certificación de servicio cuando corresponda.'],
          },
        ],
        note: 'Importante: el cambio de domicilio y la solicitud de cambio de sede de la corte son trámites diferentes, y su presentación no garantiza que la autoridad apruebe lo solicitado.',
      },
      {
        id: 'apelaciones',
        title: 'Apelaciones a nombre propio (pro se)',
        items: [
          {
            id: 'apelacion-bia',
            title: 'Apelaciones ante la Junta de Apelaciones de Inmigración (BIA)',
            paragraphs: [
              'Apoyo administrativo y documental para la presentación de apelaciones a nombre propio del cliente ante la Junta de Apelaciones de Inmigración "BIA", cuando corresponda.',
              `El cliente presenta la apelación en nombre propio y firma como solicitante. ${B} se encarga de la gestión documental, organización, envío y radicación contratados, sin actuar como abogado ni representante legal y sin ofrecer asesoría jurídica o elaboración de argumentos legales.`,
              'La identificación de quienes intervengan como preparadores se incluirá cuando el formulario o procedimiento lo requiera.',
            ],
          },
        ],
      },
    ],
  },

  process: {
    kicker: 'Cómo funciona',
    title: 'Cómo funciona nuestro servicio',
    intro: `${B} se encarga de la preparación documental, presentación, envío, entrega y radicación del trámite contratado, para que no tengas que gestionar por tu cuenta esos pasos.`,
    steps: [
      { title: 'Contacto inicial', text: 'Nos indicas qué trámite necesitas.' },
      { title: 'Solicitud de información', text: 'Según el servicio contratado, solicitamos los documentos y la información necesarios para preparar el expediente.' },
      { title: 'Preparación documental', text: 'Organizamos la documentación y diligenciamos los formularios con la información que nos proporcionas, dentro del alcance administrativo del servicio.' },
      { title: 'Revisión y firma', text: 'Revisas la información, confirmas su veracidad y firmas o autorizas lo que corresponda.' },
      { title: 'Presentación y radicación', text: 'Gestionamos el envío, la entrega y la radicación de la documentación contratada mediante los canales habilitados por la autoridad.' },
      { title: 'Entrega del expediente', text: 'Te proporcionamos copia completa de lo presentado y los comprobantes correspondientes.' },
    ],
    clientRoleTitle: 'Lo que sigue siendo tu responsabilidad',
    clientRole: 'Nuestro servicio no sustituye tus actuaciones personales: aportar información veraz, revisar y firmar documentos, realizar las confirmaciones personales exigidas por las plataformas y asistir a biometría, entrevistas, citas o audiencias.',
  },

  delivery: {
    kicker: 'Entrega del expediente',
    title: 'Copia completa de tu expediente y comprobantes',
    intro: 'Cada cliente recibe una copia digital completa del expediente presentado, que incluye, según el trámite:',
    items: [
      'Formularios y solicitudes.',
      'Anexos y documentos de soporte.',
      'Pruebas aportadas por el cliente.',
      'Copias de las comunicaciones presentadas.',
      'Certificaciones de servicio.',
      'Comprobantes de envío y entrega.',
      'Recibos o constancias oficiales de radicación, cuando sean emitidos y estén disponibles.',
    ],
    diffTitle: 'Comprobante de envío ≠ recibo oficial',
    diff: [
      { title: 'Comprobante de envío y entrega', text: 'Demuestra que la documentación fue enviada o entregada. Te lo entregamos una vez se realiza el envío.' },
      { title: 'Recibo oficial de aceptación o radicación', text: 'Lo emite la autoridad competente, en sus propios tiempos. Te lo entregamos cuando sea emitido y esté disponible; no depende de nosotros.' },
    ],
  },

  payments: {
    kicker: 'Facilidades de pago',
    title: 'Opciones de pago por cuotas',
    breakdownTitle: 'Qué costos pueden aplicar',
    breakdown: [
      { title: 'Honorarios de ' + B, text: 'Por la preparación documental, el envío y la radicación del servicio contratado. Pueden pagarse con nuestras facilidades de pago.' },
      { title: 'Tarifas oficiales', text: 'Las que exija la autoridad (por ejemplo, USCIS) según los valores vigentes en la fecha de presentación. Son independientes de nuestros honorarios.' },
      { title: 'Gastos de envío y otros costos', text: 'Costos de envío o entrega y otros que puedan aplicar según el trámite.' },
    ],
    pending: 'Los valores se publicarán cuando estén definidos. Mientras tanto, contáctanos para conocer las condiciones del trámite que necesitas.',
  },

  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas',
    items: [
      {
        q: '¿Son abogados?',
        a: 'No. No somos abogados autorizados para ejercer en Estados Unidos, no brindamos asesoría jurídica ni representación legal. Prestamos servicios de apoyo administrativo, preparación documental y gestión de trámites migratorios.',
      },
      {
        q: '¿A nombre de quién se presenta el trámite?',
        a: 'A nombre del cliente. Tú revisas la información, confirmas su veracidad y firmas o autorizas lo que corresponda. En el asilo afirmativo presentado en línea se usa tu cuenta personal de USCIS, y tú conservas el acceso y control de esa cuenta.',
      },
      {
        q: '¿Pueden asegurar que mi solicitud será aprobada?',
        a: 'No. Las decisiones, citas y tiempos de respuesta dependen de las autoridades competentes. La presentación de una solicitud no garantiza que la autoridad apruebe lo solicitado.',
      },
      {
        q: '¿Qué recibo cuando se presenta mi trámite?',
        a: 'Una copia digital completa del expediente presentado con sus comprobantes de envío y entrega. Los recibos o constancias oficiales de radicación los emite la autoridad; te los entregamos cuando sean emitidos y estén disponibles.',
      },
      {
        q: '¿Cuándo puedo solicitar el permiso de trabajo (c)(8)?',
        a: 'Por regla general, la solicitud puede presentarse al completar 150 días computables del reloj de asilo, y la autorización no puede concederse antes de completar 180 días computables. No basta con contar los días calendario, pues pueden existir interrupciones o demoras que no se computen.',
      },
      {
        q: '¿Las tarifas de USCIS están incluidas en sus honorarios?',
        a: 'No. Las tarifas oficiales y cargos adicionales que exija la autoridad son independientes de nuestros honorarios, y se pagan según los valores vigentes en la fecha de presentación. También pueden aplicar gastos de envío u otros costos.',
      },
      {
        q: '¿Tengo que asistir a citas o audiencias?',
        a: 'Sí. Nuestro servicio no sustituye tus actuaciones personales: asistir a biometría, entrevistas, citas o audiencias, y realizar las confirmaciones personales exigidas por las plataformas.',
      },
      {
        q: '¿El cambio de domicilio y el cambio de sede de la corte son lo mismo?',
        a: 'No. Son trámites diferentes, y su presentación no garantiza que la autoridad apruebe lo solicitado.',
      },
      {
        q: '¿Puedo pagar en cuotas?',
        a: `Sí. En ${B} contamos con facilidades de pago. Contáctanos para conocer las opciones y condiciones disponibles para el trámite que necesitas.`,
      },
      {
        q: '¿Por qué el formulario pide tan pocos datos?',
        a: 'Para el contacto inicial solo necesitamos tu nombre, teléfono, correo y el servicio de interés. La documentación y la información sensible se solicitan posteriormente por un canal adecuado para su recepción.',
      },
    ],
  },

  contact: {
    kicker: 'Contacto',
    title: 'Cuéntanos qué trámite necesitas',
    intro: 'Escríbenos por el canal que prefieras. Te responderemos en español.',
    channels: {
      whatsapp: 'WhatsApp',
      phone: 'Teléfono',
      email: 'Correo',
    },
    form: {
      title: 'Formulario de contacto inicial',
      name: 'Nombre completo',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      service: 'Servicio de interés',
      servicePlaceholder: 'Selecciona un servicio',
      serviceOther: 'Otro / no estoy seguro',
      submit: 'Solicitar información',
      privacyNote: 'No envíes documentos ni información sensible por este formulario. Los solicitaremos después por un canal adecuado. Al enviar aceptas nuestra',
      privacyLink: 'política de privacidad',
      sent: 'Abrimos WhatsApp con tu solicitud. Si no se abrió, escríbenos directamente.',
      messageIntro: 'Hola, quiero solicitar información.',
    },
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Condiciones del servicio',
  },
};

export type Dict = typeof es;
