import Vue from "vue"
import VueRouter from 'vue-router'
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Home from "./views/Home.vue"

Vue.use(VueRouter);

export default new VueRouter({
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


