<template>
  <User
    :items="userArtworks"
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
  computed: {
    ...mapState(['userArtworks', 'user']),
    ...mapGetters(['userId']),
  },
  mounted() {
    this.getUserArtworksByType({ userId: this.userId, type: 'album' })
      .catch(() => sendNotification('Erreur de connection au serveur', 'ban', 'warning'));
  },
  methods: {
    ...mapActions(['getUserArtworksByType']),
    handleClick({ id, type }) {
      selectionService.deleteUserArtwork(this.userId, id, type)
        .then(() => {
          const filteredUserArtworks = this.userArtworks.filter(artwork => artwork.id !== id);
          this.$store.commit('UPDATE_USER_ARTWORKS', filteredUserArtworks);
          sendNotification('L\'œuvre a bien été retirée de votre selection', 'trash', 'success');
        })
        .catch(() => sendNotification('L\'œuvre n\'a pas pu être supprimée', 'ban', 'danger'));
    },
  },
};
</script>
