<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
var map;
var initialLocation;
var distance;
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
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: initialLocation,
      disableDefaultUI: true
    };

    map = new google.maps.Map(element, options);
  },
  methods: {
    displayCurrentPosition: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          initialLocation = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          map.setCenter(initialLocation);
          var marker = new google.maps.Marker({
            position: initialLocation,
            map: map,
            animation: google.maps.Animation.DROP
          });
          marker.setMap(map);
        });
      }
    },
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
    displayRoute: function(addressDestination) {
      var directionsService = new google.maps.DirectionsService();
      let _this = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        // Center on user's current location if geolocation prompt allowed
        let from = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        var directionsRequest = {
          origin: from,
          destination: addressDestination,
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC
        };
        directionsService.route(directionsRequest, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            new google.maps.DirectionsRenderer({
              map: map,
              directions: response
            });
          } else console.log("error");
        });
        let response;
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [from],
            destinations: [addressDestination],
            travelMode: "DRIVING",
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function(response, status) {
              _this.storeDistance(response.rows[0].elements[0].distance.text);
          });
      });
    },
    storeDistance: function(distance){
      this.$store.commit("change", distance);
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

