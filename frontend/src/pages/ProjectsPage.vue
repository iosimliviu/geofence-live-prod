<template>
  <div class="bacground">
    <div class="glass">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          v-for="(item, index) in items"
          :key="index"
          class="my-card bg-grey-2"
        >
          <q-card-section class="text-black">
            <div class="text">2<span v-html="item.message"></span></div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn icon="eva-trash-outline" color="red-8" flat></q-btn>
          </q-card-actions>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [
        { message: "<b>Mathew Gonzales</b> entered <b><i>Staging</i></b> area at <b>20:31</b>" },
        { message: "<b>Danny Hodgetts </b> entered <b><i> Main Stage</i></b> area at <b>19:31</b>" },
        { message: "<b>Chris Abott Ben</b> entered <b><i>Prep Stage</i></b> area at <b> 19:32</b>" },
         { message: "<b>Mathew Gonzales</b> entered <b><i>Staging</i></b> area at <b>20:31</b>" },
        { message: "<b>Danny Hodgetts </b> walked out of <b><i> Main Stage</i></b> area at <b>21:31</b>" },
        { message: "<b>Chris Abott Ben</b> entered <b><i>Prep Stage</i></b> area at <b> 19:32</b>" },
      ],
    };
  },
};
</script>

<style  scoped>



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
}
</style>
