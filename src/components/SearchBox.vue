<template>
<div class="ais-InstantSearch">
<ais-instant-search
    :search-client="searchClient"
    index-name="name_events">
    <div  @click="clearIndexes" class="active-cyan-4 mb-4" style="padding-top:20px">
        <ais-search-box placeholder="Search name events"></ais-search-box>
    </div>
    <ais-hits>
        <template slot="item" slot-scope="{ item }">
            <div class="col-lg-12" >
                <div class="row row-grid ">
                    <div class="col-lg-4">
                        <div class="card card-lift--hover shadow border-0" id="styleCardHover">
                            <div class="card-body py-3" >
                                <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                    <i class="ni ni-sound-wave"></i>
                                </div>
                                <h6 class="text-primary text-uppercase">{{item.fields.name_event}}</h6>
                                <p class="description mt-3">{{item.fields.description_event}}</p>
                                <h5 class="description mt-3">{{item.fields.address_event}}</h5>
                                <div>
                                    <span class="badge badge-pill badge-primary">{{item.fields.theme_event}}</span>
                                </div>
                                <router-link :to="{ path: '/partyDetails/'+ item.pk}"  class="btn btn-primary mt-4" role="link">Learn more</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ais-hits>
</ais-instant-search>
<ais-instant-search
    :search-client="searchClient"
    index-name="theme_events">
        <div class="active-cyan-4 mb-4" style="padding-top:20px">
        <ais-search-box placeholder="Search theme events" class="srchBx"></ais-search-box>
        </div>
        <ais-hits>
            <template slot="item" slot-scope="{ item }">
                <div class="col-lg-12" >
                    <div class="row row-grid ">
                        <div class="col-lg-4">
                            <div class="card card-lift--hover shadow border-0" id="styleCardHover">
                                <div class="card-body py-3">
                                    <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                        <i class="ni ni-sound-wave"></i>
                                    </div>
                                    <h6 class="text-primary text-uppercase">{{item.fields.name_event}}</h6>
                                    <p class="description mt-3">{{item.fields.description_event}}</p>
                                    <h5 class="description mt-3">{{item.fields.address_event}}</h5>
                                    <div>
                                        <span class="badge badge-pill badge-primary">{{item.fields.theme_event}}</span>
                                    </div>
                                    <router-link :to="{ path: '/partyDetails/'+ item.pk}"  class="btn btn-primary mt-4" role="link">Learn more</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </ais-hits>
</ais-instant-search>
</div>
</template>

<script>
import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch(
  'NW4OPPNOXB',
  'b5da7ab0f6bf0f73c1050bac466322b3'
);

const indexClientT = algoliaClient.initIndex('theme_events');
const indexClientN = algoliaClient.initIndex('name_events');


const searchClient = {
  async search(requests) {
    // change conditional if any of the other facets are faked"
    if (requests.every(({ params: { query } }) => Boolean(query) === false)) {
      return {
        results: requests.map(params => {
          // fake something of the result if used by the search interface
          
          return {
            processingTimeMS: 0,
            nbHits: 0,
            hits: [],
            facets: {},
          };
        }),
      };
    }
    return algoliaClient.search(requests);
  },
  async searchForFacetValues(requests) {
    return algoliaClient.searchForFacetValues(requests);
  },
};

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
    
    data: function() {
        return {
            searchClient,
            events: [],
        };
    },

    beforeMount: function(){
        
        //this.updateAlgolia();  
  },

    methods: {
        fetchEventsFromDatabase: function() {
        this.loading = true;
        var _this = this;
        this.$http
            .get("https://cors-anywhere.herokuapp.com/https://linkenpartydjango.azurewebsites.net/api/allEvents")
            .then(response => {
                this.events = response.data;
                this.loading = false;
                _this.updateAlgolia(this.events);
            })
            .catch(err => {
                this.loading = false;
                console.log(err);
            });
        },
        updateAlgolia: function(events){
            indexClientT.addObjects(events);
            indexClientN.addObjects(events);
        },
        clearIndexes: function(events){
            indexClientT.clearIndex();
            indexClientN.clearIndex();
            this.fetchEventsFromDatabase();
        },
    }
};


</script>

<style>
.ais-SearchBox {
    position: absolute;
    right: 8%;
}

.ais-Hits-list{
    display: block;
    margin-top: 5%;
    padding-top:20px
}

.ais-Hits-item {
    width: 100%;
    padding-bottom:50px
}

#styleCardHover {
    width: 345%; 
    height: 110%;
    margin-left:-15%;
    margin-top:-5%
}
</style>