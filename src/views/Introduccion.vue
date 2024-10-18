<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-down-right") En la actualidad, las empresas enfrentan un entorno altamente competitivo donde la satisfacción del cliente se ha convertido en un factor determinante para el éxito organizacional. La experiencia del cliente, definida como la percepción que tiene un cliente sobre la interacción con una empresa, es crucial para mantener la lealtad del cliente y fomentar la repetición de compra. Una experiencia positiva puede incrementar significativamente la fidelidad del cliente, mientras que una experiencia negativa puede llevarlo a considerar opciones competitivas.
    p(data-aos="fade-right") La importancia del cliente en el contexto empresarial moderno es tal que se ha convertido en el eje central de las estrategias de negocio. Las organizaciones han orientado sus esfuerzos y recursos hacia la satisfacción y mantenimiento de relaciones a largo plazo con sus clientes. Este enfoque busca no solo atraer a nuevos clientes, sino también consolidar la lealtad de aquellos ya existentes, lo cual se ha vuelto fundamental para la sostenibilidad y crecimiento de las empresas.
    p.mb-5(data-aos="fade-left") Jean-Paul Sallenave, en su análisis de la planeación estratégica, destaca la relevancia de tres aspectos fundamentales que deben ser el foco de inversión dentro de cualquier organización: el desarrollo de productos, la logística y el servicio al cliente. Este último, en particular, ha adquirido un papel preponderante en la toma de decisiones estratégicas, ya que influye directamente en la satisfacción del cliente y en la sostenibilidad de las relaciones comerciales en todos los niveles de la organización.
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .tarjeta.tarjeta.p-4(style="background: linear-gradient(0deg,#E2DFFC, #E2DFFC)")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-8.mb-3
              figure
                img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')
            .col-lg-7.col-12.mb-3
              p El concepto de Gestión de la Relación con el Cliente (CRM, por sus siglas en inglés) ha emergido como una respuesta a esta necesidad de focalización en el cliente. El CRM se presenta no solo como una herramienta tecnológica, sino como una estrategia integral que abarca todos los aspectos de la relación con el cliente. Es fundamental entender que el CRM va más allá de la simple implementación de #[i software]; se trata de una filosofía organizacional que busca integrar todos los procesos de la empresa para mejorar la experiencia del cliente y, en última instancia, su lealtad.
              p El objetivo de este contenido de formación es proporcionar una base sólida para comprender el CRM, diferenciándolo de acciones aisladas de gestión de clientes y evitando errores comunes en su implementación. A través de un análisis cronológico y evolutivo, se abordarán las fases del CRM, demostrando su relevancia como una estrategia clave en la creación y entrega de propuestas de valor en las organizaciones contemporáneas.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
