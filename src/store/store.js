import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: true,
    token: '',
    user: {
      mainImage: '',
      name: '',
    },
  },
  mutations: {
    login(state, log) {
      state.loggedIn = log;
    },
    token(state, token) {
      state.token = token;
    },
    user(state, user) {
      state.user = user;
    },
  },
  getters: {
    profileImage(state) {
      const image = state.user.mainImage.url;
      return image || '';
    },
  },
});
