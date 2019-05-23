<template>
  <div class="card shadow card-profile mt--300">
    <div class="card-header border-0">
      <h3 class="mb-0">Events</h3>
      <router-link
        :to="{ path: '/addEvent/'+ this.$store.getters.currentIdUser}"
        style="float: right;"
        class="btn btn-secondary btn-sm"
        role="link"
      >Add event</router-link>
    </div>
    <div class="table-responsive" v-if="loaded">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">State</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <router-link
            :to="{path: '/editEvent/'+ event.pk}"
            tag="tr"
            v-for="event in events"
            :key="event.pk"
            class="row-style"
            style=":hover {background: yellow}"
          >
            <th scope="row">
              <div class="media align-items-center">
                <div class="media-body">
                  <span class="mb-0 text-sm">{{event.fields.name_event}}</span>
                </div>
              </div>
            </th>
            <td v-if="event.fields.start_date === null"></td>
            <td v-else>{{reformatDate(event.fields.start_date)}}</td>
            <td v-if="event.fields.price === null">Free</td>
            <td v-else>{{(event.fields.price).toFixed(2)}}€</td>
            <td>
              <div class="d-flex align-items-center">
                <span 
                  v-if="event.fields.state_event==='Confirmed'"
                  class="badge badge-pill badge-success"
                >Confirmed</span>
                <span v-else class="badge badge-pill badge-danger">Canceled</span>
                <div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 60%;"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td class="text-right">
              <button
                v-on:click.stop="updateState(event.pk,event.fields.state_event)"
                type="button"
                class="btn btn-primary btn-sm"
              >Cancel</button>
            </td>
          </router-link>
        </tbody>
      </table>
    </div>
    <div class="card-footer py-4">
      <nav aria-label="..."></nav>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data: function() {
    return {
      date: "",
      loaded: false,
      deleted: false,
      pourcentage: "",
      events: []
    };
  },
  beforeMount: function() {
    this.getEvents(this.$store.getters.currentIdUser);
  },
  methods: {
    getEvents: function(id) {
      var json = { id_user: id };
      console.log(json);
      var _this = this;
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/userEvents",
          json,
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.events = response.data;
          console.log(this.events);
          for (var i = 0; i < this.events.length; i++) {
            _this.getParticipations(
              this.events[i].pk,
              this.events[i].fields.size_hosting
            );
          }
          this.loaded = true;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    reformatDate(date) {
      var reformat = moment(String(date)).format("DD/MM/YYYY");
      return reformat;
    },
    checkState(state) {
      if (state === "confirmed") {
        this.deleted = false;
      } else {
        this.deleted = true;
      }
    },
    updateState(id,state) {
      var json = { id_event: id, state_event: state };
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/updateStateEvent",
          JSON.stringify(json),
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          console.log("okkkk");
          this.event = response.data[0];
          this.$router.push("/homeOrganizer");
          console.log(response);
        })
        .catch(err => {
          console.log(json);
          console.log(err);
        });
    },
    getParticipations(id, size) {
      var json = { id_event: id };
      var _this = this;
      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/eventParticipations",
          json,
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          _this.pourcentage = Math.floor((response.data.length / size) * 100);
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
      this.loaded = true;
    }
  }
};
</script>
<style>
.row-style:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}
</style>