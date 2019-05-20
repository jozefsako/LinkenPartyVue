<template>
  <section class="section section-shaped section-lg my-0 my-0">
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
                <h1 class="display-2 mb-0">Log in</h1>
              </div>
              <form role="form" @submit.prevent="handleSubmit">
                <div class="form-group">
                  <base-input
                    id="username"
                    name="username"
                    alternative
                    class="mb-3"
                    type="text"
                    v-model="user.username"
                    placeholder="Username"
                    addon-left-icon="ni ni-badge"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('username')}"
                  ></base-input>
                  <div
                    v-if="submitted && errors.has('username')"
                    class="invalid-feedback"
                  >This field is required.</div>
                </div>
                <div class="form-group">
                  <base-input
                    id="password_user"
                    name="password_user"
                    alternative
                    type="password"
                    v-model="user.password_user"
                    placeholder="Password"
                    addon-left-icon="ni ni-lock-circle-open"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('password_user')}"
                  ></base-input>
                  <div
                    v-if="submitted && errors.has('password_user')"
                    class="invalid-feedback"
                  >This field is required.</div>
                </div>
                <div class="text-center">
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <router-link to="/register" class="text-light">
                <small>Create new account</small>
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
        username: "",
        password_user: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert(JSON.stringify(this.user));
          this.$router.push('homeReveler');
        }
      });
    }
  }
};
</script>
<style>
</style>