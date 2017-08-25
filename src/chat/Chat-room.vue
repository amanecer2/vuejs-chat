<template xmlns="http://www.w3.org/1999/html">
  <section>
    {{name}}
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <on-line-members></on-line-members>
        </div>
        <div class="col-sm-9">

          <div class="panel panel-primary">
            <div class="panel-heading">
              Chat
            </div>
            <div class="panel-body">
              <ul>
                <li>message 1</li>
              </ul>
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
        name: 'shahar'
      }
    }
  }
</script>

<style>

</style>
