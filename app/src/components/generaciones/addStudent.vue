<template lang="pug">
div
    q-btn(label="Administrar estudiantes" unelevated color="primary" size="sm" no-caps @click="dialogOpen")
    q-dialog(v-model="dialog" full-width)
        q-card.shadow-24
            q-card-section
                .row.full-width.q-col-gutter-md
                    .col-6
                        q-card.shadow-24.bg-dark.text-white: q-card-section
                            q-list(dense separator)
                                q-item: .text-h6 Estudiantes en #[span.text-bold.text-accent {{generacion.name}}] generación.
                                template(v-for="(i, index) in estudiantes")
                                    q-item( v-if="i.currentGen")
                                        q-item-section(side): q-checkbox(v-model="i.currentGen" @click="addRemoveGen(i)" color="secondary")
                                        q-item-section
                                            .text-body1 {{i.user.name}}
                                            .text-caption.text-grey Generación actual: #[strong {{i.generacion.name}}]
                    .col-6
                        q-card.shadow-24: q-card-section
                            q-list(dense separator)
                                q-item: .text-caption Estudiantes
                                template(v-for="(i, index) in estudiantes")
                                    q-item( v-if="!i.currentGen")
                                        q-item-section(side): q-checkbox(v-model="i.currentGen" @click="addRemoveGen(i)")
                                        q-item-section
                                            .text-body1 {{i.user.name}}
                                            .text-caption.text-grey Generación actual: #[strong {{i.generacion.name}}]

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

        

        const loadStudents = async () => {
            loading.value = true
            /*
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
            */

            estudiantes.value = await $store.dispatch('api/GetAllData', 'estudiantes')
            for(var i in estudiantes.value){
                estudiantes.value[i].currentGen = _.isEqual(estudiantes.value[i].generacion, props.generacion)
            }
            loading.value = false
        }


        const addRemoveGen = (item) => {


            var req = {
                coll: 'estudiantes',
                _id: item._id,
                generacion: item.currentGen?props.generacion:''
            }
            $store.dispatch('api/SaveItem', req).then(res => {
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