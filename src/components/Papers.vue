import { runInThisContext } from "vm";

<template>
<div class= "container">

<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 text-center app">

<a><p v-for="(img) in images" v-on:click="setImage(img)" >{{img}}</p></a>
<img v-show="image" class="profile-image"  :src="picha[number]" />
<div v-if="!hasImage">
  <input type="file" round class="change-profile-image" @change="onFileChange" />
</div>
<div v-else>
  <button class="btn btn-info"  @click="saveImage">Save</button><br>
  <br></br>
  <button class="btn btn-success" @click="showForm">Share</button>
</div>
<form v-show="status">
        <div class="form-group">
          <label for="message">Email:</label>
          <input type="email" v-model="email" class="form-control"></input>
        </div>
        <button type="submit" class="btn btn-success" @click="shareImage">Send</button>
</form>
</div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userImage: '',
      images: [],
      email:'',
      hasImage:false,
      picha:[],
      image:false,
      status:false,
      number:0,
      name:''
  }
},
methods: {
  setImage(name){
    console.log(name)
    for(let i=0;i<this.images.length; i++){
      console.log(this.images[i])
      if(name == this.images[i]){
        this.number = i
      }
    }
    this.image = true
  },
  showForm(){
    this.status = true
  },
  onFileChange(e) {
      this.hasImage = true;
      var files = e.target.files || e.dataTransfer.files
     // var data = {'no':'',image:''}
     // data.image = files[0].name
      this.images.push(files[0].name)
      console.log('target',files[0].name)
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage(file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {

       // vm.userImage = e.target.result
        this.picha.push(e.target.result)
        console.log('picha',JSON.stringify(this.picha))
      }
      reader.readAsDataURL(file)
    },
    //  saveImage: function (e) {
    //    this.userImage = ''
    //  },
    downloadImage(){

    },
    saveImage(){
      var imageData = this.userImage.toString('base64')
      var base64Image = imageData.slice(22)

      var data = {}
      data.papername = this.images[0]
      data.image = base64Image
      axios.post('http://localhost:5000/auth/papers', data)
      .then((res) => {
        if (res.status == 200){
          console.log('paper saved')
          this.image = false
          this.hasImage = false
        }
      })
    },
    shareImage(){
      // send data to backend
      console.log('clicked')
      var data ={}
      data.email = this.email,
      data.image = 'image'
      axios.post('http://localhost:5000/email', data)
      .then((res) => {
        console.log(JSON.stringify(res))
      })
    }

}
}
</script>
<style>
.display{
    float: right;


  }
</style>
