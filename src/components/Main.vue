<template>
  <div v-if="!isLoading">
    <HeaderBarContainer :is-authorized="loggedIn" />
    <SearchBarContainer />
    <router-view v-if="loggedIn" />
    <HasNotRight v-else />
  </div>
</template>

<script>
import SearchBarContainer from '@/components/Search/SearchBarContainer';
import HeaderBarContainer from '@/components/Shared/HeaderBarContainer';
import HasNotRight from '@/components/HasNotRight';
import { mapState } from 'vuex';
import spotifyService from '@/services/spotify';

export default {
  name: 'Main',
  components: {
    SearchBarContainer,
    HeaderBarContainer,
    HasNotRight,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapState(['loggedIn']),
  },
  beforeMount() {
    spotifyService.getProfile()
      .then((result) => {
        const user = {
          mainImage: result.images[0],
          name: result.display_name,
          id: result.id,
        };
        this.$store.commit('SET_USER', user);
      })
      .catch(error => console.log('user not logged in', error))
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
