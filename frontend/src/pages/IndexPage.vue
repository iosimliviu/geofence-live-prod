<template>
  <q-page class="no-padding">
    <GMapMap
      class="vuemap"
      :center="center"
      :zoom="zoom"
      :click="true"
      ref="myMapRef"
      @click="handleClick"
      :map-type-id="getMapType"
      :options="options"
    >
      <GMapPolygon
        :key="index"
        v-for="(p, index) in polygons"
        :clickable="true"
        ref="mapPolygon"
        :options="p.options"
        :paths="p.paths"
      />
      <!-- <GMapPolygon :paths="paths2" /> -->
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          :icon="{
            url: 'https://svgshare.com/i/hsy.svg',
            color: 'blue',
            scaledSize: { width: 40, height: 40 },
          }"
          @click="center = m.position"
        />
      </GMapCluster>

      <q-page-sticky class="menu" position="top-right" :offset="[18, 18]">
        <q-fab
          icon="eva-menu-2"
          direction="down"
          color="grey-2"
          text-color="black"
          v-show="!addWindow"
        >
          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-bell-outline"
          />
          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-layers-outline"
          />
          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-people-outline"
          />
          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-person-outline"
          />

          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-plus-outline"
            @click="addWindow = true"
          />
        </q-fab>
        <!-- <q-btn fab icon="add" color="accent" @click="geoloc()" /> -->
      </q-page-sticky>

      <q-page-sticky position="bottom-left">
        <q-card class="glass transparent controls">
          <q-card-section class="row">
            <q-btn
              text-color="black"
              color="grey-2 col q-mr-sm q-ml-sm"
              icon="eva-minus"
              @click="zoomOut"
            />
            <q-btn
              text-color="black"
              color="grey-2 col q-mr-sm q-ml-sm"
              icon="eva-plus"
              @click="zoomIn"
            />
            <q-btn
              text-color="black"
              color="grey-2 col q-mr-sm q-ml-sm"
              icon="eva-map-outline"
              @click="mapType = 'roadmap'"
            />
            <q-btn
              text-color="black"
              color="grey-2 col q-mr-sm q-ml-sm"
              icon="satellite_alt"
              @click="mapType = 'satellite'"
            />
          </q-card-section>
        </q-card>
      </q-page-sticky>
    </GMapMap>

    <q-page-sticky position="top">
      <q-card v-if="addWindow" class="addArea">
        <q-form @submit="onSubmit" @reset="onReset" class="row">
          <div class="row">
            <q-input
              dense
              class="col"
              filled
              v-model="defaultPolygon.name"
              label="Insert Area name *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              dense
              filled
              label="Stroke color"
              v-model="defaultPolygon.options.strokeColor"
              class="colorPickerInput col"
            >
              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-color v-model="defaultPolygon.options.strokeColor" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="row">
            <q-input
              dense
              class="col"
              filled
              type="number"
              v-model="age"
              label="Fill Opacity - [0,1]"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please type fill opacity',
                (val) => (val => 0 && val <= 1) || 'Opacity betweeen 0 and 1',
              ]"
            />

            <q-input
              dense
              filled
              label="Fill color"
              v-model="defaultPolygon.options.fillColor"
              class="colorPickerInput col"
            >
              <template v-slot:append>
                <q-icon name="colorize" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-color v-model="defaultPolygon.options.fillColor" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="row" 
            v-for="(path, i) in defaultPolygon.paths"
            :key="i + 'p'"
          >
            <q-input
              dense
              class="col"
              filled
              type="number"
              v-model="path.lat"
              label="Latitude"
            />
            
            <q-input
              dense
              class="col"
              filled
              type="number"
              v-model="path.lng"
              label="Longitude"
            />

            <q-btn
              @click="setPath(i,latAddition,lngAddition)"
              class="q-mr-lg roundCorners col"
              label="SET"
              color="secondary"
            />

          </div>
        </q-form>

        <q-card-actions align="right">
          <q-btn
              @click="addPath()"
              class="q-mr-lg roundCorners col"
              label="addPatH"
              color="secondary"
            />
          
          <q-btn
            flat
            label="Cancel"
            color="primary"
            @click="addWindow = false"
            v-close-popup
          />
          <q-btn flat label="Add Area" color="primary" v-close-popup @click="addPolygon()"/>
        </q-card-actions>
      </q-card>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { setupContainsLatLng } from "../util/is-point-within-polygon.js";

//https://svgshare.com/i/hsy.svg - red "#FF3A20"
//https://svgshare.com/i/hsW.svg - dark purple
//https://svgshare.com/i/htH.svg - yellow
// https://svgshare.com/i/ht0.svg - green
// https://svgshare.com/i/hru.svg - blue

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      latAddition: 0,
      lngAddition: 0,
      addWindow: false,
      mapType: "roadmap",
      center: { lat: 45.041, lng: 7.65 },
      location: "",
      zoom: 17,
      defaultPolygon: {
        name: "",
        options: {
          strokeColor: "#000",
          fillColor: "#000",
          fillOpacity: 0.35,
          clickable: false,
        },
        paths: [
           { lat: 0, lng: 0 },
        ],
      },
      polygons: [
        {
          name: "Guests",
          options: {
            strokeColor: "#0000FF",
            fillColor: "#0000FF",
            fillOpacity: 0.35,
            clickable: false,
          },

          paths: [
            { lat: 45.043549336965455, lng: 7.649626494451973 },
            { lat: 45.04265135308057, lng: 7.652168289176769 },
            { lat: 45.0401684079395, lng: 7.650603718320271 },
            { lat: 45.041109363807095, lng: 7.6478745801595815 },
          ],
        },
        {
          name: "Main Stage",
          options: {
            strokeColor: "#000",
            fillColor: "#000",
            fillOpacity: 0.35,
            clickable: false,
          },
          paths: [
            { lat: 45.043549336965455, lng: 7.649626494451973 },
            { lat: 45.04265135308057, lng: 7.652168289176769 },
            { lat: 45.041109363807095, lng: 7.6478745801595815 },
          ],
        },
      ],
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: { lat: 45.043549336965455, lng: 7.649626494451973 },
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
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
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

      
    };
  },

  computed: {
    getMapType() {
      return this.mapType;
    },
  },

  methods: {

    addPolygon() {
      this.polygons.push(this.defaultPolygon);
    },
    setPath(index, lat, lng) {
      this.defaultPolygon.paths[index].lat = lat;
      this.defaultPolygon.paths[index].lng = lng;
      console.log("this.defaultPolygo",this.defaultPolygon);
    },


    addPath() {
      this.defaultPolygon.paths.push({ lat:0, lng:0 });
      console.log("this.defaultPolygo",this.defaultPolygon);
    },
    setMapTypeSat() {
      this.mapType = "satellite";
    },
    setMapTypeMap() {
      this.mapType = "map";
    },
    trackPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          this.successPosition,
          this.failurePosition,
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
          }
        );
      } else {
        alert(`Browser doesn't support Geolocation`);
      }
    },

    successPosition: function (position) {
      this.markers[0].position.lat = position.coords.latitude;
      this.markers[0].position.lng = position.coords.longitude;

      for (var i = 0; i < this.polygons.length; i++) {
        if (this.$refs.mapPolygon[i] !== null) {
          this.$refs.mapPolygon[i].$polygonPromise.then((res) => {
            let isWithinPolygon = res.containsLatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            console.log({ isWithinPolygon });
          });
        }
      }
    },

    failurePosition: function (err) {
      // alert("Error Code: " + err.code + " Error Message: " + err.message);
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
        
        this.latAddition = event.latLng.lat()
        this.lngAddition = event.latLng.lng()
        this.markers.push({
          position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
        },)

        for (let i = 0; i < this.polygons.length; i++) {
          this.$refs.mapPolygon[i].$polygonPromise.then((res) => {
            let isWithinPolygon = res.containsLatLng(
              event.latLng.lat(),
              event.latLng.lng()
            );
            console.log("i", i);
            console.log(this.polygons[i]);
            console.log(
              `Is within polygon ${this.polygons[i].name} : ${isWithinPolygon}`
            );
          });
        }
      }
    },
    zoomIn() {
      this.zoom += 0.5;
    },
    zoomOut() {
      this.zoom -= 0.5;
    },
  },
  created() {},
  mounted() {
    this.trackPosition();
    this.$refs.myMapRef.$mapPromise.then(() => {
      setupContainsLatLng();
    });
  },
});
</script>

<style scoped>
.addArea {
  position: relative;
  z-index: 2;
  width: 100vw;
  max-height: 50vh;
}
.colorPickerInput {
  max-width: 250px;
}

.controls {
  width: 100vw;
}

.menu {
  position: absolute;
  z-index: 1;
}
.vuemap {
  height: 100vh;
}

.glass {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  background-color: rgba(17, 25, 40, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>