<template>
  <HeaderBar
    :on-click="goToHomePage"
    :is-authorized="isAuthorized"
    :profile-image="profileImage"
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
    ...mapGetters(['profileImage']),
  },
  methods: {
    goToHomePage() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
