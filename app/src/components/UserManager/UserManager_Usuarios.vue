<template lang="pug">
div

    q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="datausers" :columns="columns" dense)
        template(v-slot:top)
            .flex.justify-end.full-width: q-btn(:label="'Nuevo '+usergroup" color="primary" unelevated @click="edituserDialog(cleanuser, true)"  no-caps)
        template(v-slot:loading)
            q-inner-loading(showing color="primary")
        
        template(v-slot:body="props")
            q-tr(:props="props")
                q-td(key="actions" :props="props")
                    q-btn(icon="edit" @click="edituserDialog(props.row, false)" size="xs" padding="4px" color="secondary"): q-tooltip Editar accesos
                    q-btn(icon="person" @click="editUserArea(props.row)"  size="sm" padding="4px" color="primary").q-ml-sm: q-tooltip Ver usuario
                q-td(key="user" :props="props").text-bold  {{props.row.user}}
                q-td(key="name" :props="props") {{props.row.name}}
                q-td(key="email" :props="props") {{props.row.email}}
                //q-td(key="group" :props="props").text-uppercase.text-caption.text-bold.text-grey-5 {{props.row.group}}
                q-td(key="active" :props="props")
                    q-icon(v-if="props.row.active" name="done" color="positive"): q-tooltip Activo
                    q-icon(v-else name="cancel" color="negative"): q-tooltip Inactivo
        
    q-dialog(v-model="dialog")
        q-card.bg-dark.shadow-20(style="min-width:320px")
            q-card-section.text-center: .text-h6.text-white Editar {{usergroup}}
            q-card-section
                q-form
                    q-input(v-model="edituser.user" label="Usuario / Cuenta" rounded standout dark dense required)
                    q-input(v-model="edituser.name" label="Nombre" rounded standout dark dense ).q-mt-sm
                    q-input(v-model="edituser.email" label="Email" rounded standout dark dense required).q-mt-sm
                    q-separator(spaced)
                    q-input(v-model="edituser.password" label="Contraseña" rounded standout dark dense required hint="Dejar vacío para mantener la contraseña.").q-mt-sm

                    q-separator(spaced)
                    //.text-center.q-mt-sm
                        q-btn-toggle(unelevated toggle-color="info" text-color="white" v-model="edituser.group" :options="[ {label: 'Docente', value: 'docente'}, {label: 'Estudiante', value: 'estudiante'}, {label: 'Coordinador', value: 'coordinador'}, {label: 'Admin', value: 'admin'}]")
                    q-separator(spaced)
                    .text-center.q-mt-sm
                        q-toggle(v-model="edituser.active" label="Activo" color="info").q-mt-sm.text-white
                    .text-center.q-mt-lg
                        q-btn(label="Guardar" color="secondary" unelevated @click="edituserFN")

</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
export default {
    props: ['tipo'],

    setup (props) {
        const usergroup = ref(props.tipo || null)
        const $q = useQuasar()
        const $router = useRouter()
        const $store = useStore()
        const loading = ref(true)
        const datausers = ref()
        const columns = ref([
            { name: 'actions', labe:'', align:'center' },
            { name: 'user', label: 'Usuario / Cuenta', field: 'user', align:'left' },
            { name: 'name', label: 'Nombre', field: 'name', align:'left' },
            { name: 'email', label: 'Email', field: 'email', align:'left' },
            { name: 'active', label: 'Activo', field: 'active', align:'center', sortable: true },
        ])
        
        const dialog = ref(false)
        const edituser = ref(null)
        
        const cleanuser = {
            user:'',
            name: '',
            email: '',
            group: usergroup.value,
            active: true
        }


        const getusers = async() => {
            $store.dispatch('api/GetUsers').then (res => {
                let users = []
                //datausers.value = res
                loading.value = false
                if(usergroup.value){
                    for(var i in res){
                        var usr = res[i]
                        if(usr.group==usergroup.value){
                            users.push(usr)
                        }
                    }
                } else {
                    users = res
                }
                datausers.value = users
            })
        }
        getusers()

        const editUserArea = (item) => {
            $router.push('/'+usergroup.value+'/'+item._id)
        }
        const edituserDialog = (item, isnew) => {
            if(isnew){
                item.password="ABC"
            }
            edituser.value = JSON.parse(JSON.stringify(item))
            dialog.value = true
        }

        const edituserFN = (item) => {            
            dialog.value = false
            
            $store.dispatch('api/SaveUser', {user: edituser.value}).then(res => {
                getusers()
                $q.notify('Guardado')

            }).catch(error => {
                $q.notify(error.message)
            })
            
            edituser.value = null

        }

        return {
            loading,
            datausers,
            columns,
            edituserDialog,
            edituserFN,
            edituser,
            dialog,
            cleanuser,
            usergroup,
            editUserArea,
        }
    }
}
</script>

<style lang="scss" scoped>
.q-table{

}
</style>