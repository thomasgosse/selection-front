/* eslint-disable */

import Vuex from 'vuex';
import Vue from 'vue';
import { getArtist } from '@/services/spotify';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: true,
    token: localStorage.getItem('token'),
    user: {
      mainImage: '',
      name: '',
    },
    artist: {},
    albums: {},
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
    artist(state, artist) {
      state.artist = artist;
    },
    albums(state, albums) {
      state.albums = albums;
    },
  },
  actions: {
    getArtist({ commit }, id) {
      return getArtist(id)
        .then((result) => {
          commit('artist', result.artist);
          commit('albums', result.albums);
          return result;
        });
    },
  },
  getters: {
    profileImage(state) {
      const image = state.user.mainImage.url;
      return image || '';
    },
  },
});
