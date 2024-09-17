<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-5.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis   presenta las relaciones humanas en el contexto de la empresa, abordando los tipos de relaciones como: primarias y secundarias, las claves para mantener relaciones efectivas como respeto, calidad en las relaciones, y comunicación efectiva, el rol de la empresa en estas interacciones, las ventajas que ofrecen como el sentido de pertenencia y mejora del clima laboral, y ejemplos de diferentes tipos de relaciones en la vida personal y profesional.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
