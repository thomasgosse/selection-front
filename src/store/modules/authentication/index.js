/* eslint-disable */

import firebaseService from '@/services/firebase';
import { hideOffCanvas } from '@/helpers/uikit';
import userUtils from '@/mixins/userUtils';

const mutations = {
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
};

const actions = {
  signOut({ commit }) {
    return firebaseService.signOut()
      .then(() => {
        localStorage.removeItem('token');
        commit('LOGOUT');
        commit('REMOVE_TOKEN');
        hideOffCanvas();
      });
  },
  signIn({ commit }, { username, password }) {
    return firebaseService.signIn(username, password)
      .then((result) => {
        const { user } = result;
        const builtUser = userUtils.methods.buildUser(user);
        localStorage.setItem('token', user.ra);
        commit('SET_USER', builtUser);
        commit('SET_TOKEN', user.ra);
        commit('LOGIN');
      });
  },
  signUp({ commit }, { username, password }) {
    return firebaseService.signUp(username, password);
  },
};

export default {
  state: {
    loggedIn: false,
    token: localStorage.getItem('token'),
  },
  mutations,
  actions,
};
