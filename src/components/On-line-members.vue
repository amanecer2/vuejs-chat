<template>
  <section>
    <div class="panel">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-user">({{usersOnLine.length}})</span><span>online</span>
        <ul>
          <li v-for="user of usersOnLine">{{user}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'chatty-on-line-members',
    props: ['usersOnLine'],
    // TODO make this vuex
    created () {
      console.dir(this.usersOnLine)
    }
  }
</script>
