<template>
  <SearchBar
    :on-change="search"
  >
    <SearchBarList
      :items="items"
      :on-click="onClick"
    />
  </SearchBar>
</template>

<script>
import UIkit from 'uikit';
import SearchBar from '@/components/Search/SearchBar';
import SearchBarList from '@/components/Search/SearchBarList';
import { getSearchResult } from '@/services/spotify';

const defaultImage = require('@/assets/ghost-solid.svg');

export default {
  name: 'SearchBarContainer',
  components: {
    SearchBar,
    SearchBarList,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    hasImage(images) {
      return images.length > 0;
    },
    search(search) {
      getSearchResult(search)
        .then((response) => {
          const results = response.artists.items;
          this.items = results.map(item => ({
            ...item,
            cover_image: this.hasImage(item.images) ? item.images[0].url : defaultImage,
          }));
        });
    },
    onClick(item) {
      UIkit.offcanvas('#offcanvas-push').toggle();
      this.$router.push({ path: `/artist/${item.id}` });
    },
  },
};
</script>
