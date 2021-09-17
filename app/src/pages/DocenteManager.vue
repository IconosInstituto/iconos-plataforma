<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md
      .col-12: q-card.shadow-24.bg-dark: q-card-section
        q-icon(name="assignment_ind" color="white" size="md").q-mr-sm
        span.text-bold.text-primary.text-white {{user.name}}
    
    .text-h6.text-dark.q-my-md Asignar estudiantes

    .row.q-col-gutter-md
      .col-12: q-card.shadow-24: q-card-section
        q-inner-loading(:showing="loading")
        q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="estudiantes" :columns="columns" dense v-if="!loading")
            template(v-slot:body="props")
                q-tr(:props="props")
                    q-td(key="name" :props="props")  {{props.row.name}}
                    q-td(key="generacion" :props="props")  {{props.row.generacion.name}}
                    //q-td(key="director" :props="props"): q-checkbox
                    //q-td(key="lector" :props="props"): q-checkbox
        p {{estudiantes}}
    //
        .q-mt-xl: q-separator(spaced)

        .text-h6.text-dark.q-my-md Periodos

        .row.q-col-gutter-md
        .col-6.col-sm-3(v-for="(i, index) in 12")
            q-card.shadow-24
            q-card-section
                q-checkbox(:label="'Periodo '+ i" :key="i" left-label v-model="periodos[i]")
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import editThis from 'components/editThis.vue'
import _ from 'lodash'
export default {
    components: {
      editThis
    },
  setup () {
    const $route = useRoute()
    const $store = useStore()

    const user = ref({name:'', user: ''})
    const userData = ref({generacion: '', })
    
    
    const loading = ref(true)

    const estudiantes = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'generacion', label: 'Generación', field: 'generacion', align:'left' },
        { name: 'director', label: 'Director', align:'center' },
        { name: 'coloquio', label: 'Lector Coloquio', align:'center' },
        { name: 'candidatura', label: 'Lector Candidatura', align:'center' },
    ]


    const loadItem = () => {
      $store.dispatch('api/GetSingleUser', $route.params.id).then(res => {
        user.value = res
        // ------ cal
        
        $store.dispatch('api/GetUsersByGroup', 'estudiante').then(res2 => {
          estudiantes.value = []
          for(var i in res2){
            if(res2[i].active){
              estudiantes.value.push(res2[i])
            }
          }
          // ------ call
          $store.dispatch('api/GetAllData', 'estudiantes').then(res3 => {
              for(var i in estudiantes.value){
                const mergeUsers = res3.filter(function(value, index, arr){
                  return value.user_id == estudiantes.value[i]._id
                })
                _.merge(estudiantes.value[i], mergeUsers[0])
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
      loadItem,
      loading,
      columns,
      estudiantes,
    }
  },

}
</script>


<style lang="scss" scoped>

</style>