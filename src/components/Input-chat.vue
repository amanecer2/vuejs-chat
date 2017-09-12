<template>
  <section>
    <div class="panel-footer">
      <div class="row">
        <input type="text" class="form-controller input-lg col-sm-12"
               placeholder="Type something"
               v-model="massage"
               @keyup.13="submit(massage)"/>
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    name: 'chatty-input-chat',
    data () {
      return {
        massage: 'hello'
      }
    },
    methods: {
      submit (val) {
        this.$socket.emit('message', val)
        this._data.massage = ''
      }
    }
  }
</script>
