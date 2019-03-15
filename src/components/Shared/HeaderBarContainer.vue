<template>
  <HeaderBar
    :on-click="goToHomePage"
    :on-logout="logout"
    :is-authorized="isAuthorized"
    :profile-image="userImage"
  />
</template>


<script>
import HeaderBar from '@/components/Shared/HeaderBar';
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderBarContainer',
  components: {
    HeaderBar,
  },
  props: {
    isAuthorized: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['userImage']),
  },
  methods: {
    goToHomePage() {
      this.$router.push({ path: '/user' });
    },
    logout() {
      this.$store.commit('LOGOUT');
      this.$store.commit('REMOVE_TOKEN');
      localStorage.removeItem('token');
      this.$router.push({ path: '/' });
    },
  },
};
</script>
