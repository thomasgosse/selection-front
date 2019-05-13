/* eslint-disable */
import selectionService from '@/services/selection'

const defaultImage = require('@/assets/ghost-solid.svg');

const mutations = {
  SET_USER(state, { mainImage, id, name }) {
    state.mainImage = mainImage;
    state.id = id;
    state.name = name;
  },
  UPDATE_USER_ARTWORK_COUNTS(state, { type, count }) {
    state.artworksCounts[type] = count;
  },
};

const getters = {
  userImage(state) {
    const image = state.mainImage;
    return defaultImage;
  },
  userId(state) {
    return state.id;
  },
};

const actions = {
  getUserArtworksByType({ commit }, { userId, type, startAfter }) {
    return selectionService.getUserArtworksByType(userId, type, startAfter)
      .then((result) => result);
  },
  getAllFirstsUserArtworks({ commit }, userId) {
    const albums = selectionService.getUserArtworksByType(userId, 'album')
    const tvshows = selectionService.getUserArtworksByType(userId, 'tvshow')
    return Promise.all([albums, tvshows])
      .then((result) => {
        return {
          albums: result[0],
          tvshows: result[1]
        }
      });
  },
  getUserArtworksCounts({ commit }, userId) {
    const tvShowCount = selectionService.getUserArtworksCounts(userId, 'tvshow')
    const albumCount = selectionService.getUserArtworksCounts(userId, 'album')
    Promise.all([albumCount, tvShowCount])
      .then((result) => {
        commit('UPDATE_USER_ARTWORK_COUNTS', { type: 'album', count: result[0].artworkCount })
        commit('UPDATE_USER_ARTWORK_COUNTS', { type: 'tvshow', count: result[1].artworkCount })
      });
  },
}

export default {
  state: {
    mainImage: '',
    name: '',
    id: '',
    artworksCounts: {},
  },
  mutations,
  actions,
  getters,
};
