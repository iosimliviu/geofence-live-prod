<template>
  <div class="q-pa-md">
    <q-card dark bordered class="my-sticky-column-table bg-grey-9 my-card q-mb-lg">
      <q-card-section>
        <div class="text-h6">Poduction Tracker</div>
        <div class="text-subtitle2">by Liviu Iosim</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Scopul produsului este de a aduce valoare în echipele unde coordonarea
        geografică este un element cheie.
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        O aplicație centralizată, unde utilizatorii își pot creea zone special
        desemnate pentru diferite echipe sau utilizatori, urmărind în timp real
        locația fiecărui contribuitor
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Functionalitati
        <q-list dense bordered separator padding class="rounded-borders">
          <q-item clickable v-ripple>
            <q-item-section>
                - Desenarea zonelor desemnate Clasificarea în funcție de proiect și
              utilizator
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              - Notificări informative despre poziția
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
             -  Customizarea si controlarea hărții afișate
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-table
      title="Pricing"
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="my-sticky-column-table"
    />

    <q-page-sticky position="top-right" :offset="[21, 21]">
      <q-btn
        round
        color="grey-2"
        text-color="black"
        icon="eva-home-outline"
        @click="this.$router.push('/landing')"
      />
    </q-page-sticky>
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "SOLO", label: "SOLO", field: "SOLO", sortable: true },
  { name: "PRO", label: "PRO", field: "PRO", sortable: true },
  { name: "MAX", label: "MAX", field: "MAX" },
];

const rows = [
  {
    name: "Maximum Users",
    SOLO: 3,
    PRO: 15,
    MAX: 50,
  },
  {
    name: "Maximum Fences",
    SOLO: 10,
    PRO: 20,
    MAX: "unlimited",
  },
  {
    name: "Maximum Markers",
    SOLO: 25,
    PRO: 100,
    MAX: "unlimited",
  },
  {
    name: "Zone drawing",
    SOLO: "yes",
    PRO: "yes",
    MAX: "yes",
  },

  {
    name: "Zone customisation",
    SOLO: "",
    PRO: "yes",
    MAX: "yes",
  },
  {
    name: "Map Satellite",
    SOLO: "",
    PRO: "",
    MAX: "yes",
  },
  {
    name: "Price",
    SOLO: "20/project",
    PRO: "100/project",
    MAX: "get quota",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style lang="sass">
.my-sticky-column-table
    max-width: 600px

thead tr:first-child th:first-child
    background-color: #fff

td:first-child
    background-color: #919cff

th:first-child,
td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>