<template>
  <div>
    <HeaderBarContainer :is-authorized="isLoggedIn"/>
    <SearchBarContainer/>
    <router-view v-if="isLoggedIn"/>
    <HasNotRight v-else/>
  </div>
</template>

<script>
import SearchBarContainer from '@/components/Search/SearchBarContainer';
import HeaderBarContainer from '@/components/Shared/HeaderBarContainer';
import HasNotRight from '@/components/HasNotRight';

export default {
  name: 'Main',
  components: {
    SearchBarContainer,
    HeaderBarContainer,
    HasNotRight,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.loggedIn;
    },
  },
};
</script>
