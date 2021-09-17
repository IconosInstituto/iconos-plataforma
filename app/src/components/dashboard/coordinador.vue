<template lang="pug">
div
    .row.q-col-gutter-md
        .col-6
            .row.q-col-gutter-md
                .col-sm-6.col-12: usuariosactivos(usergroup="estudiante")
                .col-sm-6.col-12: usuariosactivos(usergroup="docente")
                .col-12: q-card.shadow-24
                    q-card-section.text-center
                        q-icon(name="date_range" color="secondary" size="md")
                        .text-body2.text-dark Periodo activo
                        q-linear-progress(:value=".8").q-my-sm
                        span.text-caption.text-grey
                            | 2021/11/01
                            span.text-primary.text-bold.q-mx-sm - 
                            | 2021/12/31
        .col-6: notificaciones


    q-separator(spaced)
    
    .row.q-col-gutter-md
        .col-3: q-card.shadow-24
            q-card-section.text-center
                .text-body2.text-dark Análisis
                apexchart(width="100%" type="pie" :options="options" :series="series")
        .col-3: q-card.shadow-24
            q-card-section.text-center
                .text-body2.text-dark Estructura
                apexchart(width="100%" type="pie" :options="options" :series="series")
        .col-3: q-card.shadow-24
            q-card-section.text-center
                .text-body2.text-dark Redacción
                apexchart(width="100%" type="pie" :options="options" :series="series")
        .col-3: q-card.shadow-24
            q-card-section.text-center
                .text-body2.text-dark Argumentación
                apexchart(width="100%" type="pie" :options="options" :series="series")
       
</template>


<script>

import usuariosactivos from 'components/dashboard/coordinador/usuariosactivos'
import notificaciones from 'components/dashboard/coordinador/notificaciones'
export default {
    components: {
        usuariosactivos,
        notificaciones
    },
    setup () {
        return {
            series: [5, 4, 2, 1],
            options: { 
                labels: ['Excelente', 'Bueno', 'Satisfactorio', 'No satisfactorio'],
                legend:{ show: false }
            }
        }
    }
}
</script>