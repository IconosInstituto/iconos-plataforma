<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md
      .col-12: q-card.shadow-24.bg-dark: q-card-section
        q-icon(name="person" color="white" size="md").q-mr-sm
        span.text-bold.text-primary.text-white {{user.name}}
      .col-6: q-card.shadow-24: q-card-section
        div
          span.text-grey Cuenta: 
          span.text-bold.text-primary {{user.user}}
      .col-6: q-card.shadow-24: q-card-section
        div
          span.text-grey Generación: 
          span.text-bold.text-primary {{userData.generacion || '- -'}}
          editThis(v-if="!loading" :value="userData.generacion" field="generacion" label="Generación" coll="estudiantes" :user_id="user._id" :id="userData._id" @modified="loadItem" key="generacion")


      .col-12.col-md-6: q-card.shadow-24
        q-card-section: q-select(dense label="Beca" standout="bg-primary text-white" :options="['CONACYT', 'SIN BECA']" v-model="userData.beca")
      .col-12.col-md-6: q-card.shadow-24
        q-card-section
          .flex.justify-center
            q-radio(label="Activo" v-model="userData.status" val="ACTIVO")
            q-radio(label="Egresado" v-model="userData.status" val="EGRESADO")
            q-radio(label="Baja" v-model="userData.status" val="BAJA")
      .col-12
        q-card.shadow-24
          q-card-section: div
            span.text-grey Director: 
            span.text-bold.text-primary D. Pérez González Joquín Dal.

      .col-12: q-card.shadow-24
          q-card-section(v-for="(i, index) in userTesis").text-center
            .text-grey Título de Investigación
            div.text-h6.text-bold.text-primary {{i.titulo || '- -'}}
              editThis(v-if="!loading" :value="i.titulo" field="titulo" label="Título de tésis" coll="tesis" :user_id="user._id" :id="i._id"  @modified="loadItem" key="tituloTesis")


    .q-mt-xl: q-separator(spaced)

    .text-h6.text-dark.q-my-md Periodos
    
    .row.q-col-gutter-md
      .col-6.col-sm-3(v-for="(i, index) in 12")
        q-card.shadow-24
          q-card-section
            q-checkbox(:label="'Periodo '+ i" :key="i" left-label v-model="periodos[i]")
    
    
    
    .q-mt-xl: q-separator(spaced)

    .text-h6.text-dark.q-my-md Coloquios / Candidaturas
    
    .row.q-col-gutter-md
      .col-12
          q-card.shadow-24
            q-card-section
              .row.full-width.items-center
                .col-6: q-checkbox(label="1er Coloquio" v-model="coloquios[0]")
                .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
      .col-12
          q-card.shadow-24
            q-card-section
              .row.full-width.items-center
                .col-6: q-checkbox(label="2do Coloquio" v-model="coloquios[0]")
                .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
      .col-12
          q-card.shadow-24
            q-card-section
              .row.full-width.items-center
                .col-6: q-checkbox(label="Exámen de candidatura" v-model="coloquios[0]")
                .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
      .col-12
          q-card.shadow-24
            q-card-section
              .row.full-width.items-center
                .col-6: q-checkbox(label="Examen de grado" v-model="coloquios[0]")
                .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
        
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import editThis from 'components/editThis.vue'
export default {
    components: {
      editThis
    },
  setup () {
    const $route = useRoute()
    const $store = useStore()

    const user = ref({name:'', user: ''})
    const userData = ref({generacion: '', })
    const userTesis = ref([{titulo:''}])
    const loading = ref(true)

    const periodos = ref([])
    const coloquios = ref([])


    const loadItem = () => {
      $store.dispatch('api/GetSingleUser', $route.params.id).then(res => {
        user.value = res
        // ------ call
        $store.dispatch('api/GetSingleData', {coll: 'estudiantes', id: $route.params.id}).then(res => {
          if(res.length){
            userData.value = res[0]
          }
          // ------ call
          $store.dispatch('api/GetSingleData', {coll: 'tesis', id: $route.params.id}).then(res => {
            if(res.length){
              userTesis.value = res
            }
            loading.value = false
          })
        })
      })
      
      
    }

    loadItem()
   
    return {
      user,
      userData,
      userTesis,
      loadItem,
      loading,
      periodos,
      coloquios
    }
  },

}
</script>


<style lang="scss" scoped>

</style>