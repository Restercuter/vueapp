<template>
  <v-layout column>
  <v-flex xs6 offset-xs3>
  <div class = 'white elevator-2'>
  <v-toolbar flat dense class = 'cyan' dark>
  <v-toolbar-title>Register</v-toolbar-title>
  </v-toolbar>

    <div class = "pl-4 pr-4 pt-2 pb-2">
    <v-text-field
    name="input-1"
    label= "Admission Number"
    id="testing"
    vmodel = "name"></v-text-field>
    <br/>
    <v-text-field
    name="password"
    type="password"
    label= "Password"
    id="testing"
    vmodel = "name"></v-text-field>
    <br/>
    <v-text-field
    name="password"
    type="password"
    label= "Confirm Password"
    id="testing"
    vmodel = "name"></v-text-field><br/>
    <div class = "error" v-html = "error"/>
    <br/>
    <v-btn flat dark>
   <router-link to ="login">Register</router-link>
   </v-btn>
</div>


  </div>
  </v-flex>
  </v-layout>


  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
        }
  },
  methods: {
    async register (){
      try {
        await AuthenticationService.register({
          name: this.name,
          password: this.password
        })
      } catch (error){
        this.error= error.response.data.error
      }
    }
  },
}
</script>
<style scoped>

