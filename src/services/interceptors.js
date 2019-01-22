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
        if (error.response.data.error.message === 'The access token expired') {
          console.log('expired token');
        }
        UIkit.offcanvas('#offcanvas-push').hide();
        store.commit('logout');
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
