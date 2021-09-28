<template lang="pug">
div
    q-btn(label="Añadir estudiantes" unelevated color="primary" size="sm" no-caps @click="dialogOpen")
    q-dialog(v-model="dialog")
        q-card.shadow-24
            q-toolbar
                q-toolbar-title.text-body2 Generación: #[span.text-bold.text-primary {{generacion.name}}]
            q-card-section
                q-list(dense separator)
                    q-item(v-for="(i, index) in estudiantes")
                        q-item-section(side): q-checkbox(v-model="i.currentGen" @click="addRemoveGen(i)")
                        q-item-section
                            .text-body1 {{i.name}}
                            .text-caption.text-grey {{i.tituloInvestigacion}}

            q-inner-loading(:showing="loading")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import _ from 'lodash'
export default {
    props: ['generacion'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const dialog = ref(false)


        
        const dialogOpen = () => {

            dialog.value = true
            loadStudents()
        }
        
        const loading = ref(true)
        const estudiantes = ref(null)
        const generacionModel = ref(null)

        const loadStudents = () => {
            loading.value = true
            $store.dispatch('api/GetUsersByGroup', 'estudiante').then(res2 => {
                estudiantes.value = []
                for(var i in res2){
                    if(res2[i].active){
                    estudiantes.value.push(res2[i])
                    }
                }
                // ------ call
                $store.dispatch('api/GetAllData', 'estudiantes').then(res3 => {
                    for(var i in estudiantes.value){
                        const mergeUsers = res3.filter(function(value, index, arr){
                            return value.user_id == estudiantes.value[i]._id
                        })
                        _.merge(estudiantes.value[i], mergeUsers[0])
                        estudiantes.value[i].currentGen = _.isEqual(estudiantes.value[i].generacion, props.generacion)
                    }
                    loading.value = false
                })
            })

        }


        const addRemoveGen = (item) => {


            var req = {
                coll: 'estudiantes',
                _id: item._id,
                generacion: item.currentGen?props.generacion:''
            }
            $store.dispatch('api/SaveItem', req).then(res => {
                console.log(res)
                $q.notify('Estudiante actualizado')
            })
        }
        return {
            loading,
            dialog,
            dialogOpen,
            estudiantes,
            generacionModel,
            addRemoveGen
        }

    }
}
</script>