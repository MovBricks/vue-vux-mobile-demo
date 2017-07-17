import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import HelloFromVux from '../components/HelloFromVux.vue'
import Index from '../pages/indexPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloFromVux
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: '404',
      component: Hello
    }
  ]
})
