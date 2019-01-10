<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getProfile } from './services/spotify';

export default {
  name: 'App',
  mounted() {
    this.$store.commit('token', localStorage.getItem('token'));
    console.log(getProfile());
  },
};
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.theme.less";

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
</style>
