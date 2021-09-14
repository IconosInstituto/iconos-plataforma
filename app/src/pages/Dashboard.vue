<template lang="pug">
q-page(padding)
  docente(v-if="userData.group == 'docente'")
  coordinador(v-if="userData.group == 'coordinador'")
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import docente from 'components/dashboard/docente'
import coordinador from 'components/dashboard/coordinador'
export default {
  components:{
    docente,
    coordinador
  },
  setup () {
    const $store = useStore()
    const userData = computed (() => {
      return $store.getters['api/getUser']
    }) 
    return {
      userData
    }
  },

  methods: {
    loadItems () {
      
    }
  },
  mounted () {
    this.loadItems()
  }

}
</script>


<style lang="scss" scoped>

</style>