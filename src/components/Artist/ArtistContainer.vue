<template>
  <Artist
    v-if="artist && artist.name"
    :name="artist.name"
    :albums="currentArtistAlbums"
    :singles="currentArtistSingles"
    :handle-click="handleClick"
  />
</template>

<script>
import Artist from '@/components/Artist/Artist';
import { mapActions, mapGetters, mapState } from 'vuex';
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
  },
  computed: {
    ...mapGetters(['currentArtistAlbums', 'currentArtistSingles']),
    ...mapState(['artist']),
  },
  beforeMount() {
    this.retrieveArtist(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.retrieveArtist(to.params.id);
    next();
  },
  methods: {
    ...mapActions(['getArtist']),
    retrieveArtist(id) {
      this.getArtist(id)
        .catch(() => this.$router.push({ path: '/' }));
    },
    handleClick(artwork) {
      const { type, id } = artwork;
      const builtArtwork = this.buildArtwork(artwork);
      selectionService.saveUserArtwork(builtArtwork, '1', id, type);
    },
  },
};
</script>
