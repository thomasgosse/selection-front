<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getProfile } from './services/spotify';

export default {
  name: 'App',
  beforeMount() {
    this.$store.commit('token', localStorage.getItem('token'));
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

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.theme.less";

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
</style>
