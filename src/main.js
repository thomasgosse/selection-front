import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import interceptors from './services/interceptors';
import store from './store/store';
import router from './router';
import App from './App';

library.add(faSpotify);

Vue.component('font-awesome-icon', FontAwesomeIcon);

UIkit.use(Icons);

Vue.config.productionTip = false;

interceptors.setup(router, store);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
