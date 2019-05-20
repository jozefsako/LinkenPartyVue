import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        parties: [],
        adresses: [],
        distance : ""
    },
    mutations: {
      addParty(state, party) {
        state.parties.push(party)
      },
      addAdress(state, adress){
          state.adresses.push(adress);
      },
      change(state, distance){
        state.distance = distance;
      }
    },
    getters: {
      parties: state => state.parties,
      adresses: state => state.adresses,
      distance: state => state.distance
    }
});