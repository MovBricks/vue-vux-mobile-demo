// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './font-awesome-4.7.0/css/font-awesome.min.css'
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

FastClick.attach(document.body)

Vue.config.productionTip = false

// Vue.prototype.axios = axios

var vm = new Vue({
  el: '#app',
  store,
  // axios,
  router,
  render: h => h(App)
})
window.vm = vm
