<template>
  <div id="app">
  <v-app>
  <page/>
  <main>
    <v-container fluid>
    <img src="./assets/logo.jpg"></img>
    <router-view/>
    </v-container>
  </main>
  </v-app>



  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    'page': PageHeader
  }

  }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
