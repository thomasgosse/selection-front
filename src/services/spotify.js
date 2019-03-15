import axios from 'axios';

export default class spotifyService {
  static async getSearchResult(search) {
    return axios
      .get(`https://api.spotify.com/v1/search?q=${search}&type=artist,album`)
      .then(response => response.data);
  }

  static async getArtist(id) {
    return axios.all([
      axios.get(`https://api.spotify.com/v1/artists/${id}`),
      axios.get(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single`),
    ]).then(axios.spread((resultArtist, resultAlbums) => ({
      artist: resultArtist.data,
      albums: resultAlbums.data,
    })));
  }

  static async getProfile() {
    return axios
      .get('https://api.spotify.com/v1/me')
      .then(response => response.data);
  }
}
