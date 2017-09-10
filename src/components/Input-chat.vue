<template>
  <section>
    <div class="panel-footer">
      <div class="row">
        <input type="text" class="form-controller input-lg col-sm-12"
               placeholder="Type something"
               @bind="massage"
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
        this.$socket.emit('message', this._data.massage)
        console.log('emit massage')
        this._data.massage = ''
      }
    }
  }
</script>
