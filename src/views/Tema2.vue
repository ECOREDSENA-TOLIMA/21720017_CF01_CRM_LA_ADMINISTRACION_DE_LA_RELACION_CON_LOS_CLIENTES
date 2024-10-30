<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Historia del CRM

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='')

    p.mb-5(data-aos="fade-down-right") La Gestión de la Relación con el Cliente (CRM) ha experimentado una evolución significativa desde sus inicios hasta convertirse en una estrategia fundamental para las organizaciones modernas. Su desarrollo ha estado influenciado por avances tecnológicos, cambios en las dinámicas de mercado y una creciente comprensión de la importancia del cliente en el éxito empresarial. A continuación, se presenta un recorrido histórico detallado que ilustra los momentos clave en la evolución del CRM, acompañado de una línea de tiempo que destaca los hitos más relevantes.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Orígenes del CRM (década de 1980)

    p.mb-5(data-aos="fade-down-right") La década de 1980 marca el inicio de las prácticas que posteriormente se consolidarían como CRM. Durante este período, las empresas comenzaron a reconocer la importancia de gestionar y analizar la información de sus clientes para mejorar las ventas y el servicio.

    //- PasosA debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    PasosA.color-acento-contenido.mb-5(tipo="l")
      div(data-aos="fade-left")
        h3 <em>Marketing</em> de bases de datos
        p Surgió el concepto de <em>marketing</em> basado en bases de datos, donde las empresas recopilaban y almacenaban información sobre los clientes para segmentar mercados y personalizar ofertas (Boulding et al., 2019). Este enfoque permitió una comunicación más dirigida y efectiva con los clientes, aunque de manera limitada debido a las restricciones tecnológicas de la época.

      div(data-aos="fade-right")
        h3 Masificación del uso de computadoras 
        p El aumento en la accesibilidad y uso de computadoras en las organizaciones facilitó la gestión y procesamiento de grandes volúmenes de datos. Las empresas empezaron a utilizar sistemas informáticos básicos para almacenar y manejar información de contacto y transacciones de clientes, sentando las bases para sistemas más sofisticados en el futuro.

      div(data-aos="fade-left")
        h3 Sistemas básicos de gestión de contactos
        p Se desarrollaron las primeras aplicaciones destinadas a gestionar la información de los clientes, conocidas como sistemas de Gestión de la Información de #[i Marketing] (MIS). Estos sistemas permitían a las empresas organizar y acceder a datos de clientes de manera más eficiente, mejorando la capacidad de seguimiento y comunicación (Payne & Frow, 2021).
    
    Separador
    
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Consolidación y expansión (1990-1999)

    p.mb-5(data-aos="fade-left") La década de 1980 marca el inicio de las prácticas que posteriormente se consolidarían como CRM. Durante este período, las empresas comenzaron a reconocer la importancia de gestionar y analizar la información de sus clientes para mejorar las ventas y el servicio.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-right")
      .row(titulo="Emergencia de los call centers y contact centers")
        .col-lg-6.order-lg-1.order-2
          p La década de 1990 vio la proliferación de #[i call centers y contact centers] como canales esenciales para la interacción con los clientes. Estas plataformas permitieron a las empresas manejar grandes volúmenes de consultas y soporte de manera más eficiente, mejorando la experiencia del cliente y consolidando relaciones más sólidas (Stone & Woodcock, 2019). 

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-05.png', alt='Texto que describa la imagen')

      .row(titulo="Automatización de la fuerza de ventas (SFA)")
        .col-lg-6.order-lg-1.order-2
          p Se introdujeron sistemas de SFA que automatizaban tareas de ventas como el seguimiento de clientes potenciales, la gestión de cotizaciones y la generación de informes de ventas. Estos sistemas aumentaron la productividad y eficacia de los equipos de ventas al proporcionar herramientas para gestionar el proceso de venta de manera más estructurada y eficiente (Buttle & Maklan, 2019).

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-06.png', alt='Texto que describa la imagen')

      .row(titulo="Sistemas de soporte y servicio al cliente (CSS)")
        .col-lg-6.order-lg-1.order-2
          p Junto con la SFA, surgieron sistemas de CSS diseñados para mejorar el servicio posventa y el soporte al cliente. Estos sistemas centralizaban la información de interacciones con clientes, facilitando una respuesta más rápida y personalizada a consultas y problemas, lo que contribuyó a mejorar la satisfacción y retención de clientes.

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-07.png', alt='Texto que describa la imagen')

      .row(titulo="Integración y problemas de datos")
        .col-lg-6.order-lg-1.order-2
          p A pesar de los avances, las empresas enfrentaron desafíos significativos en la integración de diferentes sistemas y en la calidad de los datos recopilados. La falta de interoperabilidad entre sistemas de SFA, CSS y otras aplicaciones condujo a silos de información que dificultaban una visión integral del cliente. Estos problemas resaltaron la necesidad de soluciones más integradas y coherentes en la gestión de la información del cliente (Nguyen & Mutum, 2018).

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-08.png', alt='Texto que describa la imagen')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3. Transformación digital y sistematización (2000-2010)

    p.mb-5(data-aos="fade-down-right") El advenimiento del nuevo milenio trajo consigo una transformación digital que revolucionó las prácticas de CRM, integrando tecnologías más avanzadas y enfoques más estratégicos.

    LineaTiempoE.color-acento-contenido.mb-5.px-md-5.px-4
      .row.justify-content-center.align-items-center(titulo="Implementación de sistemas ERP" subtitulo="")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-left")
          p Las empresas comenzaron a adoptar sistemas de planificación de recursos empresariales (ERP) que integraban múltiples funciones organizacionales, incluyendo finanzas, recursos humanos y gestión de la cadena de suministro. La integración del CRM con ERP permitió una visión más completa y coherente de las operaciones y relaciones con los clientes.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img-09.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center(titulo="Nacimiento del e-CRM" subtitulo="")
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img-010.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-right")
          p Con la expansión de Internet, surgió el e-CRM, que trasladó muchas interacciones con clientes al ámbito digital. Las empresas empezaron a utilizar sitios web, correos electrónicos y otras plataformas en línea para interactuar con los clientes, permitiendo una comunicación más inmediata y accesible (Kumar & Reinartz, 2018).

      .row.justify-content-center.align-items-center(titulo="Mejora en la calidad y análisis de datos" subtitulo="")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-left")
          p Las tecnologías de bases de datos mejoradas y herramientas de análisis permitieron a las empresas recopilar, almacenar y analizar grandes volúmenes de datos de clientes de manera más efectiva. Esto facilitó la identificación de patrones de comportamiento, preferencias y tendencias, lo que a su vez permitió una personalización más precisa y estrategias de #[i marketing] más efectivas.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img-011.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center(titulo="Desafíos y aprendizajes" subtitulo="")
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img-012.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-right")
          p A pesar de los avances tecnológicos, muchas implementaciones de CRM fracasaron debido a la falta de una estrategia clara y al enfoque excesivo en la tecnología en lugar de en las necesidades y experiencias del cliente. Estos desafíos subrayaron la importancia de alinear las iniciativas de CRM con los objetivos de negocio y de involucrar a todos los niveles de la organización en su implementación (Payne & Frow, 2021).

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4. Era del social CRM y movilidad (2010-Presente)

    p.mb-5(data-aos="fade-down-right") La última década ha visto una evolución del CRM hacia enfoques más sociales y móviles, reflejando los cambios en la forma en que los clientes interactúan y se comunican con las empresas.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-5
          .row.p-4(numero="1" titulo="Integración con redes sociales")
            .col-md-12.mb-4.mb-md-0
              p La popularidad de las redes sociales como Facebook, Twitter (conocida también como X) e Instagram ha llevado al desarrollo del social CRM, que incorpora interacciones en redes sociales en las estrategias de gestión de relaciones con clientes. Esto ha permitido a las empresas escuchar y participar en conversaciones en tiempo real, gestionar la reputación de la marca y obtener #[i insights] valiosos sobre las percepciones y expectativas de los clientes (Harrigan et al., 2020).
              
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/img-013.png', alt='Imagen decorativa')
          
          .row.p-4(numero="2" titulo="CRM móvil")
            .col-md-12.mb-4.mb-md-0
              p La proliferación de dispositivos móviles ha impulsado el desarrollo de aplicaciones y plataformas de CRM accesibles desde #[i smartphones y tablets.] Esto ha proporcionado a los equipos de ventas y servicio al cliente la capacidad de acceder y actualizar información en tiempo real desde cualquier lugar, mejorando la eficiencia y capacidad de respuesta.

            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/img-014.png', alt='Imagen decorativa')
          
          .row.p-4(numero="3" titulo="Big data y analítica avanzada")
            .col-md-12.mb-4.mb-md-0
              p La utilización de Big data y herramientas de analítica avanzada ha permitido un análisis más profundo y predictivo del comportamiento del cliente. Las empresas pueden ahora anticipar necesidades, personalizar ofertas y mejorar la toma de decisiones basada en datos, lo que conduce a relaciones más sólidas y rentables con los clientes.
              
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/img-015.png', alt='Imagen decorativa')
          
          .row.p-4(numero="4" titulo="Inteligencia artificial y automatización")
            .col-md-12.mb-4.mb-md-0
              p La incorporación de inteligencia artificial (IA) y automatización en el CRM ha revolucionado la interacción con los clientes. Chatbots, asistentes virtuales y sistemas de recomendación automatizados ofrecen experiencias más personalizadas y eficientes, mejorando la satisfacción del cliente y optimizando los procesos internos.

            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/img-016.png', alt='Imagen decorativa')

          .row.p-4(numero="5" titulo="Énfasis en la experiencia del cliente (CX)")
            .col-md-12.mb-4.mb-md-0
              p El enfoque moderno del CRM se centra cada vez más en la experiencia integral del cliente, buscando crear interacciones coherentes, significativas y valiosas en todos los puntos de contacto. Esto implica una integración profunda de estrategias, procesos y tecnologías orientadas a entender y satisfacer las expectativas cambiantes de los clientes en un entorno dinámico y competitivo.

            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/img-017.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down-right") Trabajando todo el conceptos en un recursos muy cómodo de revisar se presenta la siguiente línea de tiempo del CRM

    .tarjeta.tarjeta--gris1.p-5.mb-5(data-aos="zoom-in") 
      .tarjeta.tarjeta--blanca.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1980s")
            .col-lg-6.mb-4.mb-md-0
              h3 1980s 
              p Inicio del #[i marketing] de bases de datos y uso generalizado de computadoras para gestionar información de clientes. Desarrollo de los primeros sistemas básicos de gestión de contactos.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img-018.png', alt='Texto que describa la imagen')

          .row(titulo="1990-1995")
            .col-lg-6.mb-4.mb-md-0
              h3 1990-1995 
              p Aparición y expansión de #[i call centers y contact centers.] Introducción de la automatización de la fuerza de ventas (SFA) y sistemas de soporte y servicio al cliente (CSS). Comienzan los desafíos de integración de datos y sistemas.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img-019.png', alt='Texto que describa la imagen')

          .row(titulo="1996-1999")
            .col-lg-6.mb-4.mb-md-0
              h3 1996-1999
              p Implementación de sistemas ERP integrando funciones de CRM. Desarrollo de soluciones de e-CRM con la expansión de Internet. Mejora en herramientas de análisis de datos y reconocimiento de la importancia estratégica del CRM.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img-020.png', alt='Texto que describa la imagen')

          .row(titulo="2000-2010")
            .col-lg-6.mb-4.mb-md-0
              h3 2000-2010
              p Avances en la calidad y análisis de datos de clientes. Aprendizajes sobre la necesidad de una estrategia clara y alineación organizacional para el éxito del CRM.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img-021.png', alt='Texto que describa la imagen')
          
          .row(titulo="2010-presente")
            .col-lg-6.mb-4.mb-md-0
              h3 2010-presente
              p Surgimiento del social CRM con la integración de redes sociales. Desarrollo y adopción de CRM móvil. Incorporación de big data, analítica avanzada, IA y automatización en las prácticas de CRM. Enfoque creciente en la experiencia integral del cliente (CX).

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img-022.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="zoom-in")
        p.mb-4 La evolución del CRM refleja una progresión desde simples sistemas de almacenamiento de información hacia estrategias integrales y sofisticadas que aprovechan las últimas tecnologías para gestionar y optimizar las relaciones con los clientes. Esta transformación ha sido impulsada por avances tecnológicos, cambios en el comportamiento del consumidor y una creciente comprensión de la centralidad del cliente en el éxito empresarial.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-023.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hoy en día, el CRM es una combinación de tecnología, estrategia y cultura organizacional que permite a las empresas comprender profundamente a sus clientes, anticipar sus necesidades y ofrecer experiencias excepcionales que fomentan la lealtad y el crecimiento sostenible. La continua innovación en áreas como inteligencia artificial, análisis predictivo y experiencias omnicanal seguirá moldeando el futuro del CRM, proporcionando nuevas oportunidades para que las empresas construyan y mantengan relaciones sólidas y rentables con sus clientes.














</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
