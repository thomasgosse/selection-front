import axios from 'axios';
import UIkit from 'uikit';
import sendNotification from '@/helpers/notifications';

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
          if (UIkit.offcanvas('#offcanvas-push')) UIkit.offcanvas('#offcanvas-push').hide();
          store.commit('LOGOUT');
        } else sendNotification('Une erreur est survenue', 'ban', 'danger');
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
