<template>
  <q-page>
    <!-- <div class="q-mt-md">
      <q-fab
        v-model="fab2"
        vertical-actions-align="left"
        color="purple"
        icon="keyboard_arrow_down"
        direction="down"
      >
        <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
      Corso Sebastopoli, 123, 10134 Torino TO, Italy
    </div> -->

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
        <q-btn fab icon="add" color="accent" />
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
// const myMapRef = ref();
// const mapPolygon = ref();

export default defineComponent({
  name: "IndexPage",
  //45.04186784168281, 7.650031561340386

  //45.043549336965455, 7.649626494451973
  // 45.04265135308057, 7.652168289176769
  // 45.0401684079395, 7.650603718320271
  // 45.041109363807095, 7.6478745801595815
  data() {
    return {
      center: { lat: 45.041, lng: 7.65 },
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
          // here comes the styles your
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
    };
  },

  methods: {
    handleClick(event) {
      // const mapPolygon = ref();
      if (event.latLng?.lat) {
        console.log(
          "event.latLng.lat(), event.latLng.lng()",
          event.latLng.lat(),
          event.latLng.lng()
        );
        this.$refs.mapPolygon.$polygonPromise.then((res) => {

          console.log(res)
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
    },
  },
  mounted() {
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