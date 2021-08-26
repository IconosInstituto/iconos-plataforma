<template lang="pug">
q-page.flex.flex-center
  q-card.bg-dark(style="width: 280px;").shadow-20
    q-card-section.text-center.q-my-sm
      img(src="~assets/iconos.png" style="max-height: 30px")
    q-card-section
      q-form
        q-input(label="Usuario" rounded standout dark dense)
        q-input(label="Contraseña" rounded standout dark dense).q-mt-sm
        .text-center.q-mt-lg
          q-btn(label="Ingresar" color="secondary" rounded unelevated to="/dashboard")
      q-separator(spaced)
      .text-center
        q-btn(size="sm" flat label="Recuperar contraseña" padding="0" color="negative")
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLogin'
})
</script>


<style lang="scss" scoped>
.q-page{
    background-color: $dark;
    background-image: url(~assets/pattern.png), linear-gradient($dark, darken($dark, 20%));
    background-size: 140%;
    background-position: center;
    background-blend-mode: overlay, normal;

}
</style>