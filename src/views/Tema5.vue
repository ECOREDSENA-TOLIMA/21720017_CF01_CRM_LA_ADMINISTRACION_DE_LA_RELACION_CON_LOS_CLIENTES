<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Fases del CRM

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='')

    p.mb-5(data-aos="fade-right") La implementación efectiva de un sistema de gestión de la relación con el cliente (CRM) se desarrolla a través de varias fases críticas que permiten a las empresas gestionar y optimizar cada etapa de la relación con el cliente. Estas fases son esenciales para asegurar que el CRM no solo funcione como una herramienta operativa, sino que también contribuya a la estrategia general de la organización. A continuación, se describe en detalle cada una de las fases del CRM:

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1. Fase 1: adquisición de nuevos clientes

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4 
      .row.justify-content-center.align-items-center.mb-5
        p(data-aos="fade-right") La primera fase del CRM se centra en la adquisición de nuevos clientes. Esta fase es fundamental, ya que una base sólida de nuevos clientes es crucial para el crecimiento y la expansión de cualquier negocio. El objetivo principal es identificar, atraer y convertir prospectos en clientes.
        p.mb-5(data-aos="fade-right") Los siguientes son los pasos en la fase de adquisición:
        .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema5/icono-01.svg', alt='Texto que describa la imagen')

            h4.text-center Identificación de prospectos
            p En esta etapa, la empresa identifica a posibles clientes mediante la investigación de mercado, análisis de datos y campañas de marketing dirigidas. Las empresas utilizan diversas herramientas, como publicidad en redes sociales, marketing de contenidos y campañas de correo electrónico, para atraer la atención de potenciales clientes (Nguyen & Mutum, 2018).

        .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema5/icono-02.svg', alt='Texto que describa la imagen')

            h4.text-center Atracción de prospectos
            p Una vez identificados los prospectos, la empresa debe captar su interés. Esto se logra a través de estrategias de inbound marketing, donde se ofrece contenido relevante y valioso que responda a las necesidades o problemas del prospecto. Este enfoque crea un vínculo inicial y establece la empresa como una autoridad en el campo.

        .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema5/icono-03.svg', alt='Texto que describa la imagen')

            h4.text-center Conversión de prospectos en clientes
            p El objetivo final de esta fase es convertir a los prospectos en clientes. Esto se logra mediante tácticas de marketing directo, ofertas personalizadas y un proceso de ventas eficaz que conduzca al cierre de la venta. En esta etapa, la experiencia del cliente debe ser fluida y positiva para asegurar una transición exitosa de prospecto a cliente.

      p.mb-0(data-aos="fade-right") El éxito en esta fase depende de la capacidad de la empresa para segmentar correctamente el mercado, atraer la atención de los prospectos adecuados y proporcionarles una experiencia inicial que cumpla o supere sus expectativas.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2. Fase 2: aumento de ventas con clientes actuales

    p(data-aos="fade-right") Una vez que se han adquirido nuevos clientes, el siguiente paso en el ciclo de vida del CRM es maximizar el valor de estos clientes para la empresa. La fase de aumento de ventas con clientes actuales se centra en estrategias diseñadas para incrementar el gasto de los clientes existentes, a través de ventas adicionales o venta cruzada.
    p.mb-5(data-aos="fade-left") Las estrategias en la fase de aumento de ventas son las siguientes:

    .row.justify-content-center.mb-3
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img-02.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
          p.text-small(numero="1" titulo="Cross-selling (venta cruzada)") Esta estrategia implica ofrecer productos o servicios complementarios a los que el cliente ya ha comprado o está considerando comprar. Por ejemplo, en una tienda de tecnología, un cliente que compra un teléfono móvil puede recibir ofertas de accesorios como auriculares, protectores de pantalla o cargadores adicionales (Buttle & Maklan, 2019).

          p.text-small(numero="2" titulo="Up-selling (venta incremental)") Up-selling se refiere a persuadir al cliente para que adquiera una versión más avanzada o premium de un producto o servicio que está considerando. Por ejemplo, si un cliente está interesado en un plan de seguro básico, la empresa puede ofrecerle un plan más completo que incluya beneficios adicionales, argumentando que proporcionará un mejor valor a largo plazo.
          
          p.text-small(numero="3" titulo="Programas de lealtad y fidelización") Los programas de lealtad son esenciales en esta fase, ya que recompensan a los clientes por sus compras recurrentes, incentivando así un mayor gasto y frecuencia de compra. Estos programas pueden incluir puntos de recompensa, descuentos exclusivos o promociones especiales para miembros.

    p.mb-5 El éxito en esta fase depende de la capacidad de la empresa para comprender las necesidades y preferencias de sus clientes actuales y para ofrecerles productos o servicios que realmente agreguen valor a sus vidas.

    Separador
    
    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3. Fase 3: fidelización del cliente

    p(data-aos="fade-left") La fase final del CRM, pero no menos importante, es la fidelización del cliente. Esta fase se enfoca en mantener a los clientes a largo plazo, asegurando que sigan eligiendo a la empresa para satisfacer sus necesidades en lugar de recurrir a la competencia.
    p.mb-5(data-aos="fade-right") Elementos clave en la fase de fidelización:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="Satisfacción continuada del cliente")
        .col-md-6.mb-4.mb-md-0
          p Mantener la satisfacción del cliente es esencial para su fidelización. Esto implica no solo cumplir con las expectativas del cliente, sino superarlas consistentemente. La calidad del producto o servicio, la atención al cliente y la resolución efectiva de problemas son fundamentales en este aspecto (Payne & Frow, 2021).

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img-03.png', alt='Texto que describa la imagen')

      .row(titulo="Comunicación constante y relevante")
        .col-md-6.mb-4.mb-md-0
          p La empresa debe mantener una comunicación continua con el cliente, proporcionándole información relevante y personalizada. Esto puede incluir notificaciones sobre nuevas ofertas, actualizaciones de productos o servicios, y mensajes personalizados en fechas importantes como cumpleaños o aniversarios de compra.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img-04.png', alt='Texto que describa la imagen')

      .row(titulo="Servicio postventa y soporte técnico")
        .col-md-6.mb-4.mb-md-0
          p Un servicio postventa eficiente es crucial para la fidelización. Proporcionar soporte técnico rápido y efectivo, garantías extendidas, y seguimiento proactivo después de la venta, son prácticas que fortalecen la relación con el cliente y aumentan su lealtad hacia la marca.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img-05.png', alt='Texto que describa la imagen')

      .row(titulo="Creación de comunidad y pertenencia")
        .col-md-6.mb-4.mb-md-0
          p Algunas empresas van un paso más allá al crear comunidades alrededor de su marca, donde los clientes pueden interactuar entre sí y compartir experiencias. Esta sensación de pertenencia a una comunidad puede ser un factor poderoso en la fidelización del cliente. Un ejemplo de esto en Colombia podría ser la estrategia de Postobón, que ha creado comunidades en torno a sus marcas de bebidas, incentivando la participación activa de los clientes.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/img-06.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-right") El éxito en esta fase depende de la capacidad de la empresa para mantener y profundizar la relación con el cliente a lo largo del tiempo, generando confianza y valor continuo.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_4 5.4. Integración de las fases en la estrategia general de CRM

    p.mb-5(data-aos="fade-left") La fase final del CRM, pero no menos importante, es la fidelización del cliente. Esta fase se enfoca en mantener a los clientes a largo plazo, asegurando que sigan eligiendo a la empresa para satisfacer sus necesidades en lugar de recurrir a la competencia. Elementos clave en la fase de fidelización:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")











</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Sincronización de datos',
        texto:
          'Los datos recopilados en cada fase deben ser accesibles y utilizados de manera coherente en toda la organización. Por ejemplo, la información obtenida durante la fase de adquisición debe ser utilizada en las fases de aumento de ventas y fidelización para personalizar las interacciones con el cliente y mejorar la relevancia de las ofertas.',
        imagen: require('@/assets/curso/temas/tema5/img-07.png'),
      },
      {
        titulo: 'Feedback y mejora continua',
        texto:
          'Cada fase debe incluir mecanismos de retroalimentación que permitan a la empresa ajustar y mejorar continuamente su estrategia de CRM. Esto asegura que la empresa pueda adaptarse a las necesidades cambiantes de los clientes y al entorno competitivo.',
        imagen: require('@/assets/curso/temas/tema5/img-08.png'),
      },
      {
        titulo: 'Coherencia en la experiencia del cliente',
        texto:
          'Desde la primera interacción hasta las interacciones de seguimiento, la experiencia del cliente debe ser coherente y positiva. La alineación de todos los departamentos en torno a esta estrategia es crucial para asegurar que el cliente perciba un valor continuo y un servicio excepcional.',
        imagen: require('@/assets/curso/temas/tema5/img-09.png'),
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
