<template lang="pug">
div

    template( v-if="asignacion" )
        q-btn(@click="buildPDF" color="primary" outline no-caps)
            template(v-slot)
                .text-center
                    q-icon(name="description" size="xl")
                    div Descargar Reporte 
    //iframe(style="width: 500px; height: 760px;" :src="thesrc")

</template>
<script>
import {ref} from 'vue'
import { useQuasar, date } from 'quasar'
import { useStore } from 'vuex'

import labelmake from 'labelmake'

import pdf from 'components/desempeno/pdfReporteBase64.js'
import schemas from 'components/desempeno/pdfReporteSchemas.js'


export default {
    props: ['asignacion'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        
        const thesrc = ref('') 



        const template = {
            basePdf: pdf.pdf,
            schemas: schemas.schemas
        }
        

        const timeStamp = Date.now()
        const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

        const item = ref(props.asignacion)
        const textos = `
Análisis:  ${item.value.analisis.valor.toUpperCase()}
${item.value.analisis.comentario}
\n
Estructura:  ${item.value.estructura.valor.toUpperCase()}
${item.value.estructura.comentario}
\n
Redacción:  ${item.value.redaccion.valor.toUpperCase()}
${item.value.redaccion.comentario}
\n
Argumentación:  ${item.value.argumentacion.valor.toUpperCase()}
${item.value.argumentacion.comentario}
\n
¿Cómo considera que ha sido el desempeño del estudiante?
${item.value.desempeno.toUpperCase()}
\n
Fortalezas:
${item.value.fortalezas}
\n
Debilidades:
${item.value.debilidades}
\n
¿Cuál es el porcentaje de avance de la investigación del estudiante?

Avance: ${item.value.porcentaje}%

Calificación: ${item.value.calificacion} 
        `
        let inputs = [
            {
                estudianteNombre: item.value.estudiante_user.name,
                asesorNombre: item.value.docenteName,
                textos: textos,
                fechaEvaluacion: formattedString
            },
        ]



        const buildPDF = async () => {
            const pdf = await labelmake({template, inputs})
            const blob = new Blob([pdf.buffer], {type: 'application/pdf'})
            thesrc.value = URL.createObjectURL(blob)
            var fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        }



        return {
            thesrc,
            buildPDF,
        }

    }
}
</script>