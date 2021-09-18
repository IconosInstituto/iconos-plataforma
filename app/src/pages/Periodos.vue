<template lang="pug">
q-page(padding)
  .text-h6.text-primary Periodos
  q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="items" :columns="columns")
      template(v-slot:top)
          
          q-card.shadow-24.bg-dark.full-width.q-my-md: q-card-section: q-form(@submit.prevent="submitNew").row.q-col-gutter-md.items-center
              .col: q-input(v-model="newItem.name" label="Nombre" standout="bg-primary text-white" dense dark required)
              .col: q-input(v-model="newItem.startDate" label="Inicio" type="date" standout="bg-primary text-white" dense dark)
              .col: q-input(v-model="newItem.endDate" label="Fin" type="date" standout="bg-primary text-white" dense dark)
              .col.text-right: q-btn(label="Crear periodo"  color="primary" unelevated no-caps :disabled="newItem.name==''" type="submit")
      template(v-slot:body="props")
          q-tr(:props="props")
              q-td(key="name" :props="props").text-bold {{props.row.name}}
              q-td(key="startDate" :props="props")  {{props.row.startDate}}
              q-td(key="endDate" :props="props")  {{props.row.endDate}}
              q-td(key="actions" :props="props")
                q-btn(icon="delete" @click="deleteItem(props.row)" size="xs" padding="4px" color="negative"): q-tooltip Eliminar

  
  
  q-separator(spaced)
  
  //q-card.shadow-24.bg-info.full-width.q-my-md: q-card-section: q-form(@submit.prevent="submitNew").row.q-col-gutter-md.items-center
    .col: q-select(v-model="periodoActual" label="Periodo actual" standout="bg-primary text-white" dense dark required :options="items" option-label="name" map-options)
    .col.text-right: q-btn(label="Establecer periodo actual"  color="primary" unelevated no-caps @click="SetPeriodo")

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

    
    
    const periodoActual = ref(null)

    const loading = ref(true)

    const items = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'startDate', label: 'Inicio', field: 'startDate', align:'center' },
        { name: 'endDate', label: 'Fin', field: 'endDate', align:'center' },
        { name: 'actions' }
    ]

    const newItem = ref({
      name: '',
      startDate: date.formatDate(Date.now(), 'YYYY-MM-DD'),
      endDate: date.formatDate(Date.now(), 'YYYY-MM-DD')
    })

    const submitNew = () => {
      const reqItem = {...newItem.value, coll: 'periodos'}
      $store.dispatch('api/SaveItem', reqItem).then(res=>{
          loadItem()
          newItem.value = {
            name: '',
            startDate: date.formatDate(Date.now(), 'YYYY-MM-DD'),
            endDate: date.formatDate(Date.now(), 'YYYY-MM-DD')
          }
      })
    }

    const loadItem = () => {
      $store.dispatch('api/GetAllData', 'periodos').then(res => {
            items.value = res
            loading.value = false
      })
    }

    const deleteItem = (item) => {
      $q.dialog({
        title: 'Eliminar periodo',
        cancel: 'Cancelar',
        ok: 'Eliminar',
      }).onOk(()=>{
        $store.dispatch('api/RemoveItem', ['periodos', '_id', item._id]).then(res=>{
          loadItem()
          $q.notify('Eliminado')
        })
      })
    }

    loadItem()
   

    const GetPeriodo = () => {
      $store.dispatch('api/GetPeriodo').then(res => {
        periodoActual.value = res.periodo
      })
    }
    const SetPeriodo = () => {
      $store.dispatch('api/SetPeriodo', 'hola').then(res => {
        console.log(res)
        //periodoActual.value = res.periodo
      })
    }
    //GetPeriodo()

    return {
      loadItem,
      loading,
      items,
      columns,
      newItem,
      submitNew,
      deleteItem,
      periodoActual,
      SetPeriodo
    }
  },

}
</script>


<style lang="scss" scoped>

</style>