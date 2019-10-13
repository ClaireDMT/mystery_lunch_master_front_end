import '@/assets/stylesheets/spectre.min.css'
import '@/assets/stylesheets/styles.scss'

import Vue from 'vue'

import router from './router/'
import store from './store/'

import App from './App.vue'

Vue.config.productionTip = false

const main = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default main
