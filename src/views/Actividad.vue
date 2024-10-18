<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        'Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo. Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'El concepto de cliente ideal, también conocido como <em>Buyer</em> Persona, es una representación ficticia del cliente promedio de una empresa.',
          imagen: require('@/assets/componentes/pregunta_1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El CRM colaborativo no se limita a las redes sociales, sino que integra múltiples canales de interacción, como correo electrónico, teléfono y autoservicio, para mejorar la comunicación interna y externa con el cliente.',
          mensaje_incorrecto:
            'Incorrecto. El CRM colaborativo abarca muchos más canales que las redes sociales, y su objetivo principal es mejorar la interacción y el intercambio de información entre todos los departamentos de la empresa.',
        },
        {
          id: 2,
          texto:
            'El CRM operacional permite automatizar procesos de ventas, marketing y servicio al cliente.',
          imagen: require('@/assets/componentes/pregunta_2.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. El CRM operacional se enfoca en la automatización de procesos relacionados con ventas, marketing y servicio al cliente para mejorar la eficiencia y efectividad de las interacciones con los clientes.',
          mensaje_incorrecto:
            'Incorrecto. El CRM operacional tiene como objetivo automatizar y optimizar tareas de ventas, marketing y servicio al cliente para mejorar las operaciones diarias.',
        },
        {
          id: 3,
          texto:
            'La fase de fidelización del CRM busca únicamente adquirir nuevos clientes.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La fase de fidelización se enfoca en retener a los clientes actuales y mantener su lealtad, no en adquirir nuevos clientes.',
          mensaje_incorrecto:
            'Incorrecto. La fase de fidelización está diseñada para mantener y fortalecer las relaciones con los clientes actuales, asegurando que sigan eligiendo a la empresa a largo plazo.',
        },
        {
          id: 4,
          texto:
            'El CRM analítico ayuda a identificar patrones de comportamiento y tendencias en los clientes mediante el análisis de datos.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. El CRM analítico permite a las empresas recopilar y analizar datos sobre los clientes para identificar patrones de comportamiento, tendencias y oportunidades de negocio.',
          mensaje_incorrecto:
            'Incorrecto. El CRM analítico se enfoca en analizar grandes volúmenes de datos para ayudar a las empresas a entender mejor el comportamiento y las preferencias de los clientes.',
        },
        {
          id: 5,
          texto:
            'El CRM colaborativo y el CRM analítico son el mismo tipo de CRM, ya que ambos se centran en la recopilación de datos.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El CRM Colaborativo se centra en la interacción y comunicación entre departamentos, mientras que el CRM Analítico se enfoca en el análisis de datos para obtener información estratégica.',
          mensaje_incorrecto:
            'Incorrecto. El CRM Colaborativo se enfoca en mejorar la interacción interna y con el cliente, mientras que el CRM Analítico analiza los datos del cliente para tomar decisiones estratégicas.',
        },
        {
          id: 6,
          texto:
            'La venta cruzada (cross-selling) consiste en ofrecer productos más caros o de mayor gama al cliente.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La venta cruzada se refiere a ofrecer productos complementarios, no necesariamente más caros. La venta incremental (up-selling) es la que se enfoca en ofrecer productos de mayor gama o precio.',
          mensaje_incorrecto:
            'Incorrecto. La venta cruzada implica ofrecer productos complementarios, mientras que la venta incremental (up-selling) es la que busca ofrecer productos más caros o de mayor gama.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
