import Vue from 'vue'
import App from './App.vue'
import Argon from '@/plugins/argon-kit'
import router from './router'
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);
Vue.use(Argon);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

