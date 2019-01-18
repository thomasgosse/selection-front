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
import { getProfile } from '../services/spotify';

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
  beforeMount() {
    getProfile().then((result) => {
      const user = {
        mainImage: result.images[0],
        name: result.display_name,
      };
      this.$store.commit('user', user);
    });
  },
};
</script>
