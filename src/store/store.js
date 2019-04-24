/* eslint-disable */

import Vuex from 'vuex';
import Vue from 'vue';
import selectionService from '@/services/selection'
import firebaseService from '@/services/firebase';
import _ from 'lodash';
import { hideOffCanvas, sendNotification } from '@/helpers/uikit';
import userUtils from '@/mixins/userUtils';

const defaultImage = require('@/assets/ghost-solid.svg');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    token: localStorage.getItem('token'),
    user: {
      mainImage: '',
      name: '',
      id: '',
    },
    currentMusicArtworks: [],
    currentTVShowDetail: {},
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
      state.token = '';
    },
    SET_USER(state, user) {
      state.user = user;
    },
    UPDATE_CURRENT_MUSIC_ARTWORK(state, artworks) {
      state.currentMusicArtworks = artworks;
    },
    UPDATE_CURRENT_TVSHOW_DETAIL(state, detail) {
      state.currentTVShowDetail = detail;
    },
  },
  actions: {
    getArtistAlbums({ commit }, id) {
      return selectionService.getArtistAlbums(id)
        .then((result) => {
          commit('UPDATE_CURRENT_MUSIC_ARTWORK', result);
          return result;
        });
    },
    getTVShowDetail({ commit }, id) {
      return selectionService.getTVShowDetail(id)
      .then((result) => {
        commit('UPDATE_CURRENT_TVSHOW_DETAIL', result);
        return result;
      });
    },
    getUserArtworksByType({ commit }, {userId, type}) {
      return selectionService.getUserArtworksByType(userId, type)
        .then((result) => result)
    },
    signOut({ commit }) {
      return firebaseService.signOut()
        .then(() => {
          localStorage.removeItem('token');
          commit('LOGOUT');
          commit('REMOVE_TOKEN');
          hideOffCanvas();
        })
        .catch(() => sendNotification('La deconnexion a échouée', 'ban', 'danger'));
    },
    signIn({ commit }, { username, password }) {
      return firebaseService.signIn(username, password)
        .then((result) => {
          const user = result.user;
          const builtUser = userUtils.methods.buildUser(user);
          localStorage.setItem('token', user.ra);
          commit('SET_USER', builtUser);
          commit('SET_TOKEN', user.ra);
          commit('LOGIN');
        });
    },
    signUp({ commit }, { username, password }) {
      return firebaseService.signUp(username, password)
    }
  },
  getters: {
    userImage(state) {
      const image = state.user.mainImage;
      return defaultImage;
    },
    userId(state) {
      return state.user.id;
    },
    currentArtistAlbums(state) {
      const artworks = state.currentMusicArtworks;
      if(artworks) {
        const albums = artworks.filter(album => album.album_type === 'album');
        return _.uniqBy(albums, 'name');
      }
      return [];
    },
    currentArtistSingles(state) {
      const artworks = state.currentMusicArtworks;
      if(artworks) {
        const singles = artworks.filter(album => album.album_type === 'single');
        return _.uniqBy(singles, 'name');
      }
      return [];
    },
  },
});
