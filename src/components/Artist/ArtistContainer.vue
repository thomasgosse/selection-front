<template>
  <Artist
    v-if="artist && artist.name"
    :name="artist.name"
    :albums="albums"
    :singles="singles"
    :save-artwork="saveArtwork"
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
    this.updateArtist(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.updateArtist(to.params.id);
    next();
  },
  methods: {
    ...mapActions(['getArtist']),
    updateArtist(id) {
      this.getArtist(id)
        .catch(() => this.$router.push({ path: '/' }));
    },
    saveArtwork(artwork) {
      console.log(artwork);
    },
  },
};
</script>
