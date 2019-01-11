<template>
  <SearchBar
    :on-change="debouncedSearch"
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
import { debounce } from 'lodash';

const defaultImage = require('@/assets/logo.png');

export default {
  name: 'SearchBarContainer',
  components: {
    SearchBar,
    SearchBarList,
  },
  data() {
    return {
      items: [],
      debouncedSearch: debounce(this.search, 250),
    };
  },
  methods: {
    hasImage(images) {
      return images.length > 0;
    },
    search(search) {
      if (search.length > 1) {
        getSearchResult(search)
          .then((response) => {
            const results = response.artists.items;
            this.items = results.map(item => ({
              ...item,
              cover_image: this.hasImage(item.images) ? item.images[0].url : defaultImage,
            }));
          });
      }
      return [];
    },
    onClick() {
      UIkit.offcanvas('#offcanvas-push').toggle();
      this.$router.push({ path: '/' });
    },
  },
};
</script>
