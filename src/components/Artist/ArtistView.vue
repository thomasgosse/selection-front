<template>
  <Artist
    v-if="name"
    :name="name"
    :albums="albums"
    :singles="singles"
  />
</template>

<script>
import Artist from '@/components/Artist/Artist';
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'ArtistView',
  components: {
    Artist,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.$store.state.artist.name;
    },
    albums() {
      const albums = this.$store.state.albums.items;
      const alb = albums.filter(album => album.album_type === 'album');
      return _.uniqBy(alb, 'name');
    },
    singles() {
      const albums = this.$store.state.albums.items;
      const singles = albums.filter(album => album.album_type === 'single');
      return _.uniqBy(singles, 'name');
    },
  },
  beforeMount() {
    this.getArtist(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getArtist(to.params.id);
    next();
  },
  methods: {
    ...mapActions(['getArtist']),
  },
};
</script>
