import axios from 'axios';

export default class selectionService {
  static async saveUserArtwork(artwork, userId, artworkId, type) {
    return axios
      .post(`http://localhost:3000/users/${userId}/${type}/${artworkId}`, artwork)
      .then(response => response.data);
  }

  static async getUserArtworksByType(userId, type) {
    return axios
      .get(`http://localhost:3000/users/${userId}/${type}`)
      .then(response => response.data);
  }
}
