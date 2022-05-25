<template>
  <q-page>
    <div >
      <GMapMap
         class="vuemap"
        :center="center"
        :zoom="10"
        map-type-id="terrain"
      >
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
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      // geofence: Geofence,
      counter: 0,
      info: 'a',
      center : { 
        lat: 51.093048, 
        lng: 6.84212 
      },
      markers : [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }
      ],
      address: '',
      state: '',
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