import store from 'store'

const USER_KEY = 'user_key'
const INFO_KEY = 'info-key'

export default {
      saveUser(user){
            store.set(USER_KEY, user)
     },
     getUser(){
           return store.get(USER_KEY) || null
     },
     removeUser(){
           store.remove(USER_KEY)
     },
     saveInfo(info){
           store.set(INFO_KEY, info)
     },
     getInfo(){
           return store.get(INFO_KEY) || null
     },
     removeInfo(){
           store.remove(INFO_KEY)
     },
}