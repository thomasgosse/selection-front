import axios from 'axios';

export default class selectionService {
  static async saveUserArtwork(artwork, userId, artworkId, type) {
    return axios
      .post(`http://localhost:3000/users/${userId}/${type}/${artworkId}`, artwork)
      .then(response => response.data);
  }

  static async deleteUserArtwork(userId, artworkId, type) {
    return axios
      .delete(`http://localhost:3000/users/${userId}/${type}/${artworkId}`)
      .then(response => response.data);
  }

  static async getUserArtworksByType(userId, type) {
    return axios
      .get(`http://localhost:3000/users/${userId}/${type}`)
      .then(response => response.data);
  }

  static async getSearchResult(search) {
    return axios.get(`http://localhost:3000/artworks/search?q=${search}&type=artist,album`)
      .then(response => response.data);
  }

  static async getArtist(id) {
    return axios.all([
      axios.get(`http://localhost:3000/artists/${id}`),
      axios.get(`http://localhost:3000/artists/${id}/albums?include_groups=album,single`),
    ]).then(axios.spread((resultArtist, resultAlbums) => ({
      artist: resultArtist.data,
      albums: resultAlbums.data,
    })));
  }
}
