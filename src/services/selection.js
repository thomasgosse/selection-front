import axios from 'axios';
import { sendNotification } from '@/helpers/uikit';

export default class selectionService {
  static async saveUserArtwork(artwork, userId, artworkId, type) {
    return axios
      .post(`http://localhost:3000/users/${userId}/${type}/${artworkId}`, {
        timestamp: Date.now(),
        addedYear: new Date().getFullYear().toString(),
        ...artwork,
      })
      .then(response => response.data)
      .then((result) => {
        if (result.message === 'artwork.already.exists') sendNotification('L\'œuvre à déja été ajoutée', 'ban', 'warning');
        else sendNotification('L\'œuvre à été ajoutée avec succès', 'check', 'success');
      })
      .catch(() => sendNotification('L\'œuvre n\'a pas pu être sauvegardée', 'ban', 'danger'));
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

  static async getTVShowDetail(id) {
    return axios.get(`http://localhost:3000/contents/tvshow/${id}`)
      .then(response => response.data);
  }

  static async getAlbumDetail(id) {
    return axios.get(`http://localhost:3000/contents/album/${id}`)
      .then(response => response.data);
  }
}
