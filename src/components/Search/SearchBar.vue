<template>
  <div
    id="offcanvas-push"
    uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar">
      <div>
        <form class="uk-search uk-search-navbar">
          <span uk-search-icon/>
          <input
            class="uk-search-input"
            type="search"
            placeholder="Search...">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>

<style scoped>
.uk-offcanvas-bar {
    padding: 1.6rem 2rem;
}
</style>
