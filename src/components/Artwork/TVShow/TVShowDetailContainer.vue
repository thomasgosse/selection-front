<template>
  <TVShowDetail
    v-if="!isLoading && currentTVShowDetail"
    :detail="currentTVShowDetail"
    :handle-click="handleClick"
  />
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import selectionService from '@/services/selection';
import artworkUtils from '@/mixins/artworkUtils';
import TVShowDetail from './TVShowDetail';

export default {
  name: 'TVShowDetailContainer',
  components: {
    TVShowDetail,
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
    ...mapState(['currentTVShowDetail']),
    ...mapGetters(['userId']),
  },
  beforeMount() {
    this.isLoading = true;
    this.getTVShowDetail(this.id)
      .finally(() => { this.isLoading = false; });
  },
  beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    this.getTVShowDetail(to.params.id)
      .finally(() => {
        this.isLoading = false;
        next();
      });
  },
  methods: {
    ...mapActions(['getTVShowDetail']),
    handleClick(artwork) {
      const { type, id } = artwork;
      const builtArtwork = this.buildTVShow(artwork);
      selectionService.saveUserArtwork(builtArtwork, this.userId, id, type);
    },
  },
};
</script>
