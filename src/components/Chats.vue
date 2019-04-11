import { mapGetters } from "vuex";

<template>
<div class="container chatForm">
  <div class="container">
    <div class="card col-6">
      <form >
        <div class="form-group">
        <div class="form-group">
          <label for="user">User: {{user}}</label>

        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <input type="text" v-model="chatData.message" class="form-control"></input>
        </div>
        <button type="submit" class="btn btn-success" @click="sendMessage">Send</button>
        </div>
      </form>
    </div>
  </div>


  <div class="container chatGroup">
    <div class="card col-6">
      <p>chat group</p>
      <p v-for="(msg,id) in this.allChats":key="id" >
        {{msg.UserName}} : {{msg.Messages}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import io from 'socket.io-client';
import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            chatData: {},
            user: '',
            allChats: {},
            messages: [],
            socket : io('localhost:5000')
        }
    },
    created() {
      axios.get('http://localhost:5000/auth/chatroom')
        .then((res) => {
          this.allChats = res.data.data
          console.log(`all chats ${JSON.stringify(this.allChats)}`)
          this.user = localStorage.getItem('user')
        })
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();


            // this.socket.emit('SEND_MESSAGE', {
            //     user: this.chatData.username,
            //     message: this.chatData.message
            // });
            // this.message = ''

            this.chatData.username = this.user ;
            console.log('sending data', JSON.stringify(this.chatData))
            axios.post('http://localhost:5000/auth/chatroom',this.chatData)
              .then((res) => {
                console.log(`res is ${JSON.stringify(res.data)}`)
              })
              .catch((err) => {
                console.log(`error is ${err}`)
              })



        }
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        })
    }
}
</script>

<style>
  .chatGroup{
    margin-left : 50%;
    float:left;
    background:gray;

      }
  .chatForm{

     float:right;


     margin:50px;

  }
</style>
