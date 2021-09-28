<template lang="pug">
q-card.shadow-24
    q-card-section
        .text-h6.text-primary Firma
        .text-caption Añada su firma para utilizarla en los reportes CONACYT
        .text-center
            q-btn(color="primary" :label="userdata.firma?'Actualizar firma':'Añadir firma'" unelevated @click="openDialogFirma" v-if="!dialogFirma" no-caps)
        
        template(v-if="dialogFirma")
            .row.q-col-gutter-md.items-center.justify-center
                .col-sm-6.text-center(v-if="userdata.firma")
                    q-card.bg-grey.q-ma-md(style="max-width: 380px").q-mx-auto
                        q-card-section.text-center
                            .text-caption.text-white Firma almacenada
                            q-img(:src="userdata.firma" style="width:100%; max-width: 380px")
                .col-sm-6: q-card.bg-primary.q-ma-md(style="max-width: 380px").q-mx-auto
                    q-card-section.text-center
                        .text-caption.text-white Trace su firma en el recuadro inferior.
                        VueSignaturePad(width="320px" height="180px" ref="signature").bg-white.q-mx-auto
                        .row.q-mt-md.items-center
                            .col-6: q-btn(label="Limpiar" unelevated color="primary" size="sm" no-caps @click="signature.clearSignature()")
                            .col-6: q-btn(label="Guardar firma" unelevated color="primary"  no-caps @click="saveSignature")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['userdata', 'user'],
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const dialogFirma = ref(false)
        const signature = ref()

        const saveSignature = () => {
            const req = {
                coll: props.user.group+'s',
                _id: props.userdata._id,
                firma: signature.value.saveSignature().data
            }
            $store.dispatch('api/SaveItem', req).then(res => {
                $q.notify('Firma actualizada')
                context.emit('reload')
            })

        }
        const openDialogFirma = () => {
            dialogFirma.value = true
        }
        
        return {
            dialogFirma,
            openDialogFirma,
            signature,
            saveSignature,
        }

    }
}
</script>