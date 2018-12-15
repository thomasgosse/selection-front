<template>
  <div>
    <HeaderBar/>
    <SearchBar/>
    <router-view/>
  </div>
</template>

<script>
import SearchBar from '@/components/Search/SearchBar';
import HeaderBar from '@/components/Shared/HeaderBar';

export default {
  name: 'Main',
  components: {
    SearchBar,
    HeaderBar,
  },
};
</script>
