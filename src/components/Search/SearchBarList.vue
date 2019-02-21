<template>
  <li class="uk-open">
    <a class="uk-accordion-title">
      {{ title }}
    </a>
    <table
      v-if="items.length > 0"
      class="uk-table uk-accordion-content"
    >
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
        >
          <td
            uk-grid
            class="artist uk-grid-small uk-child-width-expand@s uk-text-left"
            @click="onClick(item)"
          >
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

    <div
      v-else
      class="uk-table uk-accordion-content"
    >
      no items found
    </div>
  </li>
</template>

<script>
export default {
  name: 'SearchBarList',
  props: {
    title: {
      type: String,
      default: '',
    },
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
