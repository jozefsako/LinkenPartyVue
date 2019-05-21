<template>
  <div class="profile-page">
    <my-header></my-header>
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <GoogleMap ref="GoogleMap"></GoogleMap>
            </div>
            <div class="row">
              <div class="col text-center mt-5">
                <h2 v-if="loaded">{{this.currentParty[0].fields.name_event}}</h2>
              </div>
              
              <div class="w-100"></div>
              <div class="col text-left mt-4" style="left: 5.5%;">
                <span class="badge badge-pill badge-info">Distance: {{distance}}</span>
              </div>
              
              <div class="w-100"></div>
              <div class="col text-center mt-4 affluence-container">
                <div class="progress-info">
                  <div class="progress-label">
                    <span>Affluence</span>
                  </div>
                  <div class="progress-percentage">
                    <span>60%</span>
                  </div>
                </div>
                <div class="progress">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 60%;"
                  ></div>
                </div>
              </div>
              <div class="w-100"></div>

              

              
              <div class="w-100"></div>

              <div class="col text-left mt-5" style="left: 5.5%;">
                <h4>
                  Style:
                  <strong v-if="loaded">{{this.currentParty[0].fields.theme_event}}</strong>
                </h4>
              </div>

              <div class="col text-left mt-5" >
                <h4>
                  Date:
                  <strong v-if="loaded">{{this.currentParty[0].fields.start_date}}</strong>
                </h4>
              </div>

              

              <div class="w-100"></div>
              
              <div class="col text-left mt-5" style="left: 5.5%;">
                <h4>
                  Price:
                  <strong v-if="loaded">{{this.currentParty[0].fields.price}}€</strong>
                </h4>
              </div>

              <div class="col text-left mt-5" >
                <h4>
                  Opening hour:
                  <strong v-if="loaded">20:00</strong>
                </h4>
              </div>
              <div class="w-100"></div>


                <div class="col text-left mt-3" style="left: 5.5%;">
                <button type="button" class="btn btn-outline-success">Buy Tickets</button>
              </div>

              <div class="w-100"></div>

              <div class="col text-left mt-5" style="left: 5.5%; padding-right: 10%;">
                <p>
                  <strong v-if="loaded">{{this.currentParty[0].fields.description_event}}</strong>
                </p>
              </div>


              


            </div>
          </div>
        </card>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";
import header from "../layout/AppHeaderReveler.vue";
import footer from "../layout/AppFooter.vue";
import { setTimeout } from "timers";

export default {
  components: {
    GoogleMap: GoogleMap,
    "my-header": header,
    "my-footer": footer
  },
  data: function() {
    return {
      loading: false,
      loaded: false,
      currentParty: [],
      distance: this.$store.state.distance
    };
  },
  beforeMount: function() {
    this.getParty(this.$route.params.partyId);
  },
  mounted: function() {
    var _this = this;
    this.$store.watch(
      function(state) {
        return state.distance;
      },
      function() {
        _this.distance = _this.$store.getters.distance;
        console.log(_this.$store.getters.distance);
      },
      {
        deep: true //add this if u need to watch object properties change etc.
      }
    );
  },

  methods: {
    getParty: function(id) {
      var json = { id_event: id };
      this.loading = true;
      var _this = this;
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/events/",
          json,
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          this.loading = false;
          _this.loaded = true;
          this.currentParty = response.data;

          _this.$refs.GoogleMap.displayRoute(
            this.currentParty[0].fields.address_event
          );
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>
<style>
.affluence-container {
  padding-right: 7%;
  padding-left: 7%;
}
</style>