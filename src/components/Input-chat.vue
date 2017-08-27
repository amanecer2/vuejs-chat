<template>
  <section>
    <div class="panel-footer">
        <div class="row">
          <input type="text" class="form-controller input-lg col-sm-12" placeholder="Type something" @bind="name"/>
        </div>

    </div>
  </section>
</template>
<script>
  export default {
    name: 'chatty-input-chat',
    data () {
      return {
        name: 'fds'
      }
    }
  }
</script>
