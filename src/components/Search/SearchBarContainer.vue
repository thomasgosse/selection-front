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
import { getSearchResult } from '@/services/discogs';

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
    };
  },
  methods: {
    hasImage(uri) {
      return uri !== 'https://img.discogs.com/images/spacer.gif';
    },
    search(search) {
      if (search.length > 1) {
        getSearchResult(search)
          .then((response) => {
            const results = response.results;
            this.items = results.map(item => ({
              ...item,
              cover_image: (this.hasImage(item.cover_image)) ? item.cover_image : defaultImage,
            }));
          });
      }
      return [];
    },
    onClick() {
      UIkit.offcanvas('#offcanvas-push').toggle();
      this.$router.push('/');
    },
  },
};
</script>
