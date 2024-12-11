import Api from './Api.js'

export  default {
    index(){
        return Api().get('songs')
    }
}