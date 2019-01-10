import axios from 'axios';
import UIkit from 'uikit';

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
  },
};
