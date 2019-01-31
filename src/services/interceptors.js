import axios from 'axios';
import UIkit from 'uikit';

function getToken() {
  const token = localStorage.getItem('token');
  return 'Bearer '.concat(token);
}

export default {
  setup: (router, store) => {
    axios.interceptors.response.use(
      response => response,
      (error) => {
        if (error.response.status === 401) {
          UIkit.offcanvas('#offcanvas-push').hide();
          store.commit('logout');
        }
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
