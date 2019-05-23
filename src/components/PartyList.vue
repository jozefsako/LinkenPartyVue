<template>
  <div class="col-lg-12" style="padding: 0 !important;">
    <div class="select-container">
      Distance:
      <select v-model="selected" @change="getParties()">
        <option selected>5</option>
        <option>10</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>

    <div class="row row-grid list-party">
      <div v-for="party in parties" :key="party.id" class="col-lg-4">
        <div class="card card-lift--hover shadow border-0" style="margin-bottom: 30px;">
          <div class="card-body py-3">
            <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
              <i class="ni ni-sound-wave"></i>
            </div>
            <h6 class="text-primary text-uppercase">{{party.fields.name_event}}</h6>
            <p
              class="description mt-3"
              style="max-height: 100px; min-height: 100px; white-space: preline; 
              height: 100px; 
              overflow: hidden;
              text-overflow: ellipsis; "
            >{{party.fields.description_event}}</p>
            <h5
              class="description mt-3"
              style="min-height: 36px; max-height: 36px;"
            >{{party.fields.address_event}}</h5>
            <div>
              <span class="badge badge-pill badge-primary">{{party.fields.theme_event}}</span>
            </div>
            <router-link
              :to="{ path: '/partyDetails/'+ party.pk}"
              class="btn btn-primary mt-4"
              role="link"
            >Learn more</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  https: {
    root: "/root",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type"
    }
  },
  components: {},

  data: function() {
    return {
      parties: [],
      currentLocation: null,
      selected: 5
    };
  },

  beforeMount: function() {
    this.getParties();
  },

  updated: function() {},
  methods: {
    getParties: function() {
      var json;
      var _this = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        json = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          distance: parseInt(_this.selected)
        };
        console.log(json);
        var __this = _this;
        _this.$http
          .post(
            "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/allEvents",
            json,
            {
              headers: {
                Accept: "application/json"
              }
            }
          )
          .then(response => {
            __this.parties = response.data;
            console.log(response.data);
            console.log(__this.parties);
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    sendParties: function(parties) {
      for (var i = 0; i < parties.length; i++) {
        this.$store.commit("addParty", parties[i].fields);
      }
    }
  }
};
</script>

<style>
.list-party {
  padding-top: 55px;
  padding-bottom: 25px;
}

.select-container{
  position:absolute;
  left: 20px;
  margin-bottom: 30px;
}
</style>

