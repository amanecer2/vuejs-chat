// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import OnLineMembers from './components/On-line-members.vue'
import InputChat from './components/Input-chat.vue'
import Message from './components/Message.vue'

/* ...there may be other imports here */
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:3000')
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('chatty-on-line-members', OnLineMembers)
Vue.component('chatty-input-chat', InputChat)
Vue.component('chatty-message', Message)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
