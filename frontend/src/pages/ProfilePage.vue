<template>
  <div class="bacground">
    <div class="glass">
      <!-- <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card bg-grey-2"
        >
          <q-card-section class="text-black">
            <div class="text-h6"><span v-html="user.message"></span></div>
            <div class="text">email: {{ user.email }}</div>
          </q-card-section>

        </q-card>
      </div> -->

      <q-card class="q-ma-md q-pa-lg" flat bordered align="center" >
        <q-card-section>
          <q-btn
            icon="eva-person-outline"
            text-color="black"
            size="3em"
            round
            color="grey-2"
            unelevated
          />
        </q-card-section>
        <q-card-section class="text-black" >
          <div class="text-h6"><span v-html="user.message"></span></div>
          <div class="text">{{ user.email }}</div>
          <q-btn
          class="q-mt-lg"
            icon="eva-edit-outline"
            text-color="black"
            round
            color="grey-2"
            unelevated
          />
        </q-card-section>
      </q-card>

      <q-page-sticky class="menu" position="top-left" :offset="[18, 18]">
        <q-btn
          style="margin-right: 10px"
          text-color="black"
          color="grey-2"
          @click="this.$router.push('/login')"
          rounded
          >log out</q-btn
        >
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addUser: false,
      userToAdd: "",
      user: { message: "Liviu Iosim", email: "liviu.iosim24@gmail.com" },
    };
  },
};
</script>

<style  scoped>
.my-card {
  width: 100%;
  height: 60vh;
}

.bacground {
  background-image: url("../assets/Back.png");
  background-size: 99%;
  background-repeat: repeat-y;
}


.glass {
  padding-top: 20%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  /* background-color: rgba(17, 25, 40, 0.75); */
  border: 1px solid rgba(255, 255, 255, 0.125);
  height: 100vh;
}
</style>
