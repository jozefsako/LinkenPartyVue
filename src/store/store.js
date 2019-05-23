import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        parties: [],
        adresses: [],
        distance : "",
        currentParty: [],
        currentIdUser: "",
        currentPositionLat : "",
        currentPositionLng : ""
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
      },
      changeParty(state, currentParty){
        state.currentParty = currentParty;
      },
      changeCurrentIdUser(state, id){
        state.currentIdUser = id;
      },
      changeLat(state, lat){
        state.currentPositionLat = lat;
      },
      changeLng(state, lng){
        state.currentPositionLng = lng;
      }
    },
    getters: {
      parties: state => state.parties,
      adresses: state => state.adresses,
      distance: state => state.distance,
      party: state => state.currentparty,
      currentIdUser: state => state.currentIdUser,
      lat: state => state.currentPositionLat,
      lng: state => state.currentPositionLng
    }
});