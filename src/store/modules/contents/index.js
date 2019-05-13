/* eslint-disable */

import selectionService from '@/services/selection';
import _ from 'lodash';

const mutations = {
  UPDATE_CURRENT_MUSIC_ARTWORK(state, artworks) {
    state.currentMusicArtworks = artworks;
  },
  UPDATE_CURRENT_TVSHOW_DETAIL(state, detail) {
    state.currentTVShowDetail = detail;
  },
  UPDATE_CURRENT_ALBUM_DETAIL(state, detail) {
    state.currentAlbumDetail = detail;
  },
};
const actions = {
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
  getAlbumDetail({ commit }, id) {
    return selectionService.getAlbumDetail(id)
      .then((result) => {
        commit('UPDATE_CURRENT_ALBUM_DETAIL', result);
        return result;
      });
  },
};
const getters = {
  currentArtistAlbums(state) {
    const artworks = state.currentMusicArtworks;
    if (artworks) {
      const albums = artworks.filter(album => album.album_type === 'album');
      return _.uniqBy(albums, 'name');
    }
    return [];
  },
  currentArtistSingles(state) {
    const artworks = state.currentMusicArtworks;
    if (artworks) {
      const singles = artworks.filter(album => album.album_type === 'single');
      return _.uniqBy(singles, 'name');
    }
    return [];
  },
};

export default {
  state: {
    currentMusicArtworks: [],
    currentTVShowDetail: {},
    currentAlbumDetail: {},
  },
  mutations,
  actions,
  getters,
};
