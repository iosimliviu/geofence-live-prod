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
            <div class="text-h6"><span v-html="item.message"></span></div>
            <div class="text">email: {{ item.email }}</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn icon="eva-trash-outline" color="red-8" flat></q-btn>
            <q-btn label="load" flat></q-btn>
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
          disable
          >USERS
        </q-btn>
        <q-btn
          style="margin-right: 10px"
          text-color="black"
          color="grey-2"
          @click="addUser = true"
          rounded
          >add user</q-btn
        >
      </q-page-sticky>

      <q-dialog v-model="addUser">
        <q-card>
          <q-card-section>
            <div class="text-h6">User</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              class="q-mr-sm"
              filled
              v-model="userToAdd"
              label="Email"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="add" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addUser: false,
      userToAdd: "",
      items: [
        { message: "Liviu Iosim", email: "liviu.iosim24@gmail.com" },
        { message: "Danny Hodgetts", email: "danny@gmail.com" },
        { message: "Mathew Gonzalest", email: "gonzalest@gmail.com" },
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
  height: 100vh;
}
</style>
