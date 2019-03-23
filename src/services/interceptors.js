import axios from 'axios';
import { hideOffCanvas } from '@/helpers/uikit';

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
          hideOffCanvas();
          store.commit('LOGOUT');
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
