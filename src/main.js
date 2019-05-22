// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App'
import router from './router'
import './bus'

import CurrencyFilter from './components/filters/currency'
import MomentFilter from './components/filters/moment'

Vue.config.productionTip = false
Axios.defaults.withCredentials = true

Vue.use(VueAxios, Axios)
Vue.use(VeeValidate, {
  events: 'input|blur'
})
Vue.component('Loading', Loading)

Vue.filter('currencyFilter', CurrencyFilter)
Vue.filter('momentFilter', MomentFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
