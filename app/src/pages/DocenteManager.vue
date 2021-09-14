<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md
      .col-12: q-card.shadow-24.bg-dark: q-card-section
        q-icon(name="assignment_ind" color="white" size="md").q-mr-sm
        span.text-bold.text-primary.text-white {{user.name}}
    
    .text-h6.text-dark.q-my-md Asignar estudiantes

    .row.q-col-gutter-md
      .col-12: q-card.shadow-24: q-card-section
        q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="items" :columns="columns" dense)
            template(v-slot:body="props")
                q-tr(:props="props")
                    q-td(key="name" :props="props")  {{props.row.name}}
                    q-td(key="director" :props="props"): q-checkbox
                    q-td(key="coloquio" :props="props"): q-checkbox
                    q-td(key="candidatura" :props="props"): q-checkbox
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

    const items = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'director', label: 'Director', align:'center' },
        { name: 'coloquio', label: 'Lector Coloquio', align:'center' },
        { name: 'candidatura', label: 'Lector Candidatura', align:'center' },
    ]


    const loadItem = () => {
      $store.dispatch('api/GetSingleUser', $route.params.id).then(res => {
        user.value = res
        // ------ cal
        
        $store.dispatch('api/GetUsersByGroup', 'estudiante').then(res => {
          items.value = res
            loading.value = false
          // ------ call
          /*
          $store.dispatch('api/GetSingleData', {coll: 'tesis', id: $route.params.id}).then(res => {
            if(res.length){
              userTesis.value = res
            }
            loading.value = false
          })
          */
        })
      })
      
      
    }

    loadItem()
   
    return {
      user,
      userData,
      loadItem,
      loading,
      items,
      columns
    }
  },

}
</script>


<style lang="scss" scoped>

</style>