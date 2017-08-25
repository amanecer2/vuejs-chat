<template>
  <section>
    <div class="panel-footer">
      <form>
        <input type="text" class="form-controller input-sm" placeholder="Type something" @bind="name"/>
      </form>
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
