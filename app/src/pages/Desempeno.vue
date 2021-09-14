<template lang="pug">
q-page(padding)
  q-form.row.q-col-gutter-md
    .col-12
      q-card.shadow-24.text-dark.bg-white: q-card-section().text-center
            .text-grey Investigación
            div.text-h6.text-bold.text-primary La complejidad y el análisis del discurso
            .text-body1.text-secondary Carlos Javier Estud De Prueba
    

    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md Análisis
              .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="item.analisisValue" inline)
            q-card-section
              q-input(v-model="item.analisis" filled type="textarea" label="Análisis")
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md Estructura
              .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="item.estructuraValue" inline )
            q-card-section
              q-input(v-model="item.estructura" filled type="textarea" label="Estructura")
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md Redacción
              .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="item.redaccionValue" inline )
            q-card-section
              q-input(v-model="item.redaccion" filled type="textarea" label="Redacción")
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md Argumentación
              .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="item.argumentacionValue" inline )
            q-card-section
              q-input(v-model="item.argumentacion" filled type="textarea" label="Argumentación")
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md ¿Cómo considera que ha sido el desempeño del estudiante?
              .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="item.argumentacionValue" inline )
    .col-6
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md Fortalezas
              .text-caption: q-option-group(:options="calificadoresAlt" type="radio" v-model="item.fortalezas")
    .col-6
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md Debilidades
              .text-caption: q-option-group(:options="calificadoresAlt" type="radio" v-model="item.debilidades")
           
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md ¿Cuál es el porcentaje de avance de la investigación del estudiante?
              .row.items-center.justify-center
                .col-sm-6
                  q-input(v-model="item.porcentaje" standout="bg-primary text-white"  label="Porcentaje")
                    template(v-slot:append): .text-bold.text-h6 %
                  q-card.bg-dark.q-mt-md
                    q-card-section
                      q-input(v-model="item.calificacion" standout dark  label="Calificación" )
                        template(v-slot:prepend): q-icon(name="sports_score")
                .col-sm-6.co
                  apexchart(width="100%" type="radialBar" :options="options" :series="[item.porcentaje]")
    
    .col-12.text-center: q-btn(label="Guardar" color="primary" unelevated type="submit")
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components:{

  },
  setup () {
    const $store = useStore()
    const userData = computed (() => {
      return $store.getters['api/getUser']
    }) 
    const item = ref({
        analisisValue: 0,
        estructuraValue: 0,
        redaccionValue: 0,
        argumentacionValue: 0,
        analisis: null,
        estructura: null,
        redaccion: null,
        argumentacion: null,
        desempeno: 'o1',
        fortalezas: null,
        debilidades: null,
        porcentaje: 50,
        calificacion: 8
    })
    return {
      userData,
      item,
      calificadores: [
        { label: 'Excelente', value: 0 },
        { label: 'Bueno', value: 1 },
        { label: 'Suficiente', value: 2 },
        { label: 'No satisfactorio', value: 3 },
      ],
      calificadoresAlt: [
        { label: 'A', value: 0 },
        { label: 'B', value: 1 },
        { label: 'C', value: 2 },
        { label: 'D', value: 3 },
      ],
      options: { labels: ['Avance'] }
    }
  }
}
</script>


<style lang="scss">
.desempenoradios .q-radio__label {
    font-weight: bold;
    line-height: 1;
}
.desempenoradios .q-radio__label:after {
    font-weight: normal;
    display: block;
    color: #9E9E9E;
    max-width: 120px;
    font-size: 0.7rem;
}
.desempenoradios .q-option-group > div:nth-child(1) .q-radio__label:after {
    content: "Completamente seguro";
}
.desempenoradios .q-option-group > div:nth-child(2) .q-radio__label:after {
    content: "Seguro";
}
.desempenoradios .q-option-group > div:nth-child(3) .q-radio__label:after {
    content: "Casi seguro";
}
.desempenoradios .q-option-group > div:nth-child(4) .q-radio__label:after {
    content: "No es seguro";
}

</style>