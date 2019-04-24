<template>
  <User
    :albums="userAlbums"
    :tvshows="userTVShows"
    :handle-click="handleClick"
    :current-user="user"
  />
</template>

<script>
import User from '@/components/User/User';
import { mapActions, mapState, mapGetters } from 'vuex';
import selectionService from '@/services/selection';
import { sendNotification } from '@/helpers/uikit';

export default {
  name: 'UserContainer',
  components: {
    User,
  },
  data() {
    return {
      userAlbums: [],
      userTVShows: [],
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userId']),
  },
  beforeMount() {
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
    ...mapActions(['getUserArtworksByType']),
    handleClick({ id, type }) {
      selectionService.deleteUserArtwork(this.userId, id, type)
        .then(() => {
          this.userAlbums = this.userAlbums.filter(artwork => artwork.id !== id);
          this.userTVShows = this.userTVShows.filter(artwork => artwork.id !== id);
          sendNotification('L\'œuvre a bien été retirée de votre selection', 'trash', 'success');
        })
        .catch(() => sendNotification('L\'œuvre n\'a pas pu être supprimée', 'ban', 'danger'));
    },
  },
};
</script>
