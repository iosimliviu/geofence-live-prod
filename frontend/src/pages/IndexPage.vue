<template>
  <q-page>
      <GMapMap
         class="vuemap"
        :center="center"
        :zoom="10"
        map-type-id="terrain"
      >

      <GMapPolygon
        :paths="paths"
    />
        <GMapCluster 
        :zoomOnClick="true"
       >
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GMapCluster>
      </GMapMap>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      center: {lat: 25.774, lng: -80.19},
      paths: [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
      ],
      markers : [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }
      ],
    }
  },
})
</script>

<style scoped>
  .vuemap {
    height: 1000px;
    width: 100%;
  }
 </style>