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
                <form role="form">
                  <base-input
                    id="name_event"
                    name="name_event"
                    alternative
                    class="mb-3"
                    type="text"
                    v-model="event.name_event"
                    placeholder="Name"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <div class="form-group">
                    <div class="col-lg-5 col-sm-6 mt-4 mt-md-0">
                      <div>
                        <small class="text-uppercase font-weight-bold">Theme:</small>
                      </div>
                      <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                        <select
                          id="theme_event"
                          name="theme_event"
                          alternative
                          v-model="event.theme_event"
                          v-validate="'required'"
                          :class="{ 'is-invalid': submitted && errors.has('theme_event')}"
                        >
                          <option id="concert" value="Concert" selected>Concert</option>
                          <option id="private" value="Private">Private</option>
                          <option id="public" value="Public">Public</option>
                          <option id="party" value="Party">Party</option>
                          <option id="free" value="Free">Free</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <base-input
                    id="theme_event"
                    name="theme_event"
                    alternative
                    class="mb-3"
                    type="text"
                    v-model="event.theme_event"
                    placeholder="A CHANGER!!!!!!!"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <vue-ctk-date-time-picker v-model="event.start_date"></vue-ctk-date-time-picker>
                  <vue-ctk-date-time-picker v-model="event.end_date"></vue-ctk-date-time-picker>
                  <base-input
                    id="price"
                    name="price"
                    alternative
                    class="mb-3"
                    type="number"
                    v-model="event.price"
                    placeholder="price"
                    min="0"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <base-input
                    id="address_event"
                    name="address_event"
                    v-model="event.address_event"
                    ref="autocomplete"
                    placeholder="Search"
                    class="search-location"
                    onfocus="value = ''"
                    type="text"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
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
                    v-model="event.description"
                    placeholder="description"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <div class="text-center">
                    <router-link to="#">
                      <base-button type="primary" class="my-4">Add</base-button>
                    </router-link>
                  </div>
                </form>
              </template>
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

export default {
  data: function() {
    return {
      event: {
        id_user: "1",
        name_event: "",
        theme_event: "",
        start_date: "",
        end_date: "",
        price: "",
        address_event: "",
        size_hosting: "",
        description_event: "",
        state_event: "Confirmed",
        creation_date: new Date(),
        version_number: 0,
        type_event: "",
        autocomplete: ""
      }
    };
  },
  components: {
    VueCtkDateTimePicker,
    "my-header": header,
    "my-footer": footer
  }
};
</script>