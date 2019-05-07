<template>
  <div
    v-if="detail.name"
    class="uk-container uk-container-large uk-margin"
  >
    <h1>
      <span class="black">{{ detail.name }}</span>
      <span class="thin-italic">
        ({{ detail.releaseDate.split('-')[0] }})
      </span>
      <span
        v-for="artist in detail.artists"
        :key="artist.name"
        style="font-size: 1.8rem"
      >
        -
        <a
          class="black"
          @click="goToArtistPage(artist.name, artist.id)"
        >
          <span>{{ artist.name }}</span>
        </a>
      </span>
    </h1>
    <div
      class="uk-margin-top"
      uk-grid
    >
      <div class="uk-width-1-3@m">
        <Artwork
          :item="detail"
          :handle-click="handleClick"
          icon="plus"
          image-width="500"
          font-size="1.5"
        />
        <div class="uk-margin-top thin">
          © {{ detail.label }}
        </div>
      </div>
      <div class="uk-width-2-3@m">
        <TrackList :tracks="detail.tracks" />
      </div>
    </div>
  </div>
</template>

<script>
import Artwork from '@/components/Artwork/Artwork';
import TrackList from './TrackList';

export default {
  name: 'AlbumDetail',
  components: {
    Artwork,
    TrackList,
  },
  props: {
    detail: {
      type: Object,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    goToArtistPage(name, id) {
      this.$router.push({ path: `/artist/${name}/${id}` });
    },
  },
};
</script>
