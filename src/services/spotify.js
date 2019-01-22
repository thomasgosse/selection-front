import axios from 'axios';

export async function getSearchResult(search) {
  return axios
    .get(`https://api.spotify.com/v1/search?q=${search}&type=artist`)
    .then(response => response.data);
}

export async function getArtist(id) {
  return axios.all([
    axios.get(`https://api.spotify.com/v1/artists/${id}`),
    axios.get(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single`),
  ]).then(axios.spread((resultArtist, resultAlbums) => ({
    artist: resultArtist.data,
    albums: resultAlbums.data,
  })));
}

export async function getProfile() {
  return axios
    .get('https://api.spotify.com/v1/me')
    .then(response => response.data);
}
