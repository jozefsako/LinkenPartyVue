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
            <div class="container pt-lg-md">
              <template>
                <div class="text-muted text-center mb-3">
                  <h1 class="display-2 mb-0">Add Event</h1>
                </div>
                <form role="form" @submit.prevent="submitAddEvent">
                  <div class="form-group">
                    <base-input
                      id="name_event"
                      name="name_event"
                      alternative
                      class="mb-3"
                      type="text"
                      v-model="event.name_event"
                      placeholder="Name"
                      addon-left-icon="ni ni-badge"
                      v-validate="'required'"
                      :class="{ 'is-invalid': submitted && errors.has('name_event')}"
                    ></base-input>
                  </div>
                  <base-input
                    id="theme_event"
                    name="theme_event"
                    alternative
                    class="mb-3"
                    type="text"
                    v-model="event.theme_event"
                    placeholder="theme_event"
                    addon-left-icon="ni ni-badge"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('theme_event')}"
                  ></base-input>
                  <div class="form-group">
                    <div class="col-lg-5 col-sm-6 mt-4 mt-md-0">
                      <div>
                        <small class="text-uppercase font-weight-bold">Type:</small>
                      </div>
                      <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                        <select
                          id="type_event"
                          name="type_event"
                          alternative
                          v-model="event.type_event"
                          v-validate="'required'"
                          :class="{ 'is-invalid': submitted && errors.has('type_event')}"
                        >
                          <option id="concert" value="concert" selected>Concert</option>
                          <option id="private" value="private">Private</option>
                          <option id="public" value="public">Public</option>
                          <option id="party" value="party">Party</option>
                          <option id="free" value="free">Free</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <vue-ctk-date-time-picker
                    id="start_date"
                    name="start_date"
                    alternative
                    class="mb-3"
                    type="date"
                    data-date
                    data-date-format="YYYY-MM-DDThh:mm:ssZ"
                    addon-left-icon="ni ni-badge"
                    v-model="event.start_date"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('start_date')}"
                  ></vue-ctk-date-time-picker>
                  <vue-ctk-date-time-picker
                    id="end_date"
                    name="end_date"
                    alternative
                    class="mb-3"
                    type="date"
                    data-date
                    data-date-format="YYYY-MM-DDThh:mm:ssZ"
                    addon-left-icon="ni ni-badge"
                    v-model="event.end_date"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('end_date')}"
                  ></vue-ctk-date-time-picker>
                  <base-input
                    id="price"
                    name="price"
                    alternative
                    class="mb-3"
                    type="number"
                    v-model="event.price"
                    placeholder="price"
                    min="0"
                    step="any"
                    addon-left-icon="ni ni-badge"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('price')}"
                  ></base-input>
                  <vueGoogleAutocomplete
                    ref="address_event"
                    id="map"
                    class="form-control"
                    placeholder="Please type your address"
                    v-on:placechanged="getAddressData"
                    v-model="event.address_event"
                  ></vueGoogleAutocomplete>
                  <base-input
                    id="size_hosting"
                    name="size_hosting"
                    alternative
                    class="mb-3"
                    type="number"
                    min="1"
                    v-model="event.size_hosting"
                    placeholder="size_hosting"
                    addon-left-icon="ni ni-badge"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('size_hosting')}"
                  ></base-input>
                  <textarea
                    id="description_event"
                    name="description_event"
                    rows="4"
                    cols="80"
                    v-model="event.description_event"
                    placeholder="Description..."
                    class="form-control form-control-alternative mb-3"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('description_event')}"
                  ></textarea>
                  <div class="text-center">
                    <button class="btn btn-primary">Add</button>
                  </div>
                </form>
              </template>
              <span class="error text-danger" v-if="seen">{{msg}}</span>
            </div>
          </div>
        </card>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>
<script>
import header from "../layout/AppHeaderOrganizer.vue";
import footer from "../layout/AppFooter.vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import moment from "moment";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  data: function() {
    return {
      event: {
        id_user: this.$store.getters.currentIdUser,
        name_event: "",
        theme_event: "",
        start_date: "",
        end_date: "",
        price: "",
        address_event: "",
        lat: "",
        lng: "",
        size_hosting: "",
        description_event: "",
        state_event: "Confirmed",
        creation_date: moment(new Date()).format("YYYY-MM-DDThh:mm:ssZ"),
        version_number: 0,
        type_event: ""
      },
      msg: "All the fields are required!",
      submitted: false,
      seen: false
    };
  },
  components: {
    VueGoogleAutocomplete,
    VueCtkDateTimePicker,
    "my-header": header,
    "my-footer": footer
  },
  mounted: function() {
    this.$refs.address_event.focus();
  },
  methods: {
    getAddressData: function(addressData, placeResultData, id) {
      this.address_event = addressData;
    },
    submitAddEvent() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
          this.msg = "All the fields are required!";
          this.seen = true;
        } else {
          this.event.address_event = this.address_event;
          this.event.lat = parseFloat(
            String(this.event.address_event.latitude).substring(0, 8)
          );
          this.event.lng = parseFloat(
            String(this.event.address_event.longitude).substring(0, 8)
          );
          if (this.address_event.route === undefined) {
            this.address_event.route = "";
          } else if (this.address_event.street_number === undefined) {
            this.address_event.street_number = "";
          } else if (this.address_event.locality === undefined) {
            this.address_event.locality = "";
          } else if (this.address_event.postal_code === undefined) {
            this.address_event.postal_code = "";
          } else if (
            this.address_event.administrative_area_level_1 === undefined
          ) {
            this.address_event.administrative_area_level_1 = "";
          } else if (this.address_event.countrys === undefined) {
            this.address_event.country = "";
          }
          this.event.address_event =
            this.address_event.route +
            " " +
            this.address_event.street_number +
            " " +
            this.address_event.locality +
            " " +
            this.address_event.postal_code +
            " " +
            this.address_event.administrative_area_level_1 +
            " " +
            this.address_event.country;
          this.event.start_date = moment(this.event.start_date).format(
            "YYYY-MM-DDThh:mm:ssZ"
          );
          this.event.end_date = moment(this.event.end_date).format(
            "YYYY-MM-DDThh:mm:ssZ"
          );
          if (this.event.type_event === "free") {
            this.price = 0;
            this.event.price = 0;
          }
          console.log(JSON.stringify(this.event));
          console.log(this.address_event);
          this.addEvent();
        }
      });
    },
    addEvent: function() {
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/addEvent",
          JSON.stringify(this.event),
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          this.event = response.data[0];
          this.$router.push("/homeOrganizer");
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>