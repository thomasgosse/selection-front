<template>
  <table class="uk-table">
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td
          uk-grid
          class="uk-grid-small uk-child-width-expand@s uk-text-left"
          @click="onClick">
          <div class="uk-width-1-3@m">
            <img
              :data-src="item.cover_image"
              uk-img
              width="70"
              height="70"
            >
          </div>
          <div class="uk-width-2-3@m">
            <div>
              {{ item.title }}
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

<style>
.uk-text-meta {
  text-transform: capitalize
}
</style>

