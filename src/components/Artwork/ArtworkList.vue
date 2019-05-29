<template>
  <div>
    <h2
      v-if="title"
      class="thin-italic"
    >
      {{ title }}
    </h2>
    <div
      uk-grid
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="uk-width-1-4@m uk-width-1-6@xl uk-width-1-2@s uk-flex uk-flex-center"
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
