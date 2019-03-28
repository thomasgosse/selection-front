<template>
  <Artist
    v-if="name"
    :name="name"
    :albums="currentArtistAlbums"
    :singles="currentArtistSingles"
    :handle-click="handleClick"
  />
</template>

<script>
import Artist from '@/components/Artist/Artist';
import { mapActions, mapGetters } from 'vuex';
import artworkUtils from '@/mixins/artworkUtils';
import selectionService from '@/services/selection';
import { sendNotification } from '@/helpers/uikit';

export default {
  name: 'ArtistContainer',
  components: {
    Artist,
  },
  mixins: [artworkUtils],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['currentArtistAlbums', 'currentArtistSingles', 'userId']),
  },
  beforeMount() {
    this.retrieveArtist(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.retrieveArtist(to.params.id);
    next();
  },
  methods: {
    ...mapActions(['getArtistAlbums']),
    retrieveArtist(id) {
      this.getArtistAlbums(id)
        .catch(() => this.$router.push({ path: '/' }));
    },
    handleClick(artwork) {
      const { type, id } = artwork;
      const builtArtwork = this.buildArtwork(artwork);
      selectionService.saveUserArtwork(builtArtwork, this.userId, id, type)
        .then((result) => {
          if (result.message === 'artwork.already.exists') sendNotification('L\'œuvre à déja été ajoutée', 'ban', 'warning');
          else sendNotification('L\'œuvre à été ajoutée avec succès', 'check', 'success');
        })
        .catch(() => sendNotification('L\'œuvre n\'a pas pu être sauvegardée', 'ban', 'danger'));
    },
  },
};
</script>
