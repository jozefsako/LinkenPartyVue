<template>
  <div class="profile-page">
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
      <!--<section class="section section-skew">-->
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="container pt-lg-md">
              <template>
                <div class="container">
                  <div class="text-muted text-center mb-3">
                    <h1 class="display-2 mb-0">Sign in</h1>
                  </div>
                  <form role="form" @submit.prevent="submitSignin">
                    <div class="form-group">
                      <base-input
                        id="last_name"
                        name="last_name"
                        alternative
                        type="text"
                        class="mb-3"
                        v-model="userRegister.last_name"
                        placeholder="Last Name"
                        addon-left-icon="ni ni-circle-08"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('last_name')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <base-input
                        id="first_name"
                        name="first_name"
                        alternative
                        type="text"
                        class="mb-3"
                        v-model="userRegister.first_name"
                        placeholder="First Name"
                        addon-left-icon="ni ni-circle-08"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('first_name')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <base-input
                        id="username"
                        name="username"
                        alternative
                        type="text"
                        class="mb-3"
                        v-model="userRegister.username"
                        placeholder="Username"
                        addon-left-icon="ni ni-badge"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('username')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <base-input
                        id="email"
                        name="email"
                        alternative
                        type="email"
                        class="mb-3"
                        v-model="userRegister.email"
                        placeholder="Email"
                        addon-left-icon="ni ni-email-83"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('email')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <base-input
                        id="password"
                        name="password"
                        alternative
                        type="password"
                        class="mb-3"
                        v-model="userRegister.password"
                        placeholder="Password"
                        addon-left-icon="ni ni-lock-circle-open"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('password')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <base-input
                        id="phone"
                        name="phone"
                        alternative
                        type="tel"
                        class="mb-3"
                        v-model="userRegister.phone"
                        placeholder="+32/000.00.00.00"
                        addon-left-icon="ni ni-mobile-button"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('phone')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <base-input
                        id="birthdate"
                        name="birthdate"
                        alternative
                        type="date"
                        data-date
                        data-date-format="YYYY-MM-DD"
                        v-model="userRegister.birthdate"
                        addon-left-icon="ni ni-calendar-grid-58"
                        v-validate="'required'"
                        :class="{ 'is-invalid': submitted && errors.has('birthdate')}"
                      ></base-input>
                    </div>
                    <div class="form-group">
                      <div class="col-lg-5 col-sm-6 mt-4 mt-md-0">
                        <div>
                          <small class="text-uppercase font-weight-bold">Gender:</small>
                        </div>
                        <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                          <select
                            id="gender"
                            name="gender"
                            alternative
                            v-model="userRegister.gender"
                            v-validate="'required'"
                            :class="{ 'is-invalid': submitted && errors.has('gender')}"
                          >
                            <option id="m" value="M" selected>Male</option>
                            <option id="f" value="F">Female</option>
                            <option id="o" value="O">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                        <div>
                          <small class="text-uppercase font-weight-bold">Organizer?</small>
                        </div>
                        <div class="col-lg-6 col-sm-6 mt-4 mt-md-0">
                          <section>
                            <label>Reveler</label>
                            <input
                              type="radio"
                              name="type_user"
                              value="F"
                              v-model="userRegister.type_user"
                              checked
                              v-validate="'required'"
                              :class="{ 'is-invalid': submitted && errors.has('type_user')}"
                            >
                            <label>Organizer</label>
                            <input
                              type="radio"
                              name="type_user"
                              value="O"
                              v-model="userRegister.type_user"
                              v-validate="'required'"
                              :class="{ 'is-invalid': submitted && errors.has('type_user')}"
                            >
                          </section>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <button class="btn btn-primary">Sign in</button>
                    </div>
                  </form>
                </div>
              </template>

              <span class="error text-danger" v-if="seen">{{msg}}</span>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data: function() {
    return {
      userRegister: {
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
        registration_date: moment(new Date()).format("YYYY-MM-DD")
      },
      msg: "All the fields are required, or the password doesn't match !",
      submitted: false,
      seen: false
    };
  },
  methods: {
    submitSignin() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
          this.msg =
            "All the fields are required, or the password doesn't match !";
          console.log(JSON.stringify(this.userRegister));
          this.seen = true;
        } else {
          this.seen = false;
          this.addUser();
        }
      });
    },
    addUser: function() {
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/register",
          JSON.stringify(this.userRegister),
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          this.userRegister = response.data[0];
          if (response.body.type_user === "O") {
            this.$router.push("homeOrganizer");
          } else {
            this.$router.push("homeReveler");
          }
        })
        .catch(err => {
          this.msg = "You already have an account!";
          this.seen = true;
          console.log(err);
        });
    }
  }
};
</script>
