// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'

/* eslint-disable no-new */
Vue.use(vueResource)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
