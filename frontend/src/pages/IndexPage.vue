<template>
  <q-page>
    <GMapMap
      class="vuemap"
      :center="center"
      :zoom="zoom"
      :click="true"
      ref="myMapRef"
      @click="handleClick"
      map-type-id="roadmap"
      :options="options"
    >
      <GMapPolygon
        :clickable="false"
        ref="mapPolygon"
        :options="optPol"
        :paths="paths"
      />
      <GMapPolygon :paths="paths2" />
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>

      <q-page-sticky class="menu" position="top-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="accent" @click="geoloc()" />
       
      </q-page-sticky>

      <q-page-sticky class="menu" position="bottom-left" :offset="[18, 18]">
        <q-btn fab icon="add" color="accent" @click="zoomIn" />
        <q-btn fab icon="dash" color="accent" @click="zoomOut" />
      </q-page-sticky>
    </GMapMap>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { setupContainsLatLng } from "../util/is-point-within-polygon.js";
export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      center: { lat: 45.041, lng: 7.65 },
      location: "",
      zoom: 17,
      paths: [
        { lat: 45.043549336965455, lng: 7.649626494451973 },
        { lat: 45.04265135308057, lng: 7.652168289176769 },
        { lat: 45.0401684079395, lng: 7.650603718320271 },
        { lat: 45.041109363807095, lng: 7.6478745801595815 },
      ],
      paths2: [
        { lat: 45.043549336965455, lng: 7.649626494451973 },
        { lat: 45.04265135308057, lng: 7.652168289176769 },
        { lat: 45.041109363807095, lng: 7.6478745801595815 },
      ],
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
      ],
      optPol: {
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#0000FF",
        fillOpacity: 0.35,
        clickable: false,
      },
      options: {
        zoomControl: false,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
        styles: [
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#dcdcdc",
              },
            ],
          },
        ],
      },

      latUser: 0,
      longUser: 0,
    };
  },

  computed: {
  },

  methods: {

    trackPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(this.successPosition, this.failurePosition, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        })
      } else {
        alert(`Browser doesn't support Geolocation`)
      }
    },

    successPosition: function(position) {
      this.markers[0].position.lat = position.coords.latitude;
      this.markers[0].position.lng = position.coords.longitude;

      //set marker to new locatio
      this.$refs.mapPolygon.$polygonPromise.then((res) => {
          let isWithinPolygon = res.containsLatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          console.log({ isWithinPolygon });
        });
    },

    failurePosition: function(err) {
      alert('Error Code: ' + err.code + ' Error Message: ' + err.message)
    },

    geoloc() {
      var onSuccess = function (position) {

        console.log("POSITION: ", position);
      };

      function onError(error) {
        console.log(
          "code: " + error.code + "\n" + "message: " + error.message + "\n"
        );
      }
      var options = { enableHighAccuracy: true };

      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
      console.log("called :", this.location);
    },

    handleClick(event) {
      if (event.latLng?.lat) {
        console.log(
          "event.latLng.lat(), event.latLng.lng()",
          event.latLng.lat(),
          event.latLng.lng()
        );
        this.$refs.mapPolygon.$polygonPromise.then((res) => {
          console.log(res);
          let isWithinPolygon = res.containsLatLng(
            event.latLng.lat(),
            event.latLng.lng()
          );
          console.log({ isWithinPolygon });
        });
      }
    },
    zoomIn() {
      this.zoom += 0.5;
    },
    zoomOut() {
      this.zoom -= 0.5;
    }
  },
  created() {
  },
  mounted() {

    this.trackPosition()
    this.$refs.myMapRef.$mapPromise.then(() => {
      setupContainsLatLng();
    });
  },
});
</script>

<style scoped>
.menu {
  position: absolute;
  z-index: 1;
}
.vuemap {
  height: 100vh;
}
</style>