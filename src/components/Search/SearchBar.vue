<template>
  <div
    id="offcanvas-push"
    uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar uk-margin-small">
      <div>
        <form class="uk-search uk-search-navbar">
          <span uk-search-icon/>
          <input
            v-model="search"
            class="uk-search-input"
            type="search"
            placeholder="Search..."
            @input="onChange(search)"
          >
        </form>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    onChange: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style scoped>
.uk-offcanvas-bar {
    padding: 1.6rem 2rem;
}
</style>
