<template lang="pug">
q-page(padding)

        q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="items" :columns="columns" dense)
            template(v-slot:top)
                .flex.justify-end.full-width: q-btn(label="Nuevo periodo"  color="primary" unelevated   no-caps)
            template(v-slot:body="props")
                q-tr(:props="props")
                    q-td(key="name" :props="props").text-bold {{props.row.name}}
                    q-td(key="startDate" :props="props")  {{props.row.startDate}}
                    q-td(key="endDate" :props="props")  {{props.row.endDate}}
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

    
    
    const loading = ref(true)

    const items = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'startDate', label: 'Inicio', field: 'startDate', align:'center' },
        { name: 'endDate', label: 'Fin', field: 'endDate', align:'center' },
    ]


    const loadItem = () => {

      $store.dispatch('api/GetAllData', 'periodos').then(res => {
            items.value = res
            loading.value = false
      })
      
      
    }

    loadItem()
   
    return {
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