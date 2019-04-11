<template>
  <v-layout column>
  <v-flex xs6 offset-xs3>
  <div class = 'white elevator-2'>
  <v-toolbar flat dense class = 'cyan' dark>
  <v-toolbar-title>Login</v-toolbar-title>
  </v-toolbar>
    <p v-show="fail" class="text-danger">{{messo}}</p>
    <div class = "pl-4 pr-4 pt-2 pb-2">
    <v-text-field name="input-1" label= "Name" id="testing" v-model = "user.email"></v-text-field>
    <br/>
    <v-text-field name="password" type="password" label= "Password" id="testing" v-model = "user.password"></v-text-field>
    <br/>
    <div class = "error" v-html = "error"/>
    <br/>
    <button class="btn btn-success" @click="login">Login</button>
</div>


  </div>
  </v-flex>
  </v-layout>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        "email" : '',
        "password": ''
      },
      messo: '',
      fail: false,
      error: null
        }
  },
  methods: {
    login (){
      console.log('user',JSON.stringify(this.user))

        axios.post('http://localhost:5000/auth/login', this.user)
        .then((res) => {
          console.log(JSON.stringify(res))
          if(res.status == 200) {
            this.$store.commit('setAuth')
            this.$store.commit('setUser',res.data.user);

            this.$router.push('/papers')
          }
          else {
            this.messo = "wrong credentials" ;
            this.fail = true
          }
        })


    }
  },
}
</script>
<style scoped>


