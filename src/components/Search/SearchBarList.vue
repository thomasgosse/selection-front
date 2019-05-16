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
            @click="onClick(item, type)"
          >
            <div class="uk-width-1-3@m picture">
              <div
                class="item-picture"
                :style="{ 'border-radius': radius + '%', height: imagesHeight + 'rem' }"
              >
                <v-lazy-image :src="item.image" />
              </div>
            </div>
            <div class="uk-width-2-3@m">
              <div>
                {{ item.name }}
              </div>
              <div class="uk-text-meta">
                {{ item.typeLabel }}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <button
        class="uk-button uk-button-default uk-margin-top"
        @click="setMaxItems"
      >
        <span
          v-if="areMoreItemsDisplayable"
          uk-icon="icon: plus; ratio: 0.7"
        />
        <span
          v-else
          uk-icon="icon: minus; ratio: 0.7"
        />
        {{ moreLabel }}
      </button>
    </table>
    <div
      v-else
      class="uk-table uk-accordion-content"
    >
      Aucun résulats à votre recherche
    </div>
  </li>
</template>

<script>
import { MAX_DISPLAYABLE_ITEMS } from '@/helpers/constants';

export default {
  name: 'SearchBarList',
  props: {
    title: {
      type: String,
      default: '',
    },
    moreLabel: {
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
    setMaxItems: {
      type: Function,
      required: true,
    },
    radius: {
      type: String,
      default: '0',
    },
    imagesHeight: {
      type: String,
      default: '5',
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    areMoreItemsDisplayable() {
      return this.items.length < MAX_DISPLAYABLE_ITEMS;
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

.item-picture {
    position:relative;
    overflow:hidden;
    width: 5rem;
}
</style>
