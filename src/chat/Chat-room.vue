<template xmlns="http://www.w3.org/1999/html">
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <chatty-on-line-members :users-on-line="connectUsers"></chatty-on-line-members>
        </div>
        <div class="col-sm-9">

          <div class="panel panel-primary">
            <div class="panel-heading">
              Chat
            </div>
            <div class="panel-body">
              <div class="conversation">
                <div class="conversation-container">
                  <chatty-message v-for="massage in messages" :msg="massage"></chatty-message>
                </div>
              </div>
            </div>
            <chatty-input-chat></chatty-input-chat>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {MassageModal} from '../modal/massageModal'
  export default {
    name: 'chatRoom',
    sockets: {
      connect: function () {
        console.log('socket connected')
      },
      join: function (val) {
        this._data.connectUsers.push('dsadas')
      },
      message (val) {
        var msg = new MassageModal(this._data.messages.length, val, 'sent')
        this._data.messages.push(msg)
      }
    },
    data () {
      return {
        // TODO to make vuex
        connectUsers: [],
        messages: [],
        massage: {
          type: '',
          action: '',
          user: '',
          text: '',
          time: ''
        },
        areTyping: []
      }
    },
    created () {
      /* get users from socket */

      this.$socket.emit('join', {
        name: 'sdadsa',
        time: new Date().getHours() + '-' + new Date().getMinutes() + '-' + new Date().getSeconds()
      })
      this.$socket.on('join', (emit) => {
        console.log(emit)
      })
      this.$socket.on('message', (emit) => {
        console.log(emit)
      })
    },
    methods: {
      send () {
        console.log('msg sent')
      },
      userTyping (userName) {
        console.log('typing', userName)
      },
      usersAreTyping () {
        console.log('typing')
      },
      stoppedTyping () {
        console.log('stop typing')
      }
    }
  }
</script>

<style>
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
