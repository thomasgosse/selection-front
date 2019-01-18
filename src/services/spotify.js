import axios from 'axios';

function getToken() {
  const token = localStorage.getItem('token');
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
