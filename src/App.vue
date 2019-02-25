<template>
  <div id="app">
    <router-view />
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
    font-family: 'Roboto', sans-serif;
  }

  .black {
    font-weight: 700;
  }

  .thin-italic {
    font-weight: 100;
    font-style: italic;
  }
</style>
