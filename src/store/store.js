/* eslint-disable */

import Vuex from 'vuex';
import Vue from 'vue';
import { getArtist } from '@/services/spotify';
import _ from 'lodash';

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
    artworks: {},
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
    artworks(state, artworks) {
      state.artworks = artworks;
    },
  },
  actions: {
    getArtist({ commit }, id) {
      return getArtist(id)
        .then((result) => {
          commit('artist', result.artist);
          commit('artworks', result.albums);
          return result;
        });
    },
  },
  getters: {
    profileImage(state) {
      const image = state.user.mainImage.url;
      return image || '';
    },
    albums(state) {
      const artworks = state.artworks.items;
      if(artworks) {
        const alb = artworks.filter(album => album.album_type === 'album');
        return _.uniqBy(alb, 'name');
      }
      return [];
    },
    singles(state) {
      const artworks = state.artworks.items;
      if(artworks) {
        const singles = artworks.filter(album => album.album_type === 'single');
        return _.uniqBy(singles, 'name');
      }
      return [];
    },
  },
});
