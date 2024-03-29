import Vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
      token: null,
      user: null,
      isUserLoggedIn: false

    },
    mutations:{
    setToken(state, token){
      state.token = token
      if (token){
        state.isUserLoggedIn = true
      } else{
        state.isUserLoggedIn = false
      }
    }

    },
    actions: {
setToken({commit}, token){
  commit('setToken', token)
}

    }
})

