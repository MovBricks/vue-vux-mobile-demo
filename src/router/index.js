import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import HelloFromVux from '../components/HelloFromVux.vue'
import Index from '../pages/indexPage.vue'
// import test from '../pages/children/details/essay.vue'

import EssayDetail from '../pages/children/details/essay.vue'

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
      name: 'EssayDetail',
      path: '/reading/essay/:id',
      component: EssayDetail
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: test
    // },
    {
      path: '*',
      name: '404',
      component: Hello
    }
  ]
})
