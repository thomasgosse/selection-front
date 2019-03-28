<template>
  <HeaderBar
    :on-logout="logout"
    :is-authorized="isAuthorized"
    :profile-image="userImage"
  />
</template>

<script>
import HeaderBar from '@/components/Shared/HeaderBar';
import { mapGetters, mapActions } from 'vuex';

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
    ...mapActions(['signOut']),
    logout() {
      this.signOut();
    },
  },
};
</script>
