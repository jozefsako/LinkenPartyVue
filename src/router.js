import Vue from "vue"
import VueRouter from 'vue-router'
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import HomeOrganizer from "./views/HomeOrganizer.vue"
import HomeReveler from "./views/HomeReveler.vue"
import PartyDetails from "./components/PartyDetails.vue"
import AddEvent from "./views/AddEvent.vue"
import EditEvent from "./views/EditEvent.vue"

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
      path: '/homeOrganizer',
      name: 'HomeOrganizer',
      component: HomeOrganizer
    },
    {
      path: '/homeReveler',
      name: 'HomeReveler',
      component: HomeReveler
    },
    {
      path: '/addEvent',
      name: 'AddEvent',
      component: AddEvent
    },
    {
      path: '/editEvent/:partyId',
      name: 'EditEvent',
      component: EditEvent,
      params: true
    },
    {
      path: '/partyDetails/:partyId',
      name: 'PartyDetails',
      component: PartyDetails,
      params: true
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


