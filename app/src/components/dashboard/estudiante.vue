<template lang="pug">
.row.q-col-gutter-md
    .col-12: q-card.shadow-24
          q-card-section(v-for="(i, index) in userTesis").text-center
            .text-grey Título de Investigación
            div.text-h6.text-bold.text-primary {{i.titulo || '- -'}}
              //editThis(v-if="!loading" :value="i.titulo" field="titulo" label="Título de tésis" coll="tesis" :user_id="user._id" :id="i._id"  @modified="loadItem" key="tituloTesis")
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary Análisis
                q-badge(label="Excelente" color="positive" floating)
                p {{item.analisis}}
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary Estructura
                q-badge(label="Bueno" color="primary" floating)
                p {{item.estructura}}
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary Redacción
                q-badge(label="Suficiente" color="accent" floating)
                p {{item.redaccion}}
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary Argumentación
                q-badge(label="No satisfactorio" color="negative" floating)
                p {{item.argumentacion}}
    
    
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary.q-mb-md ¿Cómo considera que ha sido el desempeño del estudiante?
                .text-body1.flex.justify-center: div.bg-accent.text-white.rounded-borders.q-px-sm Suficiente
    .col-6
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary.q-mb-md Fortalezas
    .col-6
        q-card.bg-white.shadow-24
            q-card-section
                .text-h6.text-primary.q-mb-md Debilidades
           
    .col-12
        q-card.bg-white.shadow-24
            q-card-section
              .text-h6.text-primary.q-mb-md ¿Cuál es el porcentaje de avance de la investigación del estudiante?
              .row.items-center.justify-center
                .col-sm-6.co
                  apexchart(width="100%" type="radialBar" :options="options" :series="[item.porcentaje]")
                .col-sm-6
                  //q-input(v-model="item.porcentaje" standout="bg-primary text-white"  label="Porcentaje" )
                    template(v-slot:append): .text-bold.text-h6 %
                  q-card.bg-dark.q-mt-md
                    q-card-section
                      q-input(v-model="item.calificacion" standout dark  label="Calificación" readonly)
                        template(v-slot:prepend): q-icon(name="sports_score")


</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import editThis from 'components/editThis.vue'
export default {
    components: {
      editThis
    },
    setup (){
        const $router = useRouter()
        const loading = ref(false)
        
        const userTesis = ref([{titulo:'La complejidad y el análisis del discurso'}])

        const openit = (itemid) => {
            $router.push('/desempeno/'+itemid)
        }
        const item = ref({
            analisisValue: 0,
            estructuraValue: 0,
            redaccionValue: 0,
            argumentacionValue: 0,
            analisis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a pulvinar dui. Maecenas tempus turpis tincidunt, dictum magna vel, euismod orci. Nunc vitae ipsum ac erat lobortis iaculis. Quisque metus odio, consectetur quis tempor ut, auctor finibus nisi. Sed eget tempus augue. Vestibulum et venenatis tortor.',
            estructura: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a pulvinar dui.',
            redaccion: 'Maecenas a pulvinar dui. Maecenas tempus turpis tincidunt, dictum magna vel, euismod orci. Nunc vitae ipsum ac erat lobortis iaculis. Quisque metus odio, consectetur quis tempor ut, auctor finibus nisi. Sed eget tempus augue.',
            argumentacion: 'Quisque metus odio, consectetur quis tempor ut, auctor finibus nisi. Sed eget tempus augue.',
            desempeno: 'o1',
            fortalezas: null,
            debilidades: null,
            porcentaje: 50,
            calificacion: 8
        })
        return{
            userTesis,
            item,
            options: { labels: ['Avance'] }
        }
    }
}
</script>