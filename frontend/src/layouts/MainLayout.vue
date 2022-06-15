<template>
  <q-layout view="lHh Lpr lFf">

        

    <q-page-container>
      <router-view />
      
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
            icon="eva-plus-outline"
            @click="addWindow = true"
          />

          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-bell-outline"
            @click="this.$router.push('/notifications')"
          />
          <!-- <q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="Trigger 'warning'" /> -->
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
            icon="eva-info-outline"
            @click="addWindow = true"
          />

          <q-fab-action
            color="grey-2"
            text-color="black"
            icon="eva-home-outline"
            @click="this.$router.push('/')"
          />

          <!-- this.$router.push("/"); -->
        </q-fab>
        <!-- <q-btn fab icon="add" color="accent" @click="geoloc()" /> -->
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {

    return {
    }
  }
})
</script>
