<template xmlns="http://www.w3.org/1999/html">
  <div v-bind:class="msg.type">{{msg.text}}</div>
</template>

<script>
  export default {
    name: 'chatty-message',
    props: ['msg']
  }
</script>

<style>
  .sender {
    color: green;
    text-align: right;
  }
  .receiver {
    color: red;
    text-align: left;
  }
</style>
