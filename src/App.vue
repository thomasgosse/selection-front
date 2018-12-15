<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.theme.less";

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
</style>
