<template>
  <Artist
    v-if="!isLoading && name"
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
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters(['currentArtistAlbums', 'currentArtistSingles', 'userId']),
  },
  beforeMount() {
    this.isLoading = true;
    this.getArtistAlbums(this.id)
      .finally(() => { this.isLoading = false; });
  },
  beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    this.getArtistAlbums(to.params.id)
      .finally(() => {
        this.isLoading = false;
        next();
      });
  },
  methods: {
    ...mapActions(['getArtistAlbums']),
    handleClick(artwork) {
      const { type, id } = artwork;
      const builtArtwork = this.buildAlbum(artwork);
      selectionService.saveUserArtwork(builtArtwork, this.userId, id, type);
    },
  },
};
</script>
