<template>
  <SearchBar
    :on-change="search"
  >
    <SearchBarAccordions
      :artists="artists"
      :albums="albums"
      :on-click-artist="onClickArtist"
      :on-click-album="onClickAlbum"
    />
  </SearchBar>
</template>

<script>
import UIkit from 'uikit';
import SearchBar from '@/components/Search/SearchBar';
import SearchBarAccordions from '@/components/Search/SearchBarAccordions';
import { getSearchResult } from '@/services/spotify';

const defaultImage = require('@/assets/ghost-solid.svg');

export default {
  name: 'SearchBarContainer',
  components: {
    SearchBar,
    SearchBarAccordions,
  },
  data() {
    return {
      artists: [],
      albums: [],
    };
  },
  methods: {
    hasImage(images) {
      return images.length > 0;
    },
    mapItems(items) {
      return items.map(item => ({
        ...item,
        cover_image: this.hasImage(item.images) ? item.images[0].url : defaultImage,
      }));
    },
    search(search) {
      getSearchResult(search)
        .then((response) => {
          const artistsAsItems = response.artists.items;
          const albumsAsItems = response.albums.items;
          this.artists = this.mapItems(artistsAsItems);
          this.albums = this.mapItems(albumsAsItems);
        });
    },
    onClickArtist(artist) {
      UIkit.offcanvas('#offcanvas-push').toggle();
      this.$router.push({ path: `/artist/${artist.id}` });
    },
    onClickAlbum(album) {
      UIkit.offcanvas('#offcanvas-push').toggle();
      const artistId = album.artists[0].id;
      this.$router.push({ path: `/artist/${artistId}` });
    },
  },
};
</script>
