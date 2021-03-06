import axios from 'axios';
import { sendNotification } from '@/helpers/uikit';

export default class selectionService {
  static async saveUserArtwork(artwork, userId, artworkId, type) {
    return axios
      .post(`${process.env.VUE_APP_SELECTION_URL}/users/${userId}/${type}/${artworkId}`, {
        timestamp: -Date.now(),
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
      .delete(`${process.env.VUE_APP_SELECTION_URL}/users/${userId}/${type}/${artworkId}`)
      .then(response => response.data);
  }

  static async getUserArtworksByType(userId, type, startAfter) {
    return axios
      .get(`${process.env.VUE_APP_SELECTION_URL}/users/${userId}/${type}?limit=20&startAfter=${startAfter}`)
      .then(response => response.data);
  }

  static async getSearchResult(search) {
    return axios.get(`${process.env.VUE_APP_SELECTION_URL}/contents/search?query=${search}`)
      .then(response => response.data);
  }

  static async getArtistAlbums(id) {
    return axios.get(`${process.env.VUE_APP_SELECTION_URL}/contents/artists/${id}/albums`)
      .then(response => response.data)
      .catch(() => sendNotification('Erreur lors de la connexion au serveur', 'ban', 'warning'));
  }

  static async getTVShowDetail(id) {
    return axios.get(`${process.env.VUE_APP_SELECTION_URL}/contents/tvshow/${id}`)
      .then(response => response.data)
      .catch(() => sendNotification('Erreur lors de la connexion au serveur', 'ban', 'warning'));
  }

  static async getAlbumDetail(id) {
    return axios.get(`${process.env.VUE_APP_SELECTION_URL}/contents/album/${id}`)
      .then(response => response.data)
      .catch(() => sendNotification('Erreur lors de la connexion au serveur', 'ban', 'warning'));
  }

  static async getUserArtworksCounts(id, type) {
    return axios.get(`${process.env.VUE_APP_SELECTION_URL}/users/${id}/${type}/count`)
      .then(response => response.data);
  }
}
