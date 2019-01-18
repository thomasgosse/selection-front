<template>
  <table class="uk-table">
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td
          uk-grid
          class="artist uk-grid-small uk-child-width-expand@s uk-text-left"
          @click="onClick">
          <div class="uk-width-1-3@m">
            <img
              :data-src="item.cover_image"
              class="uk-border-circle"
              uk-img
            >
          </div>
          <div class="uk-width-2-3@m">
            <div>
              {{ item.name }}
            </div>
            <div class="uk-text-meta">
              {{ item.type }}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SearchBarList',
  props: {
    items: {
      type: Array,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.uk-text-meta {
  text-transform: capitalize
}

.artist:hover {
  background-color: green;
  cursor: pointer;
}

.uk-border-circle {
  width: 4rem;
  height: 4rem;
}
</style>
