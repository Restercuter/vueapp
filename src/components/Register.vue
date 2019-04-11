<template>
  <v-layout column>
  <v-flex xs6 offset-xs3>
  <div class = 'white elevator-2'>
  <v-toolbar flat dense class = 'cyan' dark>
  <v-toolbar-title>Register</v-toolbar-title>
  </v-toolbar>
  <p v-show="fail" class="text-danger">{{mesg}}</p>
    <div class = "pl-4 pr-4 pt-2 pb-2">
    <v-text-field
    name="input-1"
    label= "Name"
    id="testing"
    v-model = "user.email"></v-text-field>
    <br/>
    <v-text-field
    name="password"
    type="password"
    label= "Password"
    id="testing"
    v-model = "user.password"></v-text-field>
    <br/>
  <br/>
    <div class = "error" v-html = "error"/>
    <br/>
    <button class="btn btn-success" @click="register">Register</button>
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
      user: {},
      mesg: '',
      fail:false,
      error: null
        }
  },
  methods: {
    register (){
      axios.post('http://localhost:5000/auth/register', this.user)
        .then((res)=> {
          if(res.status === 200) {
            this.$router.push('/login')
          } else{
            this.mesg= "Password must fullfil the following conditions  1. It must contain atleast 8 characters and at most 32 characters";
            this.fail =true;
          }

        })
    }
  },
}
</script>
<style scoped>

