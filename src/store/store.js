/* eslint-disable */

import Vuex from 'vuex';
import Vue from 'vue';
import spotifyService from '@/services/spotify';
import selectionService from '@/services/selection'
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
    userArtworks: [],
  },
  mutations: {
    LOGIN(state) {
      state.loggedIn = true;
    },
    LOGOUT(state) {
      state.loggedIn = false;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    REMOVE_TOKEN(state) {
      state.token = 'token';
    },
    UPDATE_USER(state, user) {
      state.user = user;
    },
    UPDATE_CURRENT_ARTIST(state, artist) {
      state.artist = artist;
    },
    UPDATE_CURRENT_ARTWORK(state, artworks) {
      state.artworks = artworks;
    },
    UPDATE_USER_ARTWORKS(state, artworks) {
      state.userArtworks = artworks;
    },
  },
  actions: {
    getArtist({ commit }, id) {
      return spotifyService.getArtist(id)
        .then((result) => {
          commit('UPDATE_CURRENT_ARTIST', result.artist);
          commit('UPDATE_CURRENT_ARTWORK', result.albums);
          return result;
        });
    },
    getUserArtworksByType({ commit }, {userId, type}) {
      return selectionService.getUserArtworksByType(userId, type)
        .then((result) => {
          commit('UPDATE_USER_ARTWORKS', result);
          return result;
        });
    },
  },
  getters: {
    userImage(state) {
      const image = state.user.mainImage.url;
      return image || '';
    },
     currentArtistAlbums(state) {
      const artworks = state.artworks.items;
      if(artworks) {
        const albums = artworks.filter(album => album.album_type === 'album');
        return _.uniqBy(albums, 'name');
      }
      return [];
    },
    currentArtistSingles(state) {
      const artworks = state.artworks.items;
      if(artworks) {
        const singles = artworks.filter(album => album.album_type === 'single');
        return _.uniqBy(singles, 'name');
      }
      return [];
    },
  },
});
