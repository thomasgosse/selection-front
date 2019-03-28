<template>
  <div v-if="!isLoading">
    <HeaderBarContainer :is-authorized="loggedIn" />
    <SearchBarContainer />
    <router-view v-if="loggedIn" />
    <SignInUpContainer v-else />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import firebaseService from '@/services/firebase';
import SearchBarContainer from '@/components/Search/SearchBarContainer';
import HeaderBarContainer from '@/components/Shared/HeaderBarContainer';
import SignInUpContainer from '@/components/Account/SignInUpContainer';
import userUtils from '@/mixins/userUtils';

export default {
  name: 'Main',
  components: {
    SearchBarContainer,
    HeaderBarContainer,
    SignInUpContainer,
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
        this.signOut();
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    ...mapActions(['signOut']),
  },
};
</script>
