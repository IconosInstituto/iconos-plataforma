
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

export const GetUsersByGroup = ({commit}, groupusers) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers', {filter:{group:groupusers}}).then(res => {
            resolve(res.data)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const GetSingleUser = ({commit}, userid) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers', {filter:{_id:userid}}).then(res => {
            resolve(res.data[0])
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const GetAllData = ({commit}, collectionname) => {
    return new Promise((resolve, reject) => {
        api.post('/collections/get/'+collectionname).then(res => {
            resolve(res.data.entries)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}
export const GetSingleData = ({commit}, body) => {
    return new Promise((resolve, reject) => {
        api.post('/collections/get/'+body.coll, {filter:{user_id:body.id}}).then(res => {
            resolve(res.data.entries)
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

export const SaveItem = ({commit}, body) => {
    return new Promise((resolve, reject) => {
        const coll =  body.value.coll
        let newbody = body.value
        delete newbody.coll
        if(newbody._id==undefined){
            delete newbody._id
        }
        api.post('/collections/save/'+coll, {data: newbody}).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject({error:true, message:'Ocurrió un error.', data: error})
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}