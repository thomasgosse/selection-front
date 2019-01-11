import axios from 'axios';
import store from '../store/store';

function getToken() {
  const token = store.state.token;
  return 'Bearer '.concat(token);
}

export async function getSearchResult(search) {
  return axios
    .get(`https://api.spotify.com/v1/search?q=${search}&type=artist`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then(response => response.data);
}

export async function getProfile() {
  return axios
    .get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: getToken(),
      },
    })
    .then(response => response.data);
}
