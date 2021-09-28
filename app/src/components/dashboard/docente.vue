<template lang="pug">
div
    q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="asignaciones" :columns="columns")
        template(v-slot:body="props")
            q-tr(:props="props" @click="openit(props.row)").cursor-pointer
                q-td(key="estudiante" :props="props")
                    .text-caption {{findUserData(props.row.asignacion.estudiante.user_id).name}}
                    .text-body2.text-dark.text-bold {{ props.row.asignacion.estudiante.tituloInvestigacion}}
                    .porcentaje: div(:style="'width:'+ props.row.porcentaje + '%'")
                //q-td(key="estudiante" :props="props"): div.text-body1 {{ findUserData(props.row.asignacion.estudiante.user_id).name }}
                //q-td(key="titulo" :props="props"): div.text-caption(style="max-width: 400px; white-space: normal;") {{ props.row.asignacion.estudiante.tituloInvestigacion }}
                q-td(key="generacion" :props="props") {{ props.row.asignacion.estudiante.generacion.name }}
                q-td(key="periodo" :props="props") {{props.row.asignacion.periodo.name}}
                q-td(key="tipo" :props="props" :class="props.row.tipo=='director'?'text-primary':'text-secondary'").text-capitalize.text-bold {{props.row.tipo}}
                q-td(key="calificacion" :props="props") {{props.row.calificacion}}
                q-td(key="firmaconacyt" :props="props") {{props.row.firmaconacyt ? 'Firmado' : '-'}}
                q-td(key="firmaCoordinador" :props="props") {{props.row.firmaCoordinador ? 'Firmado' : '-'}}
    //div(v-for="(i, index) in asignaciones")
        p {{i.asignacion}}
        //p {{estudiantes}}

</template>


<script>
import {ref, computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import _ from 'lodash'
export default {
    setup (){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const loading = ref(false)

        const findUserData = (id) => {
            return _.find(estudiantes.value, {_id:id});
        }

        const user = computed (() => {
            return $store.getters['api/getUser']
        })

        const asignaciones = ref([])
        const estudiantes = ref([])


        const loadItems = () => {
            const request = {
                docente: user.value.id
            }
            $store.dispatch('api/GetUsersByGroup', 'estudiante').then(res => {
                var students = []
                for(var i  in res){
                    if(res[i].active){
                        students.push(res[i])
                    }
                }
                estudiantes.value = students
                $store.dispatch('api/GetAllDataFilteredV2', ['asesores', request]).then(res =>{
                    asignaciones.value = res 
                })
            })

        }
        
        loadItems()

        
        const openit = (item) => {
            const asesores = item._id
            const asignacion = item.asignacion._id
            const estudiante = item.asignacion.estudiante.user_id

            $router.push('/desempeno/'+asesores)
        }
        return{
            columns: [
                { name: 'estudiante', label: 'Investigación', field: 'estudiante', align:'left' },
                { name: 'generacion', label: 'Generación', field: 'asignacion', align:'left' },
                { name: 'periodo', label: 'Periodo', field: 'asignacion', align:'left' },
                { name: 'tipo', label: 'Tipo', field: 'tipo', align:'left' },
                { name: 'calificacion', label: 'Calificacion', field: 'calificacion', align:'center' },
                { name: 'firmaconacyt', label: 'CONACYT', field: 'firmaconacyt', align:'center' },
                { name: 'firmaCoordinador', label: 'Firma de coordinador', field: 'firmaCoordinador', align:'center' },

            ],
            loading,
            openit,
            asignaciones,
            estudiantes,
            findUserData
        }
    }
}
</script>

<style lang="scss" scoped>
.porcentaje{
    width: 100%;
    height: 6px;
    background: #eee;
    div{
        background: $primary;
        height: 6px;
    }
}

</style>