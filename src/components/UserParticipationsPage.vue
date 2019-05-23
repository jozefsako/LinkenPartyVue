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
              <div class="text-center mt-5">
                  <h3>Participations</h3>
              <div class="col-lg-12" style="padding: 0 !important;">
                <div class="row row-grid list-party">
                  <div  v-for="event in events" :key="event.id" class="col-lg-4">
                    <div class="card card-lift--hover shadow border-0" style="margin-bottom: 30px;">
                      <div class="card-body py-3">
                        <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i class="ni ni-sound-wave"></i>
                        </div>
                        <h6 class="text-primary text-uppercase">{{event.fields.name_event}}</h6>
                        <p
                          class="description mt-3"
                          style="max-height: 100px; min-height: 100px;"
                        >{{event.fields.description_event}}</p>
                        <h5 class="description mt-3" style="min-height: 36px; max-height: 36px;">{{event.fields.address_event}}</h5>
                        <div>
                          <span class="badge badge-pill badge-primary">{{event.fields.theme_event}}</span>
                        </div>
                        <router-link
                          :to="{ path: '/partyDetails/'+ event.pk}"
                          class="btn btn-primary mt-4"
                          role="link"
                        >Learn more</router-link>
                      </div>
                    </div>
                  </div>
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
import header from "../layout/AppHeaderReveler.vue";
import footer from "../layout/AppFooter.vue";

export default {
  components: {
    "my-header": header,
    "my-footer": footer
  },
  data: function() {
    return {
      events: []
    };
  },
  beforeMount: function() {
    this.getEvents(this.$route.params.userId);
  },
  methods: {
    getEvents: function(id) {
      var json = { id_user: id };
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/fetarEvents",
          json,
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.events = response.data;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>