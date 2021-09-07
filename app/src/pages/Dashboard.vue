<template lang="pug">
q-page(padding)
  docente(v-if="userData.group == 'docente'")
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import docente from 'components/dashboard/docente'
export default {
  components:{
    docente
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