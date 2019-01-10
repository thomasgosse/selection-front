<template>
  <HeaderBar
    :on-click="goToHomePage"
    :is-authorized="isAuthorized"
  />
</template>


<script>
import HeaderBar from '@/components/Shared/HeaderBar';

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
  methods: {
    goToHomePage() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
