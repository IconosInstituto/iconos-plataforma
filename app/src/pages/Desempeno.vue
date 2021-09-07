<template lang="pug">

q-page(padding)
    q-card.shadow-24.text-dark.bg-white
        q-card-section
            .row.items-center
                .col-6.text-body1 Nombre de la investigación
                .col-6.text-right.text-caption 
                    div.text-caption.text-grey 0003305
                    div.text-caption.text-grey.text-bold Estudiante 1

    .q-mt-xs
        q-card.bg-white.shadow-20
            q-card-section
                q-form
                    q-input(v-model="item.analisis" rounded standout  dense  label="Análisis")
                    q-input(v-model="item.estructura" rounded standout  dense  label="Estructura").q-mt-sm
                    q-input(v-model="item.redaccion" rounded standout  dense  label="Redacción").q-mt-sm
                    q-input(v-model="item.argumentacion" rounded standout  dense  label="Argumentación").q-mt-sm
            
                    
                    q-separator(spaced)
                    .q-mt-sm.text-body1.text-dark ¿Cómo considera que ha sido el desempeño del estudiante?
                    .radios.text-dark
                        q-radio(label="Opción 1" color="white" val="o1" v-model="item.desempeno")
                        q-radio(label="Opción 2" color="white" val="o2" v-model="item.desempeno")
                        q-radio(label="Opción 3" color="white" val="o3" v-model="item.desempeno")
                        q-radio(label="Opción 4" color="white" val="o4" v-model="item.desempeno")
                    q-separator(spaced)

                    q-input(v-model="item.fortalezas" rounded standout dense  label="Fortalezas").q-mt-sm
                    q-input(v-model="item.debilidades" rounded standout dense  label="Debilidades").q-mt-sm
                    .text-center.q-mt-lg
                        q-btn(label="Guardar" color="primary" rounded unelevated type="submit")
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
        analisis: null,
        estructura: null,
        redaccion: null,
        argumentacion: null,
        desempeno: 'o1',
        fortalezas: null,
        debilidades: null
    })
    return {
      userData,
      item
    }
  }
}
</script>


<style lang="scss" scoped>

</style>