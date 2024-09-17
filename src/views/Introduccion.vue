<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down").mb-4 Las relaciones humanas son parte integral de la vida cotidiana, ya que engloban todas las interacciones dentro de una sociedad o comunidad. Al interactuar con otra persona, se genera un vínculo que, a menudo, se basa en la jerarquía y se desarrolla a través de la comunicación.
            .row.justify-content-center.align-items-center      
              .col-lg-7.my-3.order-1 
                .bg1.brad.p-4.mb-4.text-white              
                  p(data-aos="fade-down").mb-0 El potencial de desarrollo de un individuo está influenciado por las relaciones humanas que establece, lo que significa que los vínculos que forme a lo largo de su vida pueden ser un trampolín o, por el contrario, jugar en su contra.
                .row.justify-content-center.align-items-center(data-aos="fade-right")
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')        
                  .col.pt-lg-0.pt-md-4
                    p(data-aos="fade-down").mb-0 A menudo, las relaciones humanas se ven truncadas porque no se desarrollan de manera óptima, lo que puede generar frustración y pérdida de oportunidades para la persona que enfrenta estas dificultades. Por ello, es fundamental conocer la importancia de las relaciones humanas, sus tipos y las herramientas que pueden aplicarse para establecer relaciones respetuosas a través de la comunicación afectiva, logrando así interacciones eficaces.                
              .col-lg-5.my-3.order-lg-2            
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')           
    
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
