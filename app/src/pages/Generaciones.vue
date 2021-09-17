<template lang="pug">
q-page(padding)
  .text-h6.text-primary Generaciones
  q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="items" :columns="columns")
      template(v-slot:top)
          
          q-card.shadow-24.bg-dark.full-width.q-my-md: q-card-section: q-form(@submit.prevent="submitNew").row.q-col-gutter-md.items-center
              .col: q-input(v-model="newItem.name" label="Nombre" standout="bg-primary text-white" dense dark required)
              .col.text-right: q-btn(label="Crear generación"  color="primary" unelevated no-caps :disabled="newItem.name==''" type="submit")
      template(v-slot:body="props")
          q-tr(:props="props")
              q-td(key="name" :props="props").text-bold {{props.row.name}}
              q-td(key="startDate" :props="props")  {{props.row.startDate}}
              q-td(key="endDate" :props="props")  {{props.row.endDate}}
              q-td(key="actions" :props="props")
                q-btn(icon="delete" @click="deleteItem(props.row)" size="xs" padding="4px" color="negative"): q-tooltip Eliminar

  
  
  q-separator(spaced)
  
  
  
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import editThis from 'components/editThis.vue'
import { date, useQuasar } from 'quasar'
export default {
    components: {
      editThis
    },
  setup () {
    const $q = useQuasar()
    const $route = useRoute()
    const $store = useStore()

    
    
    const loading = ref(true)

    const items = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'actions' }
    ]

    const newItem = ref({
      name: '',
    })

    const submitNew = () => {
      const reqItem = {...newItem.value, coll: 'generaciones'}
      $store.dispatch('api/SaveItem', reqItem).then(res=>{
          loadItem()
          newItem.value={
              name: ''
          }
      })
    }

    const loadItem = () => {
      $store.dispatch('api/GetAllData', 'generaciones').then(res => {
            items.value = res
            loading.value = false
      })
    }

    const deleteItem = (item) => {
      $q.dialog({
        title: 'Eliminar generacion',
        cancel: 'Cancelar',
        ok: 'Eliminar',
      }).onOk(()=>{
        $store.dispatch('api/RemoveItem', ['generaciones', '_id', item._id]).then(res=>{
          loadItem()
          $q.notify('Eliminado')
        })
      })
    }

    loadItem()
   
    return {
      loadItem,
      loading,
      items,
      columns,
      newItem,
      submitNew,
      deleteItem
    }
  },

}
</script>


<style lang="scss" scoped>

</style>