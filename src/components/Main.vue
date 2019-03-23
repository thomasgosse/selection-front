<template>
  <div v-if="!isLoading">
    <HeaderBarContainer :is-authorized="loggedIn" />
    <SearchBarContainer />
    <router-view v-if="loggedIn" />
    <SignInUp v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import firebaseService from '@/services/firebase';
import { hideOffCanvas } from '@/helpers/uikit';
import SearchBarContainer from '@/components/Search/SearchBarContainer';
import HeaderBarContainer from '@/components/Shared/HeaderBarContainer';
import SignInUp from '@/components/Account/SignInUp';
import userUtils from '@/mixins/userUtils';

export default {
  name: 'Main',
  components: {
    SearchBarContainer,
    HeaderBarContainer,
    SignInUp,
  },
  mixins: [userUtils],
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapState(['loggedIn']),
  },
  beforeMount() {
    firebaseService.getUser()
      .then((result) => {
        const user = this.buildUser(result);
        this.$store.commit('SET_USER', user);
      })
      .catch(() => {
        hideOffCanvas();
        this.$store.commit('LOGOUT');
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
