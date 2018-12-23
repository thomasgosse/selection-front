<template>
  <HeaderBar
    :on-click="goToHomePage"
  />
</template>


<script>
import HeaderBar from '@/components/Shared/HeaderBar';

export default {
  name: 'HeaderBarContainer',
  components: {
    HeaderBar,
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>
