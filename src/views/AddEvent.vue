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
                    alternative
                    class="mb-3"
                    type="text"
                    placeholder="name_event"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    type="text"
                    placeholder="theme_event"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <vue-ctk-date-time-picker ></vue-ctk-date-time-picker>
                  <base-input
                    alternative
                    class="mb-3"
                    type="date"
                    placeholder="start_date"
                    addon-left-icon="ni ni-badge"
                  ></base-input>                  
                  <vue-ctk-date-time-picker ></vue-ctk-date-time-picker>
                  <base-input
                    alternative
                    class="mb-3"
                    type="date"
                    placeholder="end_date"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    type="number"
                    placeholder="price"
                    min="0"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <base-input
                    ref="autocomplete"
                    placeholder="Search"
                    class="search-location"
                    onfocus="value = ''"
                    type="text"
                    addon-left-icon="ni ni-badge"
                  />
                  <base-input
                    alternative
                    class="mb-3"
                    type="number"
                    min="1"
                    placeholder="size_hosting"
                    addon-left-icon="ni ni-badge"
                  ></base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    type="textbox"
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
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';


export default { 
  components: {
    VueCtkDateTimePicker,
    "my-header": header,
    "my-footer": footer
  }
};
</script>
