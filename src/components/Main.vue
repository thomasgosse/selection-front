<template>
  <div>
    <HeaderBarContainer :is-authorized="loggedIn"/>
    <SearchBarContainer/>
    <router-view v-if="loggedIn"/>
    <HasNotRight v-else/>
  </div>
</template>

<script>
import SearchBarContainer from '@/components/Search/SearchBarContainer';
import HeaderBarContainer from '@/components/Shared/HeaderBarContainer';
import HasNotRight from '@/components/HasNotRight';
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    SearchBarContainer,
    HeaderBarContainer,
    HasNotRight,
  },
  computed: {
    ...mapState(['loggedIn']),
  },
};
</script>
