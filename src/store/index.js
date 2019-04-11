import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
   // Current state of the application lies here.
   user: {},
   auth:false
  },
  getters:{
   // Compute derived state based on the current state. More like computed property.
   getUser(state){
     return state.user
   },
   getAuth(state){
     return state.auth
   }
  },
  mutations:{
   // Mutate the current state
   setUser(state,payload){
     state.user = payload
     localStorage.setItem('user',payload.email)
   },
   setAuth(state){
     console.log('i am called')
     state.auth = true
   },
   unsetAuth(state){
     state.auth = true
   }
  },
  actions:{
   // Get data from server and send that to mutations to mutate the current state
  }
 })
