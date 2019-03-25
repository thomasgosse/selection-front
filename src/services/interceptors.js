import axios from 'axios';
import { hideOffCanvas } from '@/helpers/uikit';
import firebaseService from '@/services/firebase';


function getToken() {
  const token = localStorage.getItem('token');
  return 'Bearer '.concat(token);
}

export default {
  setup: (router, store) => {
    axios.interceptors.response.use(
      response => response,
      (error) => {
        const { response } = error;
        if (response && response.status === 401) {
          firebaseService.signOut().then(() => {
            localStorage.removeItem('token');
            store.commit('LOGOUT');
            store.commit('REMOVE_TOKEN');
            hideOffCanvas();
          });
        }
        throw error;
      },
    );
    axios.interceptors.request.use(
      (config) => {
        const token = getToken();
        const configWithToken = config;
        configWithToken.headers.Authorization = token;
        return configWithToken;
      },
    );
  },
};
