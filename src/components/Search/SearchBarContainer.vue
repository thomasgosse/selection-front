<template>
  <SearchBar
    :on-change="search"
    :is-loading="isLoading"
  >
    <SearchBarCollapsibleLists
      :has-searched="hasSearched"
      :artists="filteredArtists"
      :albums="filteredAlbums"
      :tvshows="filteredTVShows"
      :on-click-item="onClickItem"
      :set-max-albums="setMaxAlbums"
      :set-max-artists="setMaxArtists"
      :set-max-t-v-shows="setMaxTVShows"
    />
  </SearchBar>
</template>

<script>
import SearchBar from '@/components/Search/SearchBar';
import SearchBarCollapsibleLists from '@/components/Search/SearchBarCollapsibleLists';
import selectionService from '@/services/selection';
import { toggleOffCanvas, sendNotification } from '@/helpers/uikit';
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
      tvshows: [],
      hasSearched: false,
      maxArtists: DEFAULT_MAX_ITEMS,
      maxAlbums: DEFAULT_MAX_ITEMS,
      maxTVShows: DEFAULT_MAX_ITEMS,
      isLoading: false,
    };
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter((album, index) => index < this.maxAlbums);
    },
    filteredArtists() {
      return this.artists.filter((artist, index) => index < this.maxArtists);
    },
    filteredTVShows() {
      return this.tvshows.filter((tvshow, index) => index < this.maxTVShows);
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
    setMaxTVShows() {
      this.maxTVShows = (this.maxTVShows === DEFAULT_MAX_ITEMS)
        ? MAX_DISPLAYABLE_ITEMS
        : DEFAULT_MAX_ITEMS;
    },
    mapSpotifyItems(items) {
      return items.map(item => ({
        ...item,
        cover_image: (item.images.length > 0) ? item.images[0].url : defaultImage,
      }));
    },
    mapTmdbItems(items, type) {
      return items.map(item => ({
        ...item,
        cover_image: item.poster_path ? `https://image.tmdb.org/t/p/w154${item.poster_path}` : defaultImage,
        type,
      }));
    },
    search(search) {
      this.isLoading = true;
      selectionService.getSearchResult(search)
        .then((result) => {
          this.hasSearched = true;
          this.isLoading = false;
          this.artists = this.mapSpotifyItems(result.artists);
          this.albums = this.mapSpotifyItems(result.albums);
          this.tvshows = this.mapTmdbItems(result.tvshows, 'TV show');
        })
        .catch(() => sendNotification('Erreur de connection au serveur', 'ban', 'warning'));
    },
    onClickItem(item, type) {
      toggleOffCanvas();
      this.$router.push({ path: `/${type}/${item.name}/${item.id}` });
    },
  },
};
</script>
