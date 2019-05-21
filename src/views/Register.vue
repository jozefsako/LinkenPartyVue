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
              <div class="container">
                <div class="text-muted text-center mb-3">
                  <h1 class="display-2 mb-0">Sign in</h1>
                </div>
                <form role="form" @submit.prevent="handleSubmit">
                  <base-input
                    id="last_name"
                    name="last_name"
                    alternative
                    type="text"
                    class="mb-3"
                    v-model="user.last_name"
                    placeholder="Last Name"
                    addon-left-icon="ni ni-circle-08"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('last_name')}"
                  ></base-input>
                  <base-input
                    id="first_name"
                    name="first_name"
                    alternative
                    type="text"
                    class="mb-3"
                    v-model="user.first_name"
                    placeholder="First Name"
                    addon-left-icon="ni ni-circle-08"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('first_name')}"
                  ></base-input>
                  <base-input
                    id="username"
                    name="username"
                    alternative
                    type="text"
                    class="mb-3"
                    v-model="user.username"
                    placeholder="Username"
                    addon-left-icon="ni ni-badge"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('username')}"
                  ></base-input>
                  <base-input
                    id="email"
                    name="email"
                    alternative
                    type="email"
                    class="mb-3"
                    v-model="user.email"
                    placeholder="Email"
                    addon-left-icon="ni ni-email-83"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('email')}"
                  ></base-input>
                  <base-input
                    id="password"
                    name="password"
                    alternative
                    type="password"
                    class="mb-3"
                    v-model="user.password"
                    placeholder="Password"
                    addon-left-icon="ni ni-lock-circle-open"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('password')}"
                  ></base-input>
                  <base-input
                    id="phone"
                    name="phone"
                    alternative
                    type="tel"
                    class="mb-3"
                    v-model="user.phone"
                    placeholder="+32000000000"
                    addon-left-icon="ni ni-mobile-button"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('phone')}"
                  ></base-input>
                  <base-input
                    id="birthdate"
                    name="birthdate"
                    alternative
                    type="date"
                    v-model="user.birthdate"
                    addon-left-icon="ni ni-calendar-grid-58"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('birthdate')}"
                  ></base-input>
                  <div class="col-lg-5 col-sm-6 mt-4 mt-md-0">
                    <div>
                      <small class="text-uppercase font-weight-bold">Gender:</small>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                    <div>
                      <small class="text-uppercase font-weight-bold">Organizer?</small>
                    </div>
                    <base-switch type="checkbox" value="true" v-model="user.type_user"></base-switch>
                  </div>
                  <div class="text-center">
                    <div class="text-center">
                      <button class="btn btn-primary">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
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
  data: function() {
    return {
      user: {
        last_name: "",
        first_name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        birthdate: "",
        gender: "",
        type_user: "",
        version_number: 0,
        registration_date: new Date()
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        alert(JSON.stringify(this.user));
        this.$router.push("homeReveler");
      });
    }
  }
};
</script>
