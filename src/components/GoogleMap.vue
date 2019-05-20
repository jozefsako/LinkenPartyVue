<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
var map;
export default {
  name: "google-map",
  props: ["name"],

  data: function() {
    return {
      mapName: this.name + "-map",
      partyList: []
    };
  },
  mounted: function() {
    var initialLocation;
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: initialLocation,
      disableDefaultUI: true
    };

    map = new google.maps.Map(element, options);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        map.setCenter(initialLocation);
        var marker = new google.maps.Marker({
          position: initialLocation,
          map: map
        });
        marker.setMap(map);
      });
    }
  },
  updated: function() {
    var parties = this.$store.getters.parties;
    console.log("dqsdqsd", parties.length);
  },
  methods: {
    displayMarkers: function() {
      var parties = this.$store.getters.parties;
      var geocoder = new google.maps.Geocoder();
      for (var i = 0; i < parties.length; i++) {
        geocoder.geocode({ address: parties[i].address_event }, function(
          results,
          status
        ) {
          if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            var location = new google.maps.LatLng(latitude, longitude);
            var marker = new google.maps.Marker({
              position: location,
              map: map
            });
            marker.setMap(map);
          }
        });
      }
    },
    displayOneMarker: function(){
      
    }
  }
};
</script>
<style>
.google-map {
  width: 850px;
  height: 400px;
  background: white;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
}
</style>

