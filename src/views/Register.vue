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
                <small>Sign in</small>
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
                <base-input
                  alternative
                  placeholder="Birthday"
                  addon-left-icon="ni ni-calendar-grid-58"
                >
                  <datepicker></datepicker>
                </base-input>
                <base-input addon-left-icon="ni ni-ui-04">
                  type user:
                  <label class="custom-toggle">
                    <input type="checkbox">
                    <span class="custom-toggle-slider rounded-circle"></span>
                  </label>
                </base-input>
                <base-input addon-left-icon="ni ni-ui-04">
                  <div class="dropdown">
                    <a
                      href="#"
                      class="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      id="navbarDropdownMenuLink2"
                    >Sex</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                      <li>
                        <a class="dropdown-item" href="#" addon-left-icon="ni ni-icon-male">Male</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#" addon-left-icon="ni ni-icon-female">Female</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#" addon-left-icon="ni ni-icon-random">Other</a>
                      </li>
                    </ul>
                  </div>
                </base-input>

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
//import Datepicker from 'vuejs-datepicker';
export default {
  //components: Datepicker
};
</script>
<style>
</style>
