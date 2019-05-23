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
                  <h1 class="display-2 mb-0">Edit Event</h1>
                </div>
                <form role="form" @submit.prevent="submitEditEvent">
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
                      value="this.currentEvent[0].fields.name_event"
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
                          <option disabled></option>
                          <option id="concert" value="concert">Concert</option>
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
                  ></base-input>
                  <base-input
                    id="description"
                    name="description"
                    alternative
                    class="mb-3"
                    type="textbox"
                    v-model="event.description_event"
                    placeholder="description"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <div class="text-center">
                    <button class="btn btn-primary">Edit</button>
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
        state_event: "",
        version_number: "",
        type_event: ""
      },
      currentEvent: [],
      loading: false,
      loaded: false,
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
  beforeMount: function() {
    this.getEvent(this.$route.params.partyId);
    console.log(this.currentEvent);
  },
  mounted: function() {
    this.$refs.address_event.focus();
  },
  methods: {
    getAddressData: function(addressData, placeResultData, id) {
      this.address_event = addressData;
    },
    submitEditEvent() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
          this.msg = "All the fields are required!";
          this.seen = true;
        } else {
          this.event.address_event = this.address_event;
          this.event.lat = parseFloat(String(this.event.address_event.latitude).substring(0,8));
          this.event.lng = parseFloat(String(this.event.address_event.longitude).substring(0,8))
          if (this.address_event.route === undefined) {
            this.address_event.route = "";
          } else if (this.address_event.street_number === undefined) {
            this.address_event.street_number = "";
          } else if (this.address_event.locality === undefined) {
            this.address_event.locality = "";
          } else if (this.address_event.postal_code === undefined) {
            this.address_event.postal_code = "";
          } else if (this.address_event.administrative_area_level_1 === undefined) {
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
          this.addEvent();
        }
      });
    },
    editEvent: function() {
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
          this.$router.push("homeOrganizer");
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getEvent: function(id) {
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
          this.currentEvent = response.data;
          console.log(response.data);
          this.event =({
            id_user: this.$store.getters.currentIdUser,
            name_event: this.currentEvent[0].fields.name_event,
            theme_event: this.currentEvent[0].fields.theme_event,
            start_date: this.currentEvent[0].fields.start_date,
            end_date: this.currentEvent[0].fields.end_date,
            price: this.currentEvent[0].fields.price,
            address_event: this.currentEvent[0].fields.address_event,
            lat: this.currentEvent[0].fields.address_event.latitude,
            lng: this.currentEvent[0].fields.address_event.longitude,
            size_hosting: this.currentEvent[0].fields.size_hosting,
            description_event: this.currentEvent[0].fields.description_event,
            state_event: this.currentEvent[0].fields.state_event,
            creation_date: this.currentEvent[0].fields.creation_date,
            version_number: this.currentEvent[0].fields.version_number,
            type_event: this.currentEvent[0].fields.type_event,
          });
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>