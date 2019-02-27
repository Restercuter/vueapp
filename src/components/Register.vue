<template>
  <div id='nav'>
    <form>
    <input type="text" placeholder="name"v-model='user_data.name' >name</input><br/>>
    <input type="text"placeholder="reg_no" v-model='user_data.reg_no'>Registration number</input>
    <input type="password" v-model='user_data.password'>Password</input>
    <input type="password" v-model='user_data.confirm_pass'>Confirm password</input>
    <button :click="register()">submit</button>
    </form>
  </div>
</template>

<script>
  export default{
    data() {
      return {

        user_data: {}
      }
    },

    methods: {
      register(){
        console.log(`user data is:${JSON.stringify(this.user_data)}`)
      }
    },
  }
</script>
<style scoped>
form{
    padding-top: 20px;
    padding-left: 100px;
    padding-bottom: 10px;
    margin-left: 400px;
    font-size: 40px;
    background:green;
    width: 470px;
    height: 500px;
    margin: auto;
    border-radius:10px;
    opacity: 0.85;
    color: black;

  }
  nav input{
    margin-top: 30px;
    width: 350px;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
  }
  form input[type="submit"]{
    width: 100px;
    margin-left: 300px;
    background: white;
    color: black;


  }


</style>

