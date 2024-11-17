import Api from './Api.js'

export  default {
    register(credentials){
        return Api().post('/register',credentials)
    }
}