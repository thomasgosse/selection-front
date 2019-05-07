<template>
  <div>
    <h2
      v-if="title"
      class="thin-italic"
    >
      {{ title }}
    </h2>
    <div
      class="uk-flex-middle"
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: > .artwork; delay: 100; repeat: false"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="uk-width-1-6@m artwork"
      >
        <Artwork
          :item="item"
          :handle-click="handleClick"
          :icon="icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Artwork from './Artwork';

export default {
  name: 'ArtworkList',
  components: {
    Artwork,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
