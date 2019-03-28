<template>
<v-toolbar fixed class ="cyan" >
 <v-toolbar-title class= "mr-4">

 <v-btn flat dark>
     <router-link to ="root">PataPastPapers</router-link>

   </v-btn>

 </v-toolbar-title>
<v-toolbar-items>
   <v-btn
   flat dark>
   <router-link to ="papers">Papers</router-link>
   </v-btn>
 </v-toolbar-items>
 <v-toolbar-items>
   <v-btn flat dark>
   <router-link to ="chatroom">Chat Room</router-link>
   </v-btn>
 </v-toolbar-items>
 <v-spacer></v-spacer>

 <v-toolbar-items >
 <v-btn

 flat dark>
     <router-link to ="login">Login</router-link>

   </v-btn>

   <v-btn

   flat dark>
     <router-link to ="register">Sign Up</router-link>

   </v-btn>
   <v-btn
   flat dark>
     <router-link to ="root">Log Out</router-link>

   </v-btn>

 </v-toolbar-items>
</v-toolbar>

</template>

<Script>

</Script>

<style scoped>

</style>
