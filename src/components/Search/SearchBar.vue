<template>
  <div
    id="offcanvas-push"
    uk-offcanvas="mode: push; overlay: true"
  >
    <div class="uk-offcanvas-bar">
      <div>
        <form
          @submit.prevent="onChange(search)"
        >
          <input
            v-model="search"
            class="uk-input uk-width-5-6 rounded-shape"
            type="search"
            placeholder="Search..."
          >
          <div
            v-if="isLoading"
            class="uk-margin-small-left"
            uk-spinner
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
