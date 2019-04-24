<template>
  <TVShowDetail
    v-if="currentTVShowDetail.name"
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
  computed: {
    ...mapState(['currentTVShowDetail']),
    ...mapGetters(['userId']),
  },
  beforeMount() {
    this.getTVShowDetail(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getTVShowDetail(to.params.id);
    next();
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
