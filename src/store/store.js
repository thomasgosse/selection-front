import Vuex from 'vuex';
import Vue from 'vue';
import authentication from './modules/authentication';
import contents from './modules/contents';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    contents,
    user,
  },
});
