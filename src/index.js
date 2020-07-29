
import Vue from 'vue'
import App from './App.vue'
import VS2 from 'vue-script2'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VS2)

new Vue({
  el: '#app',
  render: h => h(App)
})
