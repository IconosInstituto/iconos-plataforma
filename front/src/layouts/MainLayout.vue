<template lang="pug">
q-layout(view="lHh lpR lFf")
  q-header().bg-transparent
    .q-pa-sm
      q-toolbar().rounded-borders.bg-dark
        q-btn(:icon="leftDrawerOpen ? 'chevron_left' : 'chevron_right'" @click="toggleLeftDrawer" flat).q-px-xs
        q-toolbar-title.text-body1 Bienvenido
  q-drawer(v-model="leftDrawerOpen" :breakpoint="820")
    .q-pa-sm.full-height
      section.full-height.rounded-borders.shadow-24.text-white.text-bold.drawerContainer
        .q-px-sm.q-py-lg.text-center
          img(alt="Iconos PL" src="~assets/iconos.png" style="height: 24px; vertical-align:middle;")
        
        q-list(separator).q-pa-sm
          q-item(clickable v-for="(i, index) in menuItems" @click="").rounded-borders
            q-item-section(avatar): q-icon(:name="i.icon")
            q-item-section: q-item-label {{i.label}}

        footer.flex.column.q-pa-sm.text-center.items-center
          q-btn(label="Cerrar sesión" rounded color="white" text-color="dark" size="sm" no-caps to="/")
          q-separator(spaced).full-width
          .text-caption.text-negative.copy Instituto de Investigación en Comunicación y Cultura
  q-page-container: router-view/
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',

  components: {

  },
  setup () {

    const menuItems = ref([
      { label: 'Estudiantes', path: '/', icon:'people_alt'},
      { label: 'Candidatura', path: '/', icon:'auto_awesome'},
      { label: 'Desempeño', path: '/', icon:'psychology'},
      { label: 'Configuración', path: '/', icon:'more_vert'},
    ])


    const leftDrawerOpen = ref(true)
    return {
      menuItems,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})
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
.q-toolbar{
    background-image: url(~assets/pattern.png) !important;
    background-size: 50% !important;
    background-repeat: no-repeat !important;
    background-position: right center !important;
    background-blend-mode: overlay;
}
.copy{
  line-height: 1.2;
  font-size: 0.6rem;
}
</style>