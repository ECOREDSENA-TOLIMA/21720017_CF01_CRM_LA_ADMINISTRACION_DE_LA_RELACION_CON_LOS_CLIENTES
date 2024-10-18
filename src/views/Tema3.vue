<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tipos de CRM

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='')

    p.mb-5(data-aos="fade-down-right") El Customer Relationship Management (CRM) se ha diversificado en varias modalidades, cada una diseñada para abordar diferentes aspectos de la gestión de la relación con el cliente. Estos tipos de CRM permiten a las empresas adaptar sus estrategias y operaciones a las necesidades específicas de sus clientes y a los objetivos comerciales que desean alcanzar. Los principales tipos de CRM son: el CRM colaborativo, el CRM operacional y el CRM analítico. A continuación, se presenta una explicación detallada de cada uno, basada en la información del documento proporcionado y en otras fuentes relevantes.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. CRM colaborativo

    p(data-aos="fade-down-right") El CRM colaborativo se centra en la integración y el intercambio de información entre los diferentes departamentos de una empresa para mejorar la interacción y la comunicación con los clientes. Este tipo de CRM facilita la coordinación entre el marketing, las ventas, el servicio al cliente y otros departamentos relevantes, asegurando que toda la organización tenga acceso a la misma información sobre el cliente y que las interacciones con él sean coherentes y eficaces.
    p.mb-5(data-aos="fade-down-right") Las principales funcionalidades del CRM colaborativo son las siguientes:

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-right")
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-out-up")
              .row(titulo="Interacción multicanal")
                .col-md-12.mb-4.mb-md-0
                  p El CRM colaborativo incorpora múltiples canales de comunicación, como correos electrónicos, llamadas telefónicas, redes sociales, mensajes de texto y plataformas de autoservicio. Esto permite a los clientes interactuar con la empresa a través del canal que prefieran, y a su vez, garantiza que la información recopilada a través de estos canales esté disponible para todos los departamentos de la empresa.

              .row(titulo="Compartición de información")
                .col-md-12.mb-4.mb-md-0
                  p Este tipo de CRM facilita el acceso a la información del cliente a cualquier miembro de la empresa, independientemente de su función. Por ejemplo, un representante de servicio al cliente puede ver el historial de compras y las interacciones anteriores del cliente con la empresa, lo que permite una atención más personalizada y eficiente.

              .row(titulo="Personalización del servicio")
                .col-md-12.mb-4.mb-md-0
                  p Al permitir que todos los empleados accedan a la información del cliente, el CRM colaborativo ayuda a personalizar la experiencia del cliente. Esto no solo mejora la satisfacción del cliente, sino que también aumenta la probabilidad de retención a largo plazo. La personalización es crucial para generar confianza y lealtad, ya que los clientes perciben que la empresa comprende y valora sus necesidades específicas.

      .col-lg-4.col-12.mb-5.d-lg-flex.d-none(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Rutinas de limpieza')

    .fondo2-t2.mb-5.px-md-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema3/img-03.svg', alt='Imagen decorativa')

        .col-lg-6.col-12.mb-3(data-aos="fade-right")
          p El CRM colaborativo mejora la experiencia del cliente al garantizar que todas las interacciones sean coherentes y que se basen en un conocimiento completo del cliente. Esto puede llevar a una mayor satisfacción del cliente, una mejor retención y un aumento en las oportunidades de venta cruzada y ascendente (up-selling). Además, al integrar los departamentos y los canales de comunicación, se optimiza la eficiencia operativa y se reduce la redundancia en los esfuerzos de servicio y #[i marketing.]

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. CRM operacional

    p(data-aos="fade-left") El CRM operacional se enfoca en la automatización y mejora de los procesos comerciales que implican el contacto directo con los clientes. Este tipo de CRM es el que tradicionalmente se asocia más estrechamente con la gestión de ventas, el marketing y el servicio al cliente, ya que proporciona las herramientas necesarias para manejar eficientemente las operaciones diarias relacionadas con la interacción con el cliente.
    p.mb-5(data-aos="fade-right") Se pueden considerar como componentes importantes del CRM operacional los siguientes:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#E2DFFC")
          p.mb-0 El principal beneficio del CRM operacional es la mejora en la eficiencia y efectividad de las interacciones con los clientes. Al automatizar tareas rutinarias y proporcionar herramientas avanzadas para la gestión de ventas, marketing y servicio al cliente, este tipo de CRM permite a las empresas optimizar sus operaciones diarias, reducir costos y mejorar la satisfacción del cliente. Además, al centralizar la información del cliente, el CRM operacional facilita una visión unificada de cada cliente, lo que mejora la capacidad de la empresa para personalizar sus interacciones y construir relaciones más sólidas.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3. CRM analítico

    p(data-aos="fade-left") El CRM analítico se centra en la recopilación, el análisis y el uso de datos sobre los clientes para mejorar la toma de decisiones y optimizar las estrategias comerciales. Este tipo de CRM es crucial para comprender mejor el comportamiento de los clientes, identificar tendencias y patrones, y predecir necesidades futuras, lo que permite a las empresas personalizar sus ofertas y mejorar la eficiencia de sus campañas de marketing.
    p.mb-5(data-aos="fade-right") Enseguida se relacionan las funcionalidades del CRM analítico:

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-primario1.p-5(style="background-color: #CAC5F9")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center Recopilación y almacenamiento de datos
        p El CRM analítico recopila datos de todas las interacciones con los clientes, incluyendo compras, consultas, interacciones en redes sociales y más. Estos datos se almacenan en un data warehouse, donde pueden ser organizados y preparados para el análisis. La calidad y cantidad de datos recopilados son fundamentales para la efectividad del CRM analítico.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-botones1.p-5(style="background-color: #BCF6FF")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Análisis de datos y business intelligence (BI)
        p El análisis de datos es el corazón del CRM analítico. Este proceso incluye la utilización de técnicas de minería de datos, análisis predictivo y herramientas de business intelligence (BI) para extraer información valiosa de los datos recopilados. El CRM analítico permite a las empresas identificar patrones de comportamiento, segmentar clientes según características específicas y predecir tendencias futuras. Esto permite tomar decisiones más informadas y personalizar las estrategias de marketing y ventas.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-contenido1.p-5(style="background-color: #E5E5E5")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-03.svg', alt='Texto que describa la imagen')
          
        h2.text-center Medición y evaluación del rendimiento
        p El CRM analítico también facilita la medición y evaluación del rendimiento de las campañas de marketing, la efectividad de las estrategias de ventas y el nivel de satisfacción del cliente. Las empresas pueden utilizar estos insights para ajustar sus estrategias y mejorar continuamente sus procesos. Por ejemplo, el análisis de la satisfacción del cliente puede ayudar a identificar áreas de mejora en el servicio al cliente, lo que a su vez puede aumentar la lealtad y retención de clientes.

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4(data-aos="zoom-in") 
      .row.justify-content-center.align-items-center
        p.mb-5(data-aos="fade-right") El CRM analítico ofrece a las empresas una ventaja competitiva al proporcionar una comprensión profunda del comportamiento del cliente y la capacidad de anticiparse a sus necesidades. Al utilizar datos para informar la toma de decisiones, las empresas pueden personalizar sus interacciones con los clientes, mejorar la eficacia de sus campañas de marketing y aumentar la satisfacción y lealtad del cliente. Además, el CRM analítico permite a las empresas identificar oportunidades de crecimiento y optimización, lo que puede conducir a una mayor rentabilidad y éxito a largo plazo.
        .col-lg-5.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema3/img-07.svg', alt='Imagen decorativa')

        .col-lg-5.col-12.mb-3(data-aos="fade-right")
          p Entendiendo todo el conceptos de los CRM y sus diferentes tipos se presenta la utilización de cada uno a manera de trabajo individual por la industria que la requiera usar, cada tipo de CRM ofrece beneficios específicos que pueden contribuir al éxito de una empresa en su gestión de relaciones con los clientes. Mientras que el CRM colaborativo se enfoca en mejorar la comunicación y coordinación interna para ofrecer una experiencia de cliente más coherente, el CRM operacional automatiza y optimiza los procesos diarios que involucran interacciones con los clientes. Por otro lado, el CRM analítico proporciona a las empresas los insights necesarios para tomar decisiones informadas y personalizar sus estrategias comerciales.

    p.mb-5(data-aos="fade-right") La implementación de un CRM efectivo requiere una combinación de estos tres tipos, adaptada a las necesidades específicas de la empresa y sus clientes. Al comprender y utilizar adecuadamente el CRM colaborativo, operacional y analítico, las empresas pueden maximizar la satisfacción del cliente, mejorar la eficiencia operativa y aumentar su competitividad en el mercado.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4. Ejemplos de uso de cada tipo de CRM en el mercado colombiano

    p.mb-5(data-aos="fade-right") Para facilitar el entendimiento se presentan ejemplos de uso de cada uno de los tipos de CRM en el ámbito colombiano, es importante que cada aprendiz lleve este tipo de ejemplos a su necesidad y haga la aceptación del concepto asentado a la realidad.

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-handshake] a. CRM colaborativo. Ejemplo en empresa de telecomunicaciones

    p.mb-5(data-aos="fade-right") En el mercado colombiano, una empresa de telecomunicaciones que preste servicios de telefonía, Internet y conectividad puede utilizar un CRM Colaborativo para mejorar la coordinación interna y la experiencia del cliente. Supongamos que un cliente contacta a la empresa a través de su línea de atención al cliente para reportar un problema con su servicio de Internet. Con un CRM colaborativo, la información del cliente, incluyendo su historial de interacciones anteriores, es accesible para todos los departamentos relevantes, desde el servicio al cliente hasta el equipo técnico.

    .row.justify-content-center
      .col-10.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/icono-04.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Interacción multicanal
              p El cliente puede iniciar la interacción a través de una llamada telefónica, pero luego continuarla por correo electrónico o chat en línea. Toda la información se sincroniza en el CRM, permitiendo que cualquier representante de la empresa acceda a la misma y ofrezca un servicio coherente y personalizado.

      .col-10.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/icono-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Resolución de problemas
              p El equipo técnico puede acceder a la información del cliente desde el CRM colaborativo, lo que les permite entender mejor el problema y coordinar una solución rápida. Además, si el cliente realiza una queja en redes sociales, el equipo de social media de Claro puede acceder a la misma información y darle seguimiento, asegurando que el cliente reciba una respuesta rápida y adecuada.

    p.mb-5(data-aos="fade-right") Este enfoque mejora la eficiencia operativa y asegura que el cliente reciba un servicio coherente, sin importar el canal de comunicación que utilice.

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-handshake] b. CRM operacional. Ejemplo en retailer de moda

    p.mb-5(data-aos="fade-right") Una cadena de tiendas de moda como las que venden ropa en los centros comerciales o en canales digitales pueden implementar un CRM operacional para optimizar sus operaciones de ventas y marketing. Supongamos que la empresa de ropa lanza una nueva colección y desea impulsar las ventas a través de su plataforma de e-commerce y tiendas físicas.

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Automatización de la fuerza de ventas]
              p.mb-0 La empresa puede utilizar el CRM operacional para gestionar sus campañas de ventas, segmentar a sus clientes según sus preferencias de moda y comportamiento de compra, y enviar ofertas personalizadas a través de correo electrónico y notificaciones en su aplicación móvil. La automatización permite que estas ofertas lleguen en el momento adecuado, aumentando la probabilidad de compra.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-08.png', style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Automatización del #[i marketing]]
              p.mb-0 A través de la segmentación automática, la empresa puede enviar promociones especiales a clientes que han mostrado interés en ciertos productos o que han comprado colecciones anteriores. Además, puede realizar un seguimiento del rendimiento de estas campañas en tiempo real y ajustar las estrategias de marketing según los resultados obtenidos.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-09.png', style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Automatización del servicio al cliente]
              p.mb-0 En el caso de consultas o devoluciones, el CRM operacional permite que el servicio al cliente de la empresa gestione rápidamente las solicitudes, accediendo a toda la información relevante del cliente, lo que facilita una resolución rápida y eficiente. 
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-010.png', style="width: 450px" ,alt='').m-auto 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="zoom-in")
        p.mb-4 Este uso del CRM operacional permite a las empresas de modas maximizar sus ventas, mejorar la experiencia del cliente y mantener una operación fluida tanto en línea como en tiendas físicas.
    
    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-handshake] c. CRM analítico. Ejemplo en banco colombiano

    p.mb-5(data-aos="fade-right") Un banco colombiano puede emplear un CRM analítico para mejorar su comprensión del comportamiento de sus clientes y optimizar sus estrategias de productos financieros.

    TabsC.color-acento-botones.mt-5.mb-5.color_img-tab.bg_1(data-aos="fade-left")
      .p-4(titulo="Análisis de datos para segmentación")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-011.png', alt='Texto que describa la imagen')
              
          .col-lg-7
            p.mb-0 Bancos de Colombia pueden utilizar su CRM analítico para analizar el comportamiento de sus clientes en términos de uso de tarjetas de crédito, préstamos y otros productos financieros. Al identificar patrones, el banco puede segmentar a sus clientes en grupos específicos, como aquellos que tienen mayor probabilidad de necesitar un préstamo hipotecario o aquellos interesados en productos de inversión.

      .p-4(titulo="Personalización de ofertas")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-012.png', alt='Texto que describa la imagen')

          .col-lg-7
            p.mb-0 Con base en el análisis de datos, puede personalizar sus ofertas para cada segmento de clientes. Por ejemplo, podría enviar ofertas de tarjetas de crédito con beneficios específicos a clientes que frecuentemente compran en tiendas asociadas, o proponer planes de ahorro a clientes que han mostrado interés en productos de inversión.

      .p-4(titulo="Predicción de comportamiento")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-013.png', alt='Texto que describa la imagen')

          .col-lg-7
            p.mb-0 El CRM analítico también permite a los bancos predecir comportamientos futuros, como la probabilidad de que un cliente solicite un préstamo en los próximos meses. Esta información permite adelantarse a las necesidades del cliente, ofreciendo productos financieros en el momento adecuado.
    
    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="zoom-in")
        p.mb-4 Este uso del CRM analítico no solo mejora la satisfacción del cliente al proporcionar servicios y productos más relevantes, sino que también incrementa la eficiencia y efectividad de las estrategias de ventas y marketing del banco.





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Automatización de la fuerza de ventas (SFA)',
        texto:
          'Uno de los componentes clave del CRM operacional es la SFA, que automatiza diversas tareas relacionadas con el proceso de ventas, como la gestión de oportunidades, la elaboración de presupuestos, el seguimiento de pedidos y la gestión de contratos. La SFA ayuda a los equipos de ventas a trabajar de manera más eficiente al reducir el tiempo que dedican a tareas administrativas y al permitirles concentrarse en cerrar negocios.',
        imagen: require('@/assets/curso/temas/tema3/img-04.png'),
      },
      {
        titulo: 'Automatización del marketing',
        texto:
          'La automatización del marketing es otra característica esencial del CRM operacional. Este componente permite a las empresas gestionar campañas de marketing de manera más eficiente, personalizar las comunicaciones con los clientes y medir el rendimiento de las campañas en tiempo real. La automatización del marketing incluye herramientas como el email marketing, la segmentación de clientes y el análisis de campañas, lo que facilita la entrega de mensajes personalizados en el momento adecuado.',
        imagen: require('@/assets/curso/temas/tema3/img-05.png'),
      },
      {
        titulo: 'Automatización del servicio al cliente',
        texto:
          'El CRM operacional también incluye herramientas para la automatización del servicio al cliente, como los centros de llamadas (call centers) y las plataformas de autoservicio. Estas herramientas permiten a las empresas gestionar de manera más eficiente las consultas y problemas de los clientes, proporcionando respuestas rápidas y personalizadas. Además, la automatización del servicio al cliente puede incluir sistemas de gestión de tickets, que ayudan a rastrear y resolver problemas de manera efectiva.',
        imagen: require('@/assets/curso/temas/tema3/img-06.png'),
      },
    ],
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
