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
                Distance <span class="badge badge-pill badge-info">{{distance}}</span>
              </div>
              <div class="col text-center mt-5">
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

export default {
  components: {
    GoogleMap: GoogleMap,
    "my-header": header,
    "my-footer": footer
  },
  data: function() {
    return {
      currentParty: {},
      distance: this.$store.state.distance
    };
  },
  created: function() {
    //this.getParty(this.$route.params.partyId);
    console.log(this.$route.params.partyId);
  },
  mounted: function() {
    this.$refs.GoogleMap.displayRoute("rue Lincoln 22, Uccle");
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
      this.loading = true;
      this.$http
        .get(
          `https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/event/${id}`
        )
        .then(response => {
          this.currentParty = response.data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>