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
              <chatty-message v-for="massage in messages" :msg="massage"></chatty-message>
            </div>
            <chatty-input-chat></chatty-input-chat>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'chatRoom',
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
      this.$socket.on('user joined', userId => {
        console.log('client join', userId)
        this.connectUsers.push(userId)
      })
    },
    methods () {
      return {
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
  }
</script>

<style>

</style>
