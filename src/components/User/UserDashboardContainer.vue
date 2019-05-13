<template>
  <UserDashboard
    :albums="userAlbums"
    :tvshows="userTVShows"
    :handle-click-item="handleClickItem"
    :current-user="user"
    :get-next-artwork-page="getNextArtworkPage"
    :is-loading="isLoading"
  />
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import selectionService from '@/services/selection';
import { sendNotification } from '@/helpers/uikit';
import UserDashboard from './UserDashboard';

export default {
  name: 'UserDashboardContainer',
  components: {
    UserDashboard,
  },
  data() {
    return {
      userAlbums: [],
      userTVShows: [],
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userId']),
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserArtworksCounts(this.userId);
    this.getAllFirstsUserArtworks(this.userId)
      .then((result) => {
        this.userAlbums = result.albums;
        this.userTVShows = result.tvshows;
      })
      .catch(() => sendNotification('Erreur lors de la connexion au serveur', 'ban', 'warning'))
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    ...mapActions(['getAllFirstsUserArtworks', 'getUserArtworksByType', 'getUserArtworksCounts']),
    handleClickItem({ id, type }) {
      selectionService.deleteUserArtwork(this.userId, id, type)
        .then(() => {
          this.userAlbums = this.userAlbums.filter(artwork => artwork.id !== id);
          this.userTVShows = this.userTVShows.filter(artwork => artwork.id !== id);
          sendNotification('L\'œuvre a bien été retirée de votre selection', 'trash', 'success');
        })
        .catch(() => sendNotification('L\'œuvre n\'a pas pu être supprimée', 'ban', 'danger'));
    },
    getNextArtworkPage(collectionName, type) {
      this.isLoading = true;
      const lastItemDate = this[collectionName][this[collectionName].length - 1].timestamp;
      this.getUserArtworksByType({ userId: this.userId, type, startAfter: lastItemDate })
        .then((nextPage) => {
          this[collectionName] = this[collectionName].concat(nextPage);
        })
        .catch(() => sendNotification('Erreur lors de la connexion au serveur', 'ban', 'warning'))
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
