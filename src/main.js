import Vue from 'vue'
import App from './App.vue'
import Argon from '@/plugins/argon-kit'
import router from './router'
import { store } from './store/store'


Vue.use(Argon);

Vue.config.productionTip = false
Vue.use(require('vue-resource').default)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

