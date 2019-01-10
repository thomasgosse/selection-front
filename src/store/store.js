import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: true,
    token: '',
  },
  mutations: {
    login(state, log) {
      state.loggedIn = log;
    },
    token(state, token) {
      state.token = token;
    },
  },
});
