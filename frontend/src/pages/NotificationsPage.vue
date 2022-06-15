<template>
  <div class="bacground">
    <div class="glass">
      <div v-if="showAll === true" class="q-pa-md row items-start q-gutter-md">
        <q-card
          v-for="(item, index) in itemsPolygon"
          :key="index"
          class="my-card bg-grey-2"
        >
          <q-card-section class="text-black">
            <div class="text"><span v-html="item.message"></span></div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn icon="eva-trash-outline" color="red-8" flat></q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div v-else class="q-pa-md row items-start q-gutter-md">
        <q-card
          v-for="(item, index) in polygons"
          :key="index"
          class="my-card bg-grey-2"
        >
          <q-card-section class="text-black">
            <div class="text">
              <span>{{ item.name + " " }} </span>
              <q-badge
                v-bind:style="{ backgroundColor: item.options.strokeColor }"
              >
                {{ item.options.strokeColor }}
              </q-badge>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn icon="eva-bell-outline" flat></q-btn>
            <q-btn icon="eva-trash-outline" color="red-8" flat></q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <q-page-sticky class="menu" position="top-left" :offset="[18, 18]">
        <q-btn
          style="margin-right: 10px"
          text-color="black"
          color="grey-2"
          @click="showAll = false"
          rounded
          >POLYGONS</q-btn
        >
        <q-btn
          calss="q-pa-md"
          text-color="black"
          color="grey-2"
          @click="showAll = true"
          rounded
          >ALL</q-btn
        >
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "Parent",
      showAll: true,
      items: [
        {
          message:
            "<b>Mathew Gonzales</b> entered <b><i>Staging</i></b> area at <b>20:31</b>",
        },
        {
          message:
            "<b>Danny Hodgetts </b> entered <b><i> Main Stage</i></b> area at <b>19:31</b>",
        },
        {
          message:
            "<b>Chris Abott Ben</b> entered <b><i>Prep Stage</i></b> area at <b> 19:32</b>",
        },
        {
          message:
            "<b>Mathew Gonzales</b> entered <b><i>Staging</i></b> area at <b>20:31</b>",
        },
        {
          message:
            "<b>Danny Hodgetts </b> walked out of <b><i> Main Stage</i></b> area at <b>21:31</b>",
        },
        {
          message:
            "<b>Chris Abott Ben</b> entered <b><i>Prep Stage</i></b> area at <b> 19:32</b>",
        },
      ],

      polygons: [
        {
          name: "Main Stage",
          options: {
            strokeColor: "#117a01",
            fillColor: "#117a01",
            fillOpacity: 0.35,
            clickable: false,
          },
          paths: [
            {
              lat: 45.04181772999911,
              lng: 7.650489950357402,
            },
            {
              lat: 45.04174697510173,
              lng: 7.649631643472636,
            },

            {
              lat: 45.04125842605727,
              lng: 7.649622106929561,
            },
            {
              lat: 45.04128106114769,
              lng: 7.650488827026254,
            },
          ],
        },
        {
          name: "Red",
          options: {
            strokeColor: "#b30000",
            fillColor: "#b30000",
            fillOpacity: 0.35,
            clickable: false,
          },
          paths: [
            {
              lat: 45.042469010588846,
              lng: 7.650576973216081,
            },

            {
              lat: 45.042620626535964,
              lng: 7.649976158396745,
            },

            {
              lat: 45.04253302636279,
              lng: 7.649585151454081,
            },

            {
              lat: 45.0423173942399,
              lng: 7.649408722214863,
            },
            {
              lat: 45.04229717877345,
              lng: 7.650076294145398,
            },
          ],
        },
        {
          name: "Yellow",
          options: {
            strokeColor: "#ffee00",
            fillColor: "#ffee00",
            fillOpacity: 0.35,
            clickable: false,
          },
          paths: [
            {
              lat: 45.04209502290652,
              lng: 7.653368261834723,
            },

            {
              lat: 45.040639479855656,
              lng: 7.652352598469472,
            },
            {
              lat: 45.041023584782174,
              lng: 7.651165273727267,
            },
            {
              lat: 45.04248922611023,
              lng: 7.652219083919656,
            },
          ],
        },
        {
          name: "Blue",
          options: {
            strokeColor: "#0000FF",
            fillColor: "#0000FF",
            fillOpacity: 0.15,
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
          name: "Black",
          options: {
            strokeColor: "#000",
            fillColor: "#000",
            fillOpacity: 0.35,
            clickable: false,
          },
          paths: [
            { lat: 45.043549336965455, lng: 7.649626494451973 },
            { lat: 45.04318328670099, lng: 7.650619888560319 },
            { lat: 45.04289363798417, lng: 7.649169685263311 },
          ],
        },
      ],
      itemsPolygon: [
        {
          message:
            "<b>Danny Hodgetts </b> entered <b><i> Main Stage</i></b> area at <b>19:31</b>",
        },
        {
          message:
            "<b>Danny Hodgetts </b> walked out of <b><i> Main Stage</i></b> area at <b>21:31</b>",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$router.currrentRoute);
  },
};
</script>

<style  scoped>
.polygonbutton {
  margin-left: 10px;
}

.my-card {
  width: 100%;
}

.bacground {
  background-image: url("../assets/Back.png");
  background-size: 99%;
  background-repeat: repeat-y;
}

/* .glass {
  
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.125);
  
} */

.glass {
  padding-top: 20%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  /* background-color: rgba(17, 25, 40, 0.75); */
  border: 1px solid rgba(255, 255, 255, 0.125);
  height: 100vh;
}
</style>
