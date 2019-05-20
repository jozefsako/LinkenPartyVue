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
                        <div class="row justify-content-center">
                            <GoogleMap ref='GoogleMap'></GoogleMap>
                        </div>
                        <button v-on:click="displayParties" type="button" class="btn btn-outline-primary" style="position: absolute;left: 8%; margin-top: 1%;">Display Events</button>
                        <div class="text-center mt-5">
                            <h3>Tendance</h3>                        
                            <PartyList ref='PartyList'></PartyList>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>

import GoogleMap from '../components/GoogleMap.vue'
import PartyList from '../components/PartyList.vue'
import header from "../layout/AppHeaderReveler.vue"
import footer from "../layout/AppFooter.vue"


export default {
  //name: 'google-map',
  components:{
      'GoogleMap' : GoogleMap,
      'PartyList' : PartyList,
      'my-header': header,
      'my-footer': footer
  },
  methods : {
      displayParties : function(){
          this.$refs.PartyList.sendParties(this.$refs.PartyList.parties);
          this.$refs.GoogleMap.displayMarkers();
          this.$refs.GoogleMap.displayCurrentPosition();
      }
  }
};

</script>
