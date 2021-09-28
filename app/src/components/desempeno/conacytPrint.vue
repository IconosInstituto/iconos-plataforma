<template lang="pug">
div
    q-btn(label="Print")
    //p {{asignacion.asignacion}}
    iframe(style="width: 500px; height: 760px;" :src="thesrc")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

import labelmake from 'labelmake'

import pdf from 'components/desempeno/pdfConacytBase64.js'
import schemas from 'components/desempeno/pdfConacytSchemas.js'


export default {
    props: ['user', 'userData', 'asignacion'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        
        const thesrc = ref('') 



        const template = {
                basePdf: pdf.pdf,
                schemas: schemas.schemas
            }
        

            
        

        let inputs = [
            {
                estudianteNombre: props.user.name,
                estudianteGrado: 'Doctorado',
                asesorNombre: props.asignacion.docenteName,
                estudianteTitulo: props.userData.tituloInvestigacion,
                periodoInicio: props.asignacion.asignacion.periodo.startDate,
                periodoFinal: props.asignacion.asignacion.periodo.endDate,
                desempenoE: props.asignacion.desempeno=='excelente'?'X':'',
                desempenoB: props.asignacion.desempeno=='bueno'?'X':'',
                desempenoS: props.asignacion.desempeno=='suficiente'?'X':'',
                desempenoN: props.asignacion.desempeno=='no satisfactorio'?'X':'',
                cumplimientoE: props.asignacion.cumplimiento=='excelente'?'X':'',
                cumplimientoB: props.asignacion.cumplimiento=='bueno'?'X':'',
                cumplimientoS: props.asignacion.cumplimiento=='suficiente'?'X':'',
                cumplimientoN: props.asignacion.cumplimiento=='no satisfactorio'?'X':'',
                obtencionE: props.asignacion.obtenicion=='excelente'?'X':'',
                obtencionB: props.asignacion.obtenicion=='bueno'?'X':'',
                obtencionS: props.asignacion.obtenicion=='suficiente'?'X':'',
                obtencionN: props.asignacion.obtenicion=='no satisfactorio'?'X':'',
                comentarios: 'Sin comentarios',
                porcentaje: props.asignacion.porcentaje + '%',
                recomienda: 'Recomienda...',
                nombreAsesorFirma: props.asignacion.docenteName,
                nombreCoordinadorFirma: 'C. Alberto Sánchez',
                asesorFirma: props.asignacion.docenteData.firma,
                coordinadorFirma: null,
                fechaEvaluacion: props.asignacion.asignacion.periodo.endDate
            },
        ]

        
        /*
        //Base64Img
        $store.dispatch('api/ImageB64', props.asignacion.docenteData.firma).then(res => {
            inputs[0].asesorFirma = res
            inputs[0].coordinadorFirma = res
            buildPDF()
        })
        */

        const buildPDF = async () => {
            const pdf = await labelmake({template, inputs})
            const blob = new Blob([pdf.buffer], {type: 'application/pdf'})
            thesrc.value = URL.createObjectURL(blob)
        }

        buildPDF()
        
       
       

        return {
            thesrc
        }

    }
}
</script>