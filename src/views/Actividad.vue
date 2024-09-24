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
      tema: 'Relaciones humanas en el entorno laboral',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos clave relacionados con las relaciones humanas en el ámbito laboral.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es una relación primaria?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El círculo más cercano e íntimo del individuo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Vínculos formados por la necesidad de la relación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relación con compañeros de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Relaciones laborales en la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una de las claves para mejorar las relaciones humanas?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desconocer las pautas de respeto.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'El respeto.', esCorrecta: true },
            { id: 'c', texto: 'Evitar la comunicación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mantener distancia emocional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué permite la comunicación efectiva?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expresar sentimientos y emociones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar conflictos laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar mayor productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lograr relaciones superficiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una ventaja de buenas relaciones humanas en la empresa?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor número de conflictos laborales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejoramiento de la productividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción del compromiso personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento de la distancia entre los empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de relación se forma por la necesidad de la relación?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Primarias.', esCorrecta: false },
            { id: 'b', texto: 'Secundarias.', esCorrecta: true },
            { id: 'c', texto: 'Familiares.', esCorrecta: false },
            { id: 'd', texto: 'Amistades.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es la empresa en el contexto de las relaciones humanas?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un espacio para la interacción informal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un espacio para alcanzar metas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un lugar de relaciones primarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un entorno de relaciones amorosas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se logra al aplicar la comunicación efectiva de manera adecuada?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confusión en la comunicación.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Eficacia en las relaciones.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Disminución de la calidad en las relaciones.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Aumento de los conflictos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué genera un buen clima laboral en una empresa?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Personal comprometido.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Mayor rotación de empleados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Relaciones conflictivas.', esCorrecta: false },
            { id: 'd', texto: 'Baja productividad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes es un ejemplo de relación secundaria?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Relaciones laborales.', esCorrecta: true },
            { id: 'b', texto: 'Relaciones familiares.', esCorrecta: false },
            { id: 'c', texto: 'Relaciones de amistad.', esCorrecta: false },
            { id: 'd', texto: 'Relaciones amorosas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué área se ve afectada cuando un ser humano se desarrolla en una empresa?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Relaciones amorosas.', esCorrecta: false },
            { id: 'b', texto: 'Relaciones familiares.', esCorrecta: false },
            { id: 'c', texto: 'Diversas áreas de su vida.', esCorrecta: true },
            { id: 'd', texto: 'Relaciones primarias.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
