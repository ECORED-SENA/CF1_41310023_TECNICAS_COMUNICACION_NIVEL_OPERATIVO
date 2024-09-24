<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 ¿Qué son las relaciones humanas?
      
    .row.justify-content-center.align-items-center      
      .col-lg-8.my-3.order-1       
          p(data-aos="fade-down") En los orígenes de la humanidad, cuando el ser humano comenzó a relacionarse con otros individuos, logró mejorar sus posibilidades de supervivencia. Esta interacción facilitó la creación de comunidades, tribus o asentamientos que se ayudaban mutuamente, beneficiando a todos sus miembros. La colaboración no solo brindó protección y seguridad, sino que también permitió obtener mejores recursos, aprovechar oportunidades y garantizar la estabilidad de generaciones futuras.

          p(data-aos="fade-down") La naturaleza social del ser humano:              
      .col-lg-4.my-3.order-lg-2            
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')   

    .row.justify-content-center.mb-2.bg2.brad.p-3(data-aos="fade-right")
      .col.order-1.pt-4.pt-md-4.pt-lg-0.j1
        p(data-aos="fade-down").mb-0 El ser humano es inherentemente social, y establecer relaciones con otros es esencial para su desarrollo.
      .col-lg-auto.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')  

    .row.justify-content-center.mb-2.bg3.brad.p-3(data-aos="fade-left")
      .col.order-1.pt-4.pt-md-4.pt-lg-0.j1
        p(data-aos="fade-down").mb-0 #[b Interacción social:] la capacidad de formar buenas relaciones humanas convierte a una persona en un elemento valioso dentro de cualquier grupo, permitiendo no solo su desarrollo individual, sino también el apoyo a otros.
      .col-lg-auto.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='') 

    .row.justify-content-center.mb-5.bg2.brad.p-3(data-aos="fade-right")
      .col.order-1.pt-4.pt-md-4.pt-lg-0.j1
        p(data-aos="fade-down").mb-0 #[b Impacto en el liderazgo:] las relaciones humanas profundas fortalecen el liderazgo, ya que son fundamentales para el desarrollo intelectual y personal de los individuos.
      .col-lg-auto.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg', alt='')  

    .row.bg4.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down") Las relaciones humanas son vitales para la constitución de la sociedad. Sin ellas, no se podría concebir una sociedad funcional, ni un ser humano que pueda desarrollarse plenamente sin interactuar con otros. Estas relaciones son esenciales para cada individuo, sin importar su condición social, edad, raza, etc.

            p(data-aos="fade-down").mb-5 Las relaciones públicas y relaciones humanas son:          
            .bg5.d-none.d-lg-block
              .row.justify-content-center.mb-5
                .col-sm-6.col-xl-4.mb-4.mb-xl-0
                  .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                    .indicador--hover(v-if="indicadorTarjetaFlip")
                    .tarjeta-flip__contenedor
                      .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/10.png')})`}")
                        h5.py-5.text-center #[mark.px-3.m-1.p-1.bgw.brad Relaciones públicas] 
                      .tarjeta-flip__contenido.p-4.p-xl-5
                        h5.mb-4.text-center #[mark.bg6.text-white.px-3.m-1.p-1 Relaciones públicas]
                        p Representan la aplicación de las relaciones humanas en el ámbito empresarial, buscando una excelente interacción entre la empresa y sus clientes, proveedores y otros actores relacionados con la organización.   

                .col-sm-6.col-xl-4.mb-4.mb-xl-0
                  .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
                    .indicador--hover(v-if="indicadorTarjetaFlip")
                    .tarjeta-flip__contenedor
                      .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/11.png')})`}")
                        h5.py-5.text-center #[mark.px-3.m-1.p-1.bgw.brad Filosofía humanística ] 
                      .tarjeta-flip__contenido.p-4.p-xl-5
                        h5.mb-4.text-center #[mark.bg6.text-white.px-3.m-1.p-1 Filosofía humanística]
                        p Tanto las relaciones humanas como las relaciones públicas se basan en esta filosofía, centrada en la conducta humana, sus motivaciones, acciones y valores. 

            .row.justify-content-center.bg5.p-2.brad2.mb-5.d-block.d-lg-none
              .col(data-aos="fade-left").my-3
                .bgw.brad2.p-3
                  img.img-mov.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='') 
                  h5(data-aos="fade-down").mb-4.text-center #[mark.bg6.text-white.px-3.m-1.p-1 Relaciones públicas]
                  p(data-aos="fade-down") Representan la aplicación de las relaciones humanas en el ámbito empresarial, buscando una excelente interacción entre la empresa y sus clientes, proveedores y otros actores relacionados con la organización. 

              .col(data-aos="fade-right").my-3
                .bgw.brad2.p-3
                  img.img-mov.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='') 
                  h5(data-aos="fade-down").mb-4.text-center #[mark.bg6.text-white.px-3.m-1.p-1 Filosofía humanística]
                  p(data-aos="fade-down") Tanto las relaciones humanas como las relaciones públicas se basan en esta filosofía, centrada en la conducta humana, sus motivaciones, acciones y valores.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col.order-1.pt-4.pt-md-4.pt-lg-0
        p(data-aos="fade-down").mb-0 Las relaciones humanas y las relaciones públicas son, por tanto, componentes fundamentales tanto en el desarrollo individual como en el éxito organizacional.
      .col-lg-auto.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg', alt='')   

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Relaciones humanas en la empresa

    .row.justify-content-center.align-items-center      
      .col-lg-8.my-3.order-1       
          p(data-aos="fade-down") En las empresas u organizaciones, mantener buenas relaciones humanas es un elemento fundamental para alcanzar las metas y promover el desarrollo. Esto crea una armonía interna que se refleja externamente como seguridad y confianza, generando en los clientes una mayor disposición a confiar en la empresa.

          p(data-aos="fade-down") En el ámbito laboral, las relaciones humanas son fundamentales, ya que su correcta gestión promueve un clima laboral positivo y fomenta la productividad:          
      .col-lg-4.my-3.order-lg-2            
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')                                                                 
    .bg7.p-4.mb-5            
      .bgw.brad2.p-4
        LineaTiempoC.color-acento-contenido 
          .row.justify-content-center(titulo="Clima laboral")  
            .col-lg-6.my-2
              h5.mb-4 Clima laboral
              p Las relaciones humanas juegan un papel crucial en el ámbito laboral, ya que si no se desarrollan de manera amistosa, pueden afectar la productividad y el rendimiento de la empresa.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')                 

          .row.justify-content-center(titulo="Gestión de equipos")  
            .col-lg-6.my-2
              h5.mb-4 Gestión de equipos
              p Los directivos deben esforzarse por formar equipos de trabajo donde prevalezcan buenas relaciones humanas, minimizando las discordias y evitando ambientes conflictivos.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')

          .row.justify-content-center(titulo="Habilidades interpersonales")  
            .col-lg-6.my-2
              h5.mb-4 Habilidades interpersonales
              p No basta con identificar y seleccionar candidatos con excelentes habilidades interpersonales; es vital que las empresas reconozcan el valor de estas habilidades.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='')

          .row.justify-content-center(titulo="Ambiente de trabajo")  
            .col-lg-6.my-2
              h5.mb-4 Ambiente de trabajo
              p Las empresas deben procurar ofrecer un trato justo y equitativo, un buen clima laboral, compensaciones adecuadas, reconocimientos, comunicación abierta, #[i empowerment], capacitación y desarrollo.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')     

    p(data-aos="fade-down") Las buenas relaciones humanas en la empresa no solo facilitan la consecución de objetivos, sino que también contribuyen a un ambiente de trabajo saludable y productivo, donde tanto la organización como sus colaboradores pueden alcanzar sus metas.   

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Ventajas de las buenas relaciones humanas en la empresa 

    .row.justify-content-center.align-items-center 
      .col-lg-4.my-3 
        .bg1.text-white.brad.mb-2.p-2.py-1
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')        
            .col
              p(data-aos="fade-down").mb-0 Personal comprometido.

        .bg1.text-white.brad.mb-2.p-2.py-1
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='')        
            .col
              p(data-aos="fade-down").mb-0 Mejoramiento de la productividad.

        .bg1.text-white.brad.mb-2.p-2.py-1
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='')        
            .col
              p(data-aos="fade-down").mb-0 Mejoramiento del clima laboral.

        .bg1.text-white.brad.mb-2.p-2.py-1
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='')        
            .col
              p(data-aos="fade-down").mb-0 Sentido de pertenencia con la empresa.

        .bg1.text-white.brad.mb-2.p-2.py-1
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg', alt='')        
            .col
              p(data-aos="fade-down").mb-0 Calidad de trabajo en equipo.

        .bg1.text-white.brad.mb-2.p-2.py-1
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')        
            .col
              p(data-aos="fade-down").mb-0 Disminución en los conflictos laborales.
              
      .col-lg-6.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')  


    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Tipos de relaciones humanas

    p(data-aos="fade-down") En ciencias sociales, las relaciones humanas se dividen esencialmente en dos tipos:   

    .row.justify-content-center.mb-5
      .col-lg-4
        .bg2.brad.h-100
          .bg1.bradtop.p-3.text-white.text-center(data-aos="fade-up")
            h5.mb-0 Relaciones primarias 
          .p-4
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')           
            p(data-aos="fade-down").mb-0 Son aquellas consideradas dentro del círculo más cercano e íntimo del individuo, caracterizado por el afecto y la importancia del vínculo. Ejemplos de relaciones primarias son las familiares y amorosas.      

      .col-lg-4
        .bg2.brad.h-100
          .bg1.bradtop.p-3.text-white.text-center(data-aos="fade-up")
            h5.mb-0 Relaciones secundarias 
          .p-4
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='')           
            p(data-aos="fade-down").mb-0 Son vínculos determinados por la necesidad o utilidad de la relación. Ejemplos de relaciones secundarias incluyen la relación profesional entre empleador y empleado, la relación cliente-proveedor, o la relación médico-paciente.   

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Relaciones secundarias

    p(data-aos="fade-down") Son vínculos determinados por la necesidad o utilidad de la relación. Por ejemplo, una relación profesional con el empleador, relación cliente-proveedor, relación médico-paciente.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Relaciones familiares" :icono="require('@/assets/curso/temas/28.svg')")
        .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Relaciones familiares
              p Primera interacción que tiene toda persona, es el primer eslabón que enseña al ser humano cómo relacionarse dentro de la sociedad.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')       

      .py-4.py-md-5(titulo="Relaciones escolares" :icono="require('@/assets/curso/temas/29.svg')")
        .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Relaciones escolares
              p Es en este tipo de relación humana donde el niño comienza a entender cómo interactuar en la sociedad.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='')   

      .py-4.py-md-5(titulo="Relaciones de amistad" :icono="require('@/assets/curso/temas/30.svg')")
        .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Relaciones de amistad
              p Vínculo creado entre dos o más personas que se consideran como amigos.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')       

      .py-4.py-md-5(titulo="Relaciones laborales" :icono="require('@/assets/curso/temas/31.svg')")
        .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Relaciones laborales
              p Dentro del área de trabajo, se da el vínculo entre el empleado y el jefe, del cual depende el desarrollo de la empresa.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')   

      .py-4.py-md-5(titulo="Relaciones sociales" :icono="require('@/assets/curso/temas/32.svg')")
        .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Relaciones sociales
              p Se refiere al vínculo que se crea con otros dentro del círculo social.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')       

      .py-4.py-md-5(titulo="Relaciones amorosas" :icono="require('@/assets/curso/temas/33.svg')")
        .row.justify-content-center
            .col-lg-6.my-2
              h5.mb-4 Relaciones amorosas
              p Nexo que se genera entre dos personas, y del cual se mantiene el compromiso, la pasión y la amistad de ambos integrantes de la pareja.
            .col-lg-5.my-2 
              img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')


    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Claves para tener en cuenta en las relaciones humanas    

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col.order-1.pt-4.pt-md-4.pt-lg-0
        p(data-aos="fade-down").mb-0 Toda relación humana implica necesariamente la participación de al menos dos individuos. A partir de sus interacciones, las personas pueden desarrollar una vida compartida de manera amistosa y cordial. La clave reside en aceptar ciertas normas que todos los integrantes de la comunidad deben respetar y en no infringir los derechos individuales de cada persona.
      .col-lg-auto.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='') 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Relación humana con un cliente o usuario

    p(data-aos="fade-down").mb-5 Se destacan seis aspectos relevantes para interactuar con un cliente o usuario:

    .row.justify-content-center.mb-4
      .col-auto(data-aos="flip-down") 
        .bg8.px-3.py-2.brad.text-white
          h5.mb-0 Relación humana con un cliente o usuario

    .bg7.p-4.mb-5            
      .bgw.brad2.p-4
        PasosB.color-acento-contenido 
          .row.justify-content-center(titulo="")
            .col-lg-7.p-0 
              img.img-mov(src='@/assets/curso/temas/41.svg', alt='')  
            .col-lg-4.my-2
              .bg3.p-4.brad 
                p.mb-0 Busque la satisfacción total en cada cliente o usuario: un cliente o usuario nunca debe ser visto como una interrupción.

          .row.justify-content-center(titulo="")
            .col-lg-7.p-0 
              img.img-mov(src='@/assets/curso/temas/42.svg', alt='')  
            .col-lg-4.my-2
              .bg3.p-4.brad 
                p.mb-0 Deje la vida personal en casa: no permita que su estado de ánimo personal afecte la manera en que trata a un cliente o usuario. 

          .row.justify-content-center(titulo="")
            .col-lg-7.p-0 
              img.img-mov(src='@/assets/curso/temas/43.svg', alt='')  
            .col-lg-4.my-2
              .bg3.p-4.brad 
                p.mb-0 Salude cortésmente a cada cliente o usuario: es importante saludar a quien esté atendiendo. 

          .row.justify-content-center(titulo="")
            .col-lg-7.p-0 
              img.img-mov(src='@/assets/curso/temas/44.svg', alt='')  
            .col-lg-4.my-2
              .bg3.p-4.brad 
                p.mb-0 Nunca juzgue al cliente o usuario por su apariencia: ante todo, mantenga el respeto. 

          .row.justify-content-center(titulo="")
            .col-lg-7.p-0 
              img.img-mov(src='@/assets/curso/temas/45.svg', alt='')  
            .col-lg-4.my-2
              .bg3.p-4.brad 
                p.mb-0 No interrumpa; escuche al cliente o usuario: espere a que termine de hablar; cada palabra es importante para brindar una orientación adecuada.

          .row.justify-content-center(titulo="")
            .col-lg-7.p-0 
              img.img-mov(src='@/assets/curso/temas/46.svg', alt='')  
            .col-lg-4.my-2
              .bg3.p-4.brad 
                p.mb-0 Trate a los demás como quisiera ser tratado: las personas empáticas son capaces de escuchar a los demás y entender sus problemas y motivaciones. Por ello, suelen ser altamente reconocidas socialmente y populares, ya que se anticipan a las necesidades, incluso antes de que sus compañeros sean conscientes de ellas, y saben identificar y aprovechar las oportunidades comunicativas que les ofrecen otras personas.  

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Consejos para tener buenas relaciones humanas en el trabajo

    p(data-aos="fade-down").mb-5 Existen siete aspectos esenciales para establecer relaciones humanas en el ámbito laboral, aplicables también al ámbito personal:

    .row.justify-content-center.mb-4     
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')     
      .col-lg-9.my-3 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Conocerse a sí mismo")
            p.mb-0 Las relaciones con el entorno dependen de lo que cada persona es. La autoobservación permite detectar puntos fuertes y débiles al relacionarse, analizando cómo se interactúa con compañeros de trabajo, familiares, amigos e hijos. Esto ayuda a identificar aspectos que fortalecen las relaciones y reconducirlos hacia un buen fin. 

          div(titulo="Comunicación efectiva")
            p.mb-0 La comunicación es esencial en la vida social y laboral. Para lograrla, es importante reconocer y minimizar las barreras que surgen. En las empresas, la comunicación eficaz facilita el trabajo en equipo y la toma de decisiones conjuntas, lo que es clave para el éxito organizacional.  

          div(titulo="Escucha activa")
            p.mb-0 La escucha activa se interrumpe al juzgar, interrumpir o ofrecer opiniones no solicitadas. Estas acciones distorsionan el mensaje y desalientan la comunicación, lo que puede llevar a errores y malentendidos.

          div(titulo="Uso adecuado del <i>feedback</i>")
            p.mb-0 El #[i feedback] es la respuesta que se da al emisor sobre cómo se ha entendido el mensaje o sobre aspectos relevantes. Es clave para asegurar una comunicación clara y efectiva, ayudando a ambos lados a comprenderse mutuamente.                         

    .row.justify-content-center.mb-4 
      .col-lg-8.my-3 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Gestión de conflictos")
            p.mb-0 Una mala gestión de los conflictos puede causar problemas graves, como baja autoestima y pérdida de cohesión grupal. Es crucial abordar y resolver los conflictos de manera oportuna para mantener un ambiente de trabajo saludable. 

          div(titulo="Actuar con respeto y educación")
            p.mb-0 Mantener relaciones respetuosas y educadas implica demostrar consideración por los demás en todas las interacciones. Esto se refleja en la elección de palabras y acciones que muestran respeto genuino hacia los otros.     

          div(titulo="Mantener un estado de buen humor")
            p.mb-0 El buen humor es fundamental para mantener relaciones interpersonales positivas. Es importante conservarlo durante la jornada laboral y transmitirlo a las personas que le rodean, facilitando una comunicación más agradable y efectiva.               
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')  

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 La comunicación afectiva en las relaciones humanas

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-8.my-3.order-1       
          p(data-aos="fade-down") La comunicación, al igual que las relaciones humanas, está íntimamente ligada al ser humano, ya que es a través de ella que los individuos interactúan, intercambiando ideas, sentimientos, pensamientos, entre otros. Sin comunicación, no habría posibilidad de que el ser humano se relacionase eficazmente con sus semejantes.

          p(data-aos="fade-down") Para demostrar la importancia de la comunicación afectiva, podemos comenzar con la definición de la Real Academia Española:   
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.fst-italic  Acción y efecto de comunicar o comunicarse"; "Trato o correspondencia entre dos o más personas"; "Transmisión de señales mediante un código común al emisor y al receptor"; "Papel escrito en que se comunica algo oficialmente.
              i.fas.fa-quote-right                
      .col-lg-4.my-3.order-lg-2            
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')  

    p(data-aos="fade-down") La comunicación afectiva se define como el proceso que permite una interacción entre una persona que emite y recibe información con otras personas, ya sea de forma hablada o escrita, además de incluir aspectos no verbales que muestran afecto o sensibilidad.
    .row.justify-content-center.align-items-center      
      .col-lg-8.my-3.order-1  
        p(data-aos="fade-down").mb-4 Es importante mencionar que la afectividad no solo se encuentra en el emisor, sino también en el receptor del mensaje. Al recibir y decodificar un mensaje, el receptor también refleja indicadores afectivos en su respuesta. Estos aspectos afectivos no solo se expresan verbalmente, sino también a través de actitudes, gestos, postura corporal y mirada, reflejando su respuesta al mensaje del emisor.      
        .row.justify-content-center.align-items-center.bg10.p-3.brad(data-aos="fade-right")
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='')        
          .col.pt-lg-0.pt-md-4
            p(data-aos="fade-down").mb-0 La función afectiva de la comunicación se refiere a toda la gama de emociones, sentimientos y vivencias que aparecen y se desarrollan en la comunicación y que se expresan en la necesidad del ser humano de compartir sus impresiones y de sentirse comprendido. Esta definición evidencia la estrecha relación entre la función afectiva de la comunicación y la función informativa. 

      .col-lg-4.my-3.order-lg-2            
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='') 

    p(data-aos="fade-down") Aplicar la comunicación afectiva en la interacción diaria favorece la calidad de las relaciones humanas, facilitando el desarrollo de relaciones más duraderas y efectivas, que permitan el crecimiento del individuo en la sociedad.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
