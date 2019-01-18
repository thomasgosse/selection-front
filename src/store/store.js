import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: true,
    token: localStorage.getItem('token'),
    user: {
      mainImage: '',
      name: '',
    },
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
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
