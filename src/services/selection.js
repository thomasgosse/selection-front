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
    return axios.get(`http://localhost:3000/contents/search?query=${search}`)
      .then(response => response.data);
  }

  static async getArtistAlbums(id) {
    return axios.get(`http://localhost:3000/contents/artists/${id}/albums`)
      .then(response => response.data);
  }
}
