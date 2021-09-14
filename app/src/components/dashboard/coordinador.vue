<template lang="pug">
div
    .row.q-col-gutter-md
        .col-4: q-card(@click="").shadow-24
            q-card-section.text-center
                q-icon(name="people_alt" color="secondary" size="md")
                .text-body2.text-dark Estudiantes activos
                .text-h6.text-primary.text-bold 36
        .col-4: q-card.shadow-24
            q-card-section.text-center
                q-icon(name="contact_page" color="secondary" size="md")
                .text-body2.text-dark Docentes activos
                .text-h6.text-primary.text-bold 14
        .col-4: q-card.shadow-24
            q-card-section.text-center
                q-icon(name="date_range" color="secondary" size="md")
                .text-body2.text-dark Periodo activo
                q-linear-progress(:value=".8").q-my-sm
                span.text-caption.text-grey
                    | 2021/11/01
                    span.text-primary.text-bold.q-mx-sm - 
                    | 2021/12/31

    q-separator(spaced)

    .row.q-col-gutter-md
        .col-12: q-card.shadow-24.bg-accent
            q-card-section.text-center
                .text-body2.text-dark  En espera de aprobación
                .text-h6.text-primary.text-bold 1
                q-btn(to="/estudiantes" color="primary" no-caps unelevated) Ir a estudiantes
    
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


export default {
    
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