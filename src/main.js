import Vue from 'vue'
import App from './App.vue'
import Argon from '@/plugins/argon-kit'
import router from './router'
import { store } from './store/store'
import VeeValidate from "vee-validate"


Vue.use(VeeValidate);
Vue.use(Argon);


Vue.use( {
  globals: {
    user: null,
  },
});
Vue.config.productionTip = false
Vue.use(require('vue-resource').default)


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

