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
      const builtArtwork = this.buildAlbum(artwork);
      selectionService.saveUserArtwork(builtArtwork, this.userId, id, type);
    },
  },
};
</script>
