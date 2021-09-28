<template lang="pug">
div
    q-card.bg-white.shadow-24
        q-card-section
            .text-h6.text-primary.q-mb-md Lectores
            .row.justify-center.text-center
                .col-4(v-for="(i, index) in lectores")
                    q-btn(:label="i.docenteName" color="secondary" @click="openLector(i)" no-caps)
    q-dialog(v-model="dialog")
        q-card
            q-card-section
                .row.q-col-gutter-md.q-mb-md
                    .col-12: q-card.shadow-24
                        q-card-section.text-center
                            .text-grey Lector
                            div.text-body1.text-bold.text-secondary {{activeItem.docenteName}}
                desempeno(:item="activeItem")


</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import desempeno from 'components/desempeno/desempenoViewOnly'
export default {
    props: ['asignacion'],
    components: {desempeno},
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const lectores = ref(null)
        const dialog = ref(false)
        const activeItem = ref(null)
        
        const getLectores = () => {
            const reqLector = {
                asignacion: props.asignacion,
                tipo: 'lector'
                }
                $store.dispatch('api/GetAllDataFilteredV2', ['asesores',reqLector ]).then(res => {
                lectores.value = res
                for(var i in lectores.value){
                    $store.dispatch('api/GetSingleUser', lectores.value[i].docente).then(resDocenteLector => {
                    lectores.value[i].docenteName = resDocenteLector.name
                    })
                }
            })
        }
        getLectores()


        const openLector = (item) => {
            activeItem.value = item
            dialog.value = true
        }

        return {
            lectores,
            openLector,
            dialog,
            activeItem
        }

    }
}
</script>