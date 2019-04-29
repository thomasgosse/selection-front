<template>
  <AlbumDetail
    v-if="!isLoading"
    :detail="currentAlbumDetail"
    :handle-click="handleClick"
  />
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import selectionService from '@/services/selection';
import artworkUtils from '@/mixins/artworkUtils';
import AlbumDetail from './AlbumDetail';

export default {
  name: 'AlbumDetailContainer',
  components: {
    AlbumDetail,
  },
  mixins: [artworkUtils],
  props: {
    id: {
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
    ...mapState(['currentAlbumDetail']),
    ...mapGetters(['userId']),
  },
  beforeMount() {
    this.getAlbumDetail(this.id)
      .finally(() => { this.isLoading = false; });
  },
  beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    this.getAlbumDetail(to.params.id)
      .finally(() => {
        this.isLoading = false;
        next();
      });
  },
  methods: {
    ...mapActions(['getAlbumDetail']),
    handleClick(artwork) {
      const { type, id } = artwork;
      const builtArtwork = this.buildAlbum(artwork);
      selectionService.saveUserArtwork(builtArtwork, this.userId, id, type);
    },
  },
};
</script>
