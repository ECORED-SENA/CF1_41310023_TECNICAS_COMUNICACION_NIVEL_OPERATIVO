export default {
  global: {
    componenteFormativo: 'Relaciones humanas',
    descripcionCurso:
      'Las relaciones humanas son esenciales para el desarrollo individual y social. En las empresas, mantener buenas relaciones mejora la productividad y el ambiente laboral. La comunicación efectiva y la gestión adecuada de conflictos son claves para fortalecer estos vínculos. La afectividad en la comunicación facilita relaciones más duraderas y contribuye al crecimiento personal y colectivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
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
        titulo: '¿Qué son las relaciones humanas?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Relaciones humanas en la empresa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de relaciones humanas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Claves para tener en cuenta en las relaciones humanas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'La comunicación afectiva en las relaciones humanas',
            hash: 't_1_4',
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
      tema: '¿Qué son las relaciones humanas?',
      referencia:
        'Aprendemos Juntos 2030. (2021). El valor de las relaciones humanas. Keith Ferrazzi, escritor y coach. [Archivo de video] Youtube.  ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=3WFQMj_TAWc ',
    },
    {
      tema: 'Relaciones humanas en la empresa',
      referencia:
        'Barnetche, M. (2019, marzo 6). <i>Importancia del respeto en las relaciones humanas</i> [Audio podcast]. En Crecimiento Personal.',
      tipo: 'Podcast ',
      link: 'https://music.youtube.com/watch?v=kEfwzVGBnoI ',
    },
    {
      tema: 'Tipos de relaciones humanas',
      referencia: 'Santillana. (2021). Las relaciones humanas. ',
      tipo: 'Documento',
      link:
        'https://edupack.santillana.com/edugfiles/v2/resources/5573/Valores8.pdf',
    },
    {
      tema: 'Claves para tener en cuenta en las relaciones humanas',
      referencia:
        'TEDx Talks (2016). La habilidad en relaciones humanas | Javier Valbuena | TEDxGranVía. Keith Ferrazzi, escritor y coach. [Archivo de video] Youtube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=hGwkx59_tVE ',
    },
    {
      tema: 'La comunicación afectiva en las relaciones humanas',
      referencia:
        'TEDx Talks (2016). Comunicación efectiva, ¿cuál es el secreto? | Jordi Gràcia | TEDxIgualada [Archivo de video] Youtube.  ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=t-ULWDQ2t8c ',
    },
  ],
  glosario: [
    {
      termino: 'Afectividad',
      significado:
        'capacidad de reacción de un sujeto ante los estímulos externos o internos, manifestada principalmente en sentimientos y emociones.',
    },
    {
      termino: 'Armonía',
      significado:
        'conveniente proporción y correspondencia entre diferentes elementos.',
    },
    {
      termino: 'Comunicación',
      significado: 'acción y resultado de comunicar o comunicarse.',
    },
    {
      termino: 'Conducta',
      significado:
        'manera de comportarse o reaccionar una persona ante situaciones externas.',
    },
    {
      termino: 'Empatía',
      significado:
        'sentimiento de participación afectiva en la realidad que afecta a otra persona.',
    },
    {
      termino: '<i>Feedback</i>',
      significado:
        'retroalimentación; conjunto de reacciones o respuestas de un receptor que son consideradas por el emisor para ajustar o modificar su mensaje.',
    },
    {
      termino: 'Interactuar',
      significado:
        'ejercer una interacción o relación recíproca, especialmente entre un ordenador y el usuario.',
    },
    {
      termino: 'Intrínseco',
      significado: 'característico, esencial.',
    },
    {
      termino: 'Relación',
      significado: 'conexión o correspondencia entre dos o más cosas.',
    },
    {
      termino: 'Vínculo',
      significado: 'lo que ata, une o relaciona a las personas o cosas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Equipo de redacción (2017). Tipo de relaciones humanas. Revista educativa MasTiposde. ',
    },
    {
      referencia:
        'Fernández, A. (2011). Cuadro comparativo entre relaciones públicas, relaciones humanas y relaciones industriales. Universidad Fermín Toro.',
      link:
        'https://es.slideshare.net/alejandrofernandezg/cuadros-comparativos-relaciones-pblicas-relaciones-humanas-relaciones-industriales',
    },
    {
      referencia:
        'Ibinarriaga, A. (2004). Cómo Construir las Relaciones Humanas en el Trabajo: 7 Tips. ',
    },
    {
      referencia:
        'Pérez, J. y Gardey, A. (2008). Definición de: Concepto de relaciones humanas.',
      link: 'https://definicion.de/relaciones-humanas/',
    },
    {
      referencia:
        'Rodríguez, D. (2013). Importancia de las Relaciones Humanas.',
      link:
        'http://paracurarelalma.blogspot.com.co/2013/04/importancia-de-las-relaciones-humanas.html',
    },
    {
      referencia:
        'RRHH-web.com. (2006). Relaciones humanas en la empresa (que son y su importancia en el trabajo.',
      link: 'http://www.rrhh-web.com/relaciones_humanas_y_los_rrhh.html',
    },
    {
      referencia: 'Valadés, C. (2014). Comunicación afectiva.',
      link: 'http://comunicacion-afectiva-efectiva.blogspot.com.co/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Salomé Ortiz Moreno',
          cargo: 'Experta temática',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - CEDEAGRO - Regional Boyacá',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
