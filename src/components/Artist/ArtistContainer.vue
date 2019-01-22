<template>
  <Artist
    v-if="artist && artist.name"
    :name="artist.name"
    :albums="albums"
    :singles="singles"
  />
</template>

<script>
import Artist from '@/components/Artist/Artist';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'ArtistContainer',
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
    ...mapGetters(['albums', 'singles']),
    ...mapState(['artist']),
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
