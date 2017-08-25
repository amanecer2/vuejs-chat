import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ChatRoom from '@/chat/Chat-room'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chat',
      component: ChatRoom
    }
  ]
})
