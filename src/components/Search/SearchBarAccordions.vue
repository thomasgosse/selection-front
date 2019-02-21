<template>
  <ul
    uk-accordion="multiple: true"
  >
    <SearchBarList
      title="artists"
      :items="artists"
      :on-click="onClickArtist"
    />
    <SearchBarList
      title="albums"
      :items="albums"
      :on-click="onClickAlbum"
    />
  </ul>
</template>

<script>
import SearchBarList from '@/components/Search/SearchBarList';

export default {
  name: 'SearchBarAccordions',
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
  },
};
</script>
