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
              <form role="form" @submit.prevent="submitLogin">
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
                </div>
                <div class="form-group">
                  <base-input
                    id="password"
                    name="password"
                    alternative
                    class="mb-3"
                    type="password"
                    v-model="user.password"
                    placeholder="Password"
                    addon-left-icon="ni ni-lock-circle-open"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('password')}"
                  ></base-input>
                </div>
                <div class="text-center">
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
            </template>
            <span class="error text-danger" v-if="seen">{{msg}}</span>
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
        password: ""
      },
      msg: "All the fields are required!",
      submitted: false,
      seen: false
    };
  },
  methods: {
    submitLogin() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
          this.msg = "All the fields are required";
          this.seen = true;
        } else {
          this.sendUser();
        }
      });
    },
    sendUser: function() {
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/users/",
          JSON.stringify(this.user),
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          this.user = response.data[0];
          console.log(response.data[0].pk);
          console.log(response.data);
          this.$store.commit("changeCurrentIdUser", response.data[0].pk);
          if (response.data[0].fields.type_user === "O") {
            this.$router.push("homeOrganizer");
          } else {
            this.$router.push("homeReveler");
          }
        })
        .catch(err => {
          this.msg = "You have to sign in !";
          this.seen = true;
          console.log(err);
        });
    }
  }
};
</script>