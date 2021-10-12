<template lang="pug">
div.text-center.q-mt-md
    template(v-if="asignacion.asesores")
        template(v-if="(asignacion.asesores[0].length + asignacion.asesores[1].length) > 0")
            .text-caption.text-grey Para eliminar, no debe haber asesores asignados.
        template(v-else)
            q-btn(label="Eliminar inscripción a periodo" unelevated color="grey" no-caps @click="openDialog" size="sm")
    
    
    q-dialog(v-model="dialog")
        q-card.shadow-24
            q-card-section
                .text-caption Periodos disponibles

</template>
<script>
import {ref, inject, watch} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import difference from 'boot/difference.js'

export default {
    props: ['asignacion'],
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $_ = inject('$_')
        // -- dialog
        const dialog = ref(false)
        
        const contador = ref(0)
        // props.asignacion.asesores[0].length + props.asignacion.asesores[1].length

        const openDialog = () => {
            $q.dialog({
                title: 'Eliminar periodo',
                message: 'Se eliminará la inscripción al periodo <strong>'+ props.asignacion.periodo.name+ '</strong>',
                html: true,
                cancel: 'Cancelar',
                ok: 'Eliminar',
            }).onOk(()=>{
                deletePeriodo(item)
            })
        }

  
        
        return {
            dialog,
            openDialog,


        }
    }
}
</script>