<template>
  <ul
    v-if="hasSearched"
    uk-accordion="multiple: true"
  >
    <SearchBarList
      title="artistes"
      :items="artists"
      :on-click="onClickItem"
      :set-max-items="setMaxArtists"
      type="artist"
      more-label="d'artistes"
      radius="50"
    />
    <SearchBarList
      title="albums"
      :items="albums"
      :on-click="onClickItem"
      :set-max-items="setMaxAlbums"
      type="album"
      more-label="d'albums"
    />
    <SearchBarList
      title="séries"
      :items="tvshows"
      :on-click="onClickItem"
      :set-max-items="setMaxTVShows"
      type="tvshow"
      more-label="de séries"
      images-height="7.5"
    />
  </ul>
</template>

<script>
import SearchBarList from '@/components/Search/SearchBarList';

export default {
  name: 'SearchBarCollapsibleLists',
  components: {
    SearchBarList,
  },
  props: {
    artists: {
      type: Array,
      required: true,
    },
    albums: {
      type: Array,
      required: true,
    },
    tvshows: {
      type: Array,
      required: true,
    },
    onClickItem: {
      type: Function,
      required: true,
    },
    hasSearched: {
      type: Boolean,
      required: true,
    },
    setMaxArtists: {
      type: Function,
      required: true,
    },
    setMaxAlbums: {
      type: Function,
      required: true,
    },
    setMaxTVShows: {
      type: Function,
      required: true,
    },
  },
};
</script>
