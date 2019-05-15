<template>
    <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
    }
  },
  mounted: function () {
    var initialLocation;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
        var marker = new google.maps.Marker({ position: initialLocation, map:map});
        marker.setMap(map);
     });
    }
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: initialLocation,
      disableDefaultUI: true
    }
    const map = new google.maps.Map(element, options);
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

