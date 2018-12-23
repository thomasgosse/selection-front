<template>
  <div>
    <HeaderBarContainer/>
    <SearchBarContainer/>
    <router-view/>
  </div>
</template>

<script>
import SearchBarContainer from '@/components/Search/SearchBarContainer';
import HeaderBarContainer from '@/components/Shared/HeaderBarContainer';

export default {
  name: 'Main',
  components: {
    SearchBarContainer,
    HeaderBarContainer,
  },
};
</script>
