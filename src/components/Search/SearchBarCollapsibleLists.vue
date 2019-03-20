<template>
  <ul
    v-if="hasSearched"
    uk-accordion="multiple: true"
  >
    <SearchBarList
      title="artistes"
      :items="artists"
      :on-click="onClickArtist"
      :set-max-items="setMaxArtists"
    />
    <SearchBarList
      title="albums"
      :items="albums"
      :on-click="onClickAlbum"
      :set-max-items="setMaxAlbums"
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
    onClickArtist: {
      type: Function,
      required: true,
    },
    onClickAlbum: {
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
  },
};
</script>
