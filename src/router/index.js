import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/login'
import Papers from '@/components/papers'
import ChatRoom from '@/components/Chats'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
       {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/papers',
      name: 'papers',
      component: Papers
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoom
    }
  ]
})
