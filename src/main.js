/* eslint-disable*/
import Vue from 'vue';
import App from './App';
import router from './router';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import store from './store/store';
import interceptors from './services/interceptors';

UIkit.use(Icons);

Vue.config.productionTip = false;

interceptors.setup(router, store);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});