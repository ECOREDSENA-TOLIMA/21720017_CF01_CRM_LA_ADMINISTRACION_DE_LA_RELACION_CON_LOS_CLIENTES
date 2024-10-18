export default {
  global: {
    componenteFormativo: 'Esto es un CRM',
    descripcionCurso:
      'La presentación de los sistemas de tipo CRM se da desde el uso de una base de datos para saber y conocer intereses de los clientes hasta la predicción de necesidades por parte de los usuarios, gracias al estudio de los datos y las tendencias de comportamiento y compra con una metodología específica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción al CRM',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Historia del CRM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Orígenes del CRM (década de 1980)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Consolidación y expansión (1990-1999)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Transformación digital y sistematización (2000-2010)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Era del social CRM y movilidad (2010-Presente)',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de CRM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'CRM colaborativo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'CRM operacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'CRM analítico',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Ejemplos de uso de cada tipo de CRM en el mercado colombiano',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'CRM como estrategia de negocios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fases del CRM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fase 1: adquisición de nuevos clientes',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fase 2: aumento de ventas con clientes actuales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Fase 3: fidelización del cliente',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Integración de las fases en la estrategia general de CRM',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.	Introducción al CRM',
      referencia:
        'Pensamiento de Color (2016). ¿Qué es CRM? - Infografías Animadas. https://www.youtube.com/watch?v=55fCi7FCN8w',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=55fCi7FCN8w',
    },
    {
      tema: '4. CRM como estrategia de negocios',
      referencia:
        'TEDx Talks (2022). Entendiendo al cliente. User Experience y Psicología | Blanca B. | TEDxUC3MLive. https://www.youtube.com/watch?v=WYbh60FijSM ',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=WYbh60FijSM',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de comportamiento',
      significado:
        'estudio de las interacciones y preferencias de los usuarios en plataformas digitales para identificar patrones de comportamiento y segmentar a los clientes de manera más precisa.',
    },
    {
      termino: 'Análisis de mercado',
      significado:
        'evaluación detallada de la competencia, identificación de oportunidades de mercado y comprensión de las tendencias del sector para tomar decisiones informadas.',
    },
    {
      termino: 'Ciclo de Vida del Producto (CVP)',
      significado:
        'etapas por las que pasa un producto desde su introducción en el mercado hasta su declive, cada una requiriendo estrategias específicas de marketing, producción y gestión.',
    },
    {
      termino: 'Cliente Ideal (<em>Buyer</em> Persona)',
      significado:
        'representación semi-ficticia del cliente que mejor se ajusta a los productos o servicios ofrecidos por una empresa, basada en datos demográficos, psicográficos y comportamentales.',
    },
    {
      termino: 'Datos demográficos',
      significado:
        'etapas por las que pasa un producto desde su introducción en el mercado hasta su declive, cada una requiriendo estrategias específicas de marketing, producción y gestión.',
    },
    {
      termino: 'Datos psicográficos',
      significado:
        'información sobre los intereses, valores, estilos de vida, actitudes y personalidad de los clientes, utilizada para una segmentación más profunda y detallada.',
    },
    {
      termino: 'Estrategias de fidelización',
      significado:
        'técnicas y acciones dirigidas a mantener a los clientes actuales comprometidos y satisfechos, incentivando su lealtad a largo plazo mediante programas de recompensas y personalización de la oferta.',
    },
    {
      termino: 'Personalización',
      significado:
        'adaptación de productos, servicios y campañas de marketing para satisfacer las necesidades y preferencias individuales de los clientes, mejorando la experiencia del cliente y aumentando la lealtad.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'medidas legales y técnicas para garantizar la privacidad y seguridad de la información personal recopilada por las empresas, evitando el uso indebido y el acceso no autorizado.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'proceso de dividir un mercado heterogéneo en grupos más pequeños y homogéneos que comparten características similares, permitiendo a las empresas adaptar sus estrategias de marketing y ventas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boulding, W., Staelin, R., Ehret, M., & Johnston, W. J. (2019). A customer relationship management roadmap: What is known, potential pitfalls, and where to go. Journal of Marketing, 83(4), 155-176. ',
      link:
        'https://www.researchgate.net/publication/228352516_A_Customer_Relationship_Management_Roadmap_What_Is_Known_Potential_Pitfalls_and_Where_to_Go',
    },
    {
      referencia:
        'Buttle, F. (2019). Customer Relationship Management: Concepts and Technologies. Routledge.',
    },
    {
      referencia:
        'Buttle, F., & Maklan, S. (2019). Customer relationship management: Concepts and technologies (4th ed.). Routledge.',
    },
    {
      referencia:
        'Choudhury, M. M., & Harrigan, P. (2019). CRM to social CRM: The integration of new technologies into customer relationship management. Journal of Strategic Marketing, 27(7), 567-581.',
      link:
        'https://www.researchgate.net/publication/263725475_CRM_to_social_CRM_the_integration_of_new_technologies_into_customer_relationship_management',
    },
    {
      referencia:
        'Finnegan, D. J., & Willcocks, L. P. (2020). Implementing CRM: From Technology to Knowledge. Wiley.',
    },
    {
      referencia:
        'Harrigan, P., Miles, M. P., Fang, Y., & Roy, S. K. (2020). The role of social media in the engagement and information processes of social CRM. International Journal of Information Management, 54, 102151. ',
      link: 'https://doi.org/10.1016/j.ijinfomgt.2020.102151',
    },
    {
      referencia:
        'Kumar, V., & Reinartz, W. (2018). Customer relationship management: Concept, strategy, and tools (3rd ed.). Springer.',
    },
    {
      referencia:
        'Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69-96.',
      link: 'https://doi.org/10.1509/jm.15.0420',
    },
    {
      referencia:
        'Nguyen, B., & Mutum, D. S. (2018). A review of customer relationship management: Successes, advances, pitfalls and futures. Business Process Management Journal, 24(3), 567-588. ',
      link:
        'https://www.researchgate.net/publication/235409521_A_Review_of_Customer_Relationship_Management_Successes_Advances_Pitfalls_and_Futures',
    },
    {
      referencia:
        'Payne, A., & Frow, P. (2021). Strategic Customer Management: Integrating Relationship Marketing and CRM. Cambridge University Press.',
    },
    {
      referencia:
        'Payne, A., & Frow, P. (2021). Strategic customer management: Integrating relationship marketing and CRM (2nd ed.). Cambridge University Press.',
    },
    {
      referencia:
        'Peppers, D., & Rogers, M. (2017). Managing Customer Relationships: A Strategic Framework. Wiley.',
    },
    {
      referencia:
        'Sallenave, J. P. (2019). La planificación estratégica en las organizaciones modernas. Editorial Universitaria.',
    },
    {
      referencia:
        'Stone, M., & Woodcock, N. (2019). Interactive, direct and digital marketing: A future that depends on better use of business intelligence. Journal of Research in Interactive Marketing, 13(4), 482-497.',
      link:
        'https://www.academia.edu/24808829/Interactive_direct_and_digital_marketing_A_future_that_depends_on_better_use_of_business_intelligence',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lisseth Tatiana Molano Camacho',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Asesor pedagógica',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Claudia Marcela Gamboa Durán',
          cargo: 'Guionistas de la Línea de Producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Guionistas de la Línea de Producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador full stack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
