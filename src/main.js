import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Argon from '@/plugins/argon-kit'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'

Vue.use(Argon);
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {path: '/', component: Login},
  {path: '/register', component: Register},
  {path: '/home', component: Home},
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
