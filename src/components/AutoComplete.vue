<template>
    <div>
        <vueGoogleAutocomplete
            ref="address_event"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
        >
        </vueGoogleAutocomplete>
    </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
 
    export default {
        components: { 
            VueGoogleAutocomplete 
        },
 
        data: function () {
            return {
              address_event: ''
            }
        },
 
        mounted: function (){
            // To demonstrate functionality of exposed component functions
            // Here we make focus on the user input
            this.$refs.address_event.focus();
            console.log(this.address_event);
         },
 
        methods: {
            /**
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
            getAddressData: function (addressData, placeResultData, id) {
                this.address_event = addressData;
            }
        }
    }
</script>