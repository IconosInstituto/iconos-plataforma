
import { api } from 'boot/axios'
import { QAjaxBar } from 'quasar'
import { useStore } from 'vuex'


export const Login = ({commit}, credentials) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/authUser', credentials).then(res => {
            const dt = res.data
            const usrdata = {
                user: dt.user,
                email: dt.email,
                name: dt.name,
                group: dt.group,
                api_key: dt.api_key,
                id: dt._id,
            }
            commit('SET_USER', usrdata)
            resolve(res)
        }).catch(error => {
            reject({error:true, message:'Verifica tus datos.'})
        })
    }, error => {
        reject({error:true})
    })
}

export const Logout = ({commit}) => {
    commit('UNSET_USER')
}

export const GetUsers = ({commit}) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers').then(res => {
            resolve(res.data)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const SaveUser = ({commit}, body) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/saveUser', body).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject({error:true, message:'Ocurrió un error.', data: error})
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}