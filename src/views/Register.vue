<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <h1 class="display-2 mb-0">Sign in</h1>
              </div>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  v-model="last_name"
                  placeholder="Last Name"
                  addon-left-icon="ni ni-circle-08"
                ></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  v-model="first_name"
                  placeholder="First Name"
                  addon-left-icon="ni ni-circle-08"
                ></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  v-model="username"
                  placeholder="Username"
                  addon-left-icon="ni ni-badge"
                ></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  v-model="email"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  alternative
                  type="password"
                  v-model="password_user"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <base-input
                  alternative
                  type="tel"
                  v-model="phone"
                  placeholder="+32000000000"
                  addon-left-icon="ni ni-mobile-button"
                ></base-input>

                <base-input alternative type="date" addon-left-icon="ni ni-calendar-grid-58"></base-input>
                <div class="col-lg-5 col-sm-6 mt-4 mt-md-0">
                  <div>
                    <small class="text-uppercase font-weight-bold">Gende:</small>
                  </div>
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="options" id="man" autocomplete="off" checked> Man
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="woman" autocomplete="off"> Woman
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="other" autocomplete="off"> Other
                    </label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                  <div>
                    <small class="text-uppercase font-weight-bold">Organizer?</small>
                  </div>
                  <base-switch type="checkbox" value="true"></base-switch>
                </div>
                <div class="text-center">
                  <router-link to="/homeReveler">
                    <base-button type="primary" class="my-4">Create account</base-button>
                  </router-link>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <router-link to="/" class="text-light">
                <small>I already have an account</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      last_name: "",
      first_name: "",
      username: "",
      email: "",
      password_user: "",
      phone: ""
    };
  }
};
</script>
