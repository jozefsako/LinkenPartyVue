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
                <TableEvents></TableEvents>
            </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>

import GoogleMap from '../components/GoogleMap.vue'
import PartyList from '../components/PartyList.vue'
import TableEvents from "../components/TableEvents.vue"
import header from "../layout/AppHeaderOrganizer.vue"
import footer from "../layout/AppFooter.vue"


export default {
  //name: 'google-map',
  components:{
      GoogleMap,
      PartyList,
      TableEvents,
      'my-header': header,
      'my-footer': footer
  },
  displayParties : function(){
          this.$refs.PartyList.sendParties(this.$refs.PartyList.parties);
  }
};

</script>
