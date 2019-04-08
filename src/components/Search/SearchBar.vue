<template>
  <div
    id="offcanvas-push"
    uk-offcanvas="mode: push; overlay: true"
  >
    <div class="uk-offcanvas-bar">
      <div>
        <form
          class="uk-search uk-search-navbar"
          uk-grid
          @submit.prevent="onChange(search)"
        >
          <input
            v-model="search"
            class="uk-search-input uk-width-2-3@m uk-padding-remove"
            type="search"
            placeholder="Search..."
          >
          <div
            v-if="isLoading"
            uk-spinner
            class="uk-width-auto@m"
          />
        </form>
      </div>
      <slot />
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
    isLoading: {
      type: Boolean,
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
