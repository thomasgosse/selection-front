<template>
  <UserDashboard
    :albums="userAlbums"
    :tvshows="userTVShows"
    :handle-click="handleClick"
    :current-user="user"
    :get-next-tvshow-page="getNextTvshowPage"
    :get-next-album-page="getNextAlbumPage"
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
    this.getArtworksCount({ userId: this.userId, type: 'album' });
    this.getArtworksCount({ userId: this.userId, type: 'tvshow' });
    this.getUserArtworksByType({ userId: this.userId, type: 'album' })
      .then((albums) => {
        this.userAlbums = albums;
        this.getUserArtworksByType({ userId: this.userId, type: 'tvshow' })
          .then((tvshows) => {
            this.userTVShows = tvshows;
          });
      })
      .catch(() => sendNotification('Erreur de connection au serveur', 'ban', 'warning'));
  },
  methods: {
    ...mapActions(['getUserArtworksByType', 'getArtworksCount']),
    handleClick({ id, type }) {
      selectionService.deleteUserArtwork(this.userId, id, type)
        .then(() => {
          this.userAlbums = this.userAlbums.filter(artwork => artwork.id !== id);
          this.userTVShows = this.userTVShows.filter(artwork => artwork.id !== id);
          sendNotification('L\'œuvre a bien été retirée de votre selection', 'trash', 'success');
        })
        .catch(() => sendNotification('L\'œuvre n\'a pas pu être supprimée', 'ban', 'danger'));
    },
    async getNextAlbumPage() {
      this.isLoading = true;
      const lastItemDate = this.userAlbums[this.userAlbums.length - 1].timestamp;
      const nextPage = await this.getUserArtworksByType(
        { userId: this.userId, type: 'album', startAfter: lastItemDate },
      );
      this.userAlbums = this.userAlbums.concat(nextPage);
      this.isLoading = false;
    },
    async getNextTvshowPage() {
      this.isLoading = true;
      const lastItemDate = this.userTVShows[this.userTVShows.length - 1].timestamp;
      const nextPage = await this.getUserArtworksByType(
        { userId: this.userId, type: 'tvshow', startAfter: lastItemDate },
      );
      this.userTVShows = this.userTVShows.concat(nextPage);
      this.isLoading = false;
    },
  },
};
</script>
