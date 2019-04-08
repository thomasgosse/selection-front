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
            uk-scrollspy="cls: uk-animation-fade; target: > .picture; delay: 100; repeat: false"
            @click="onClick(item)"
          >
            <div class="uk-width-1-3@m picture">
              <div class="profile-picture">
                <v-lazy-image
                  :src="item.cover_image"
                  :src-placeholder="item.cover_image"
                />
              </div>
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
      <button
        class="uk-button uk-button-default uk-margin-top"
        @click="setMaxItems"
      >
        +/- d'{{ title }}
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
    setMaxItems: {
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

.profile-picture {
    position:relative;
    overflow:hidden;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
}
</style>
