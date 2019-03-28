<template>
  <SearchBar
    :on-change="search"
  >
    <SearchBarCollapsibleLists
      :has-searched="hasSearched"
      :artists="filteredArtists"
      :albums="filteredAlbums"
      :on-click-artist="onClickArtist"
      :on-click-album="onClickAlbum"
      :set-max-albums="setMaxAlbums"
      :set-max-artists="setMaxArtists"
    />
  </SearchBar>
</template>

<script>
import SearchBar from '@/components/Search/SearchBar';
import SearchBarCollapsibleLists from '@/components/Search/SearchBarCollapsibleLists';
import selectionService from '@/services/selection';
import { toggleOffCanvas } from '@/helpers/uikit';
import { DEFAULT_MAX_ITEMS, MAX_DISPLAYABLE_ITEMS } from '@/helpers/constants';

const defaultImage = require('@/assets/ghost-solid.svg');

export default {
  name: 'SearchBarContainer',
  components: {
    SearchBar,
    SearchBarCollapsibleLists,
  },
  data() {
    return {
      artists: [],
      albums: [],
      hasSearched: false,
      maxArtists: DEFAULT_MAX_ITEMS,
      maxAlbums: DEFAULT_MAX_ITEMS,
    };
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter((album, index) => index < this.maxAlbums);
    },
    filteredArtists() {
      return this.artists.filter((artist, index) => index < this.maxArtists);
    },
  },
  methods: {
    setMaxAlbums() {
      this.maxAlbums = (this.maxAlbums === DEFAULT_MAX_ITEMS)
        ? MAX_DISPLAYABLE_ITEMS
        : DEFAULT_MAX_ITEMS;
    },
    setMaxArtists() {
      this.maxArtists = (this.maxArtists === DEFAULT_MAX_ITEMS)
        ? MAX_DISPLAYABLE_ITEMS
        : DEFAULT_MAX_ITEMS;
    },
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
      selectionService.getSearchResult(search)
        .then((result) => {
          this.hasSearched = true;
          const artistsAsItems = result.artists.items;
          const albumsAsItems = result.albums.items;
          this.artists = this.mapItems(artistsAsItems);
          this.albums = this.mapItems(albumsAsItems);
        });
    },
    onClickArtist(artist) {
      toggleOffCanvas();
      this.$router.push({ path: `/artist/${artist.name}/${artist.id}` });
    },
    onClickAlbum(album) {
      toggleOffCanvas();
      const artistId = album.artists[0].id;
      const artistName = album.artists[0].name;
      this.$router.push({ path: `/artist/${artistName}/${artistId}` });
    },
  },
};
</script>
