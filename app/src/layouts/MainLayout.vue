<template lang="pug">
q-layout(view="lHh lpR lFf")
  q-header().bg-transparent
    .q-pa-sm
      q-toolbar().text-dark.bg-white.rounded-borders
        q-btn(:icon="leftDrawerOpen ? 'chevron_left' : 'chevron_right'" @click="toggleLeftDrawer" flat).q-px-xs
        q-toolbar-title.text-body1 Bienvenido, #[strong {{userData ? userData.name : ''}}].
        div.text-right.text-caption 
          div.text-caption.text-dark {{userData ? userData.user: ''}}
          div.text-caption.text-dark.text-bold {{userData ? userData.email: ''}}
  q-drawer(v-model="leftDrawerOpen" :breakpoint="820")
    .q-pa-sm.full-height
      section.full-height.rounded-borders.shadow-24.text-white.text-bold.drawerContainer
        .q-px-sm.q-py-lg.text-center
          //img(alt="Iconos PL" src="~assets/iconos.png" style="height: 24px; vertical-align:middle;")
          q-img(src="~/assets/logodh.png")
        q-list(separator).q-pa-sm
          template( v-for="(i, index) in menuItems" )
            q-item(clickable :to="i.path" active-class="text-accent" v-if="visibleForUser(i)").rounded-borders
              q-item-section(avatar): q-icon(:name="i.icon")
              q-item-section: q-item-label {{i.label}}


        footer.flex.column.q-pa-sm.text-center.items-center
          q-btn(label="Cerrar sesión" rounded color="white" text-color="dark" size="sm" no-caps @click="logoutFN")
          q-separator(spaced).full-width
          q-img(src="~/assets/logouam.png")
          .text-caption.text-negative.copy Instituto de Investigación en Comunicación y Cultura
  q-page-container: router-view/
</template>
<script>
import {ref, computed} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default{
  components: {

  },
  setup () {
    const $store = useStore()
    const $router = useRouter()

    const menuItems = ref([
      { label: 'Inicio', path: '/dashboard', icon:'play_arrow'},
      { label: 'Estudiantes', path: '/estudiantes', icon:'people_alt'},
      { label: 'Candidatura', path: '/candidatura', icon:'auto_awesome'},
      { label: 'Desempeño', path: '/desempeno', icon:'psychology'},
      { label: 'Configuración', path: '/configuracion', icon:'more_vert', group: ['admin']},
      { label: 'Mi cuenta', path: '/mi-cuenta', icon:'badge'},
    ])



    const logoutFN = () => {
      $store.dispatch('api/Logout')
      $router.push('/')
    }
    const leftDrawerOpen = ref(true)


    const userData = computed (() => {
      return $store.getters['api/getUser']
    }) 

    const visibleForUser = (item) => {    
      if(item.group){
        if(item.group.includes(userData.value.group)){
          return true
        } else {
          return false
        }
      } else {

        return true
      }
    }


    return {
      menuItems,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logoutFN,
      userData,
      visibleForUser,
    }
  },
}
</script>

<style lang="scss">
.q-drawer{
  background: transparent !important;
}
.drawerContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $dark;
    background-image: url(~assets/pattern.png), linear-gradient($dark, darken($dark, 20%));
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay, normal;
}
/*
.q-toolbar{
    background-image: url(~assets/pattern.png) !important;
    background-size: 50% !important;
    background-repeat: no-repeat !important;
    background-position: right center !important;
    background-blend-mode: overlay;
}
*/
.copy{
  line-height: 1.2;
  font-size: 0.6rem;
}
</style>