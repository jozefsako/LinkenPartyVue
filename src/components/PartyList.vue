<template>
  <div class="col-lg-12" style="padding: 0 !important;">
    <div class="row row-grid list-party">
      <div v-for="party in parties" :key="party.id" class="col-lg-4">
        <div class="card card-lift--hover shadow border-0" style="margin-bottom: 30px;">
          <div class="card-body py-3">
            <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
              <i class="ni ni-sound-wave"></i>
            </div>
            <h6 class="text-primary text-uppercase">{{party.fields.name_event}}</h6>
            <p class="description mt-3" style="max-height: 100px; min-height: 100px;">{{party.fields.description_event}}</p>
            <h5 class="description mt-3">{{party.fields.address_event}}</h5>
            <div>
              <span class="badge badge-pill badge-primary">{{party.fields.theme_event}}</span>
            </div>
            <router-link :to="{ path: '/partyDetails/'+ party.pk}"  class="btn btn-primary mt-4" role="link">Learn more</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  https: {
    root: '/root',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type'
    }
  },
  components: {},
  
  
  data: function(){
    return {
      parties: [],
      loading: false
    }
  },
  beforeMount: function(){
    this.getParties();
  },
  
  updated: function(){
    console.log(this.parties);
  },
  methods: {
    getParties: function() {
      this.loading = true;
      this.$http
        .get("https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/allEvents")
        .then(response => {
          this.parties = response.data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    sendParties: function(parties){
      for(var i=0;i<parties.length;i++){
        this.$store.commit("addParty", parties[i].fields);
      }
    }
  }
};
</script>

<style>
.list-party {
  
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>

