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
                  placeholder="Last Name"
                  addon-left-icon="ni ni-circle-08"
                ></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="First Name"
                  addon-left-icon="ni ni-circle-08"
                ></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Username"
                  addon-left-icon="ni ni-badge"
                ></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <base-input
                  alternative
                  type="tel"
                  placeholder
                  addon-left-icon="ni ni-mobile-button"
                ></base-input>
                <base-input alternative type="date" addon-left-icon="ni ni-calendar-grid-58"></base-input>
                <div class="col-lg-5 col-sm-6 mt-4 mt-md-0">
                  <div>
                    <small class="text-uppercase font-weight-bold">Gender:</small>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="man"
                      type="radio"
                      name="sex"
                      class="custom-control-input"
                      value="man"
                    >
                    <label for="man" class="custom-control-label">Man</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="woman"
                      type="radio"
                      name="sex"
                      class="custom-control-input"
                      value="woman"
                    >
                    <label for="woman" class="custom-control-label">Woman</label>
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      id="other"
                      type="radio"
                      name="sex"
                      class="custom-control-input"
                      value="other"
                    >
                    <label for="other" class="custom-control-label">Other</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                  <div>
                    <small class="text-uppercase font-weight-bold">Organizer?</small>
                  </div>
                  <label class="custom-toggle custom-radio">
                    <input type="checkbox">
                    <span class="custom-toggle-slider rounded-circle"></span>
                  </label>
                </div>
                <div class="text-center">
                  <router-link to="/home">
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
};
</script>
<style>
</style>
