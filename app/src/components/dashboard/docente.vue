<template lang="pug">
div
    q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="data" :columns="columns" dense)
        template(v-slot:body="props")
            q-tr(:props="props" @click="openit(props.row.id)").cursor-pointer
                q-td(key="investigacion" :props="props")
                    .text-body2.text-primary {{props.row.titulo}}
                    .text-caption {{props.row.estudiante}}
                q-td(key="tipo" :props="props") {{props.row.tipo}}


</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup (){
        const $router = useRouter()
        const loading = ref(false)
        const openit = (itemid) => {
            $router.push('/desempeno/'+itemid)
        }
        return{
            data: [
                { id:'abc', titulo: 'La complejidad y el análisis del discurso', estudiante: 'Carlos Javier Estud De Prueba', tipo:'Director' },
                { id: 'cba', titulo: 'Discurso y su complejidad en las humanidades', estudiante: 'Jorge Martín Perea Martínez', tipo:'Lector' },
            ],
            columns: [
                { name: 'investigacion', label: 'Investigación', field: 'investigacion', align:'left' },
                { name: 'tipo', label: 'Tipo', field: 'tipo', align:'left' },
            ],
            loading,
            openit
        }
    }
}
</script>