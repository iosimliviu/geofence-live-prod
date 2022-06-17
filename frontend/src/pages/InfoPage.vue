<template>
  <div class="bacground">
    <div class="glass">
      <div class="q-pa-md">
        <q-card
          
          bordered
          class="my-sticky-column-table bg-grey-2 my-card q-mb-lg"
        >
          <q-card-section>
            <div class="text-h6">Gefe</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            Scopul produsului este de a aduce valoare în echipele unde
            coordonarea geografică este un element cheie.
          </q-card-section>
          <q-separator dark inset />

          <q-card-section>
            <q-video
              class="video"
              :ratio="16 / 9"
              src="https://www.youtube.com/embed/NpEaa2P7qZI?rel=0"
            />
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            Aplicația adresează inconsecvențele în organizarea producților live
            permițând întregului echipaj să aibe o imagine de ansamblu asupra
            evenimentului. Cu ajutorul elementelor de geolocalizare aceștia se
            pot grupa în zone delimitate pe harta respectivului proiect.
            Produsul este folositor pentru companiile unde timpul, distanța și
            precizia reprezintă o prioritate.
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            Functionalitati
            <q-list dense bordered separator padding class="rounded-borders">
              <q-item clickable v-ripple>
                <q-item-section>
                  - Desenarea zonelor desemnate Clasificarea în funcție de
                  proiect și utilizator
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  - Notificări informative despre poziția
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  - Customizarea si controlarea hărții afișate
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

        <q-page-sticky class="menu" position="top-left" :offset="[18, 18]">
        <q-btn
          style="margin-right: 10px"
          text-color="black"
          color="grey-2"
          rounded
          disabled
          >info Page</q-btn
        >
      </q-page-sticky>
      </div>
    </div>
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

.bacground 
  background-image: url("../assets/Back.png")
  background-size: 99%
  background-repeat: repeat-y



.glass 
  padding-top: 20%
  backdrop-filter: blur(16px) saturate(180%)
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important
  border: 1px solid rgba(255, 255, 255, 0.125)
  

</style>