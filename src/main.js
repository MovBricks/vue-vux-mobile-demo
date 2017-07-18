// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './font-awesome-4.7.0/css/font-awesome.min.css'
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

import infiniteScroll from 'vue-infinite-scroll'
import './mock'

Vue.use(infiniteScroll)

FastClick.attach(document.body)

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
window.vm = vm
