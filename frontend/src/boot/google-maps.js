import { boot } from 'quasar/wrappers';
import VueGoogleMaps from '@fawmi/vue-google-maps';

export default boot(({ app }) => {
  app.use(VueGoogleMaps, { // 🤿 Vue App. Please install Vue Google Maps
    load: {
    //   key: '', // 🤿 I don't have a google key, so leave it blank for now
      key: 'AIzaSyB2GNlUizs2Wp5L4y8N8JWYzgz3wCcFyKk',
    },
  });
});