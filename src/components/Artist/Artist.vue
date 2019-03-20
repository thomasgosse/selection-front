<template>
  <div
    class="uk-container uk-container-large uk-margin"
  >
    <article
      class="uk-article"
    >
      <h1 class="black">
        {{ name }}
      </h1>
      <ArtworkList
        v-if="albums.length > 0"
        title="albums"
        :items="albums"
        :handle-click="handleClick"
        icon="plus"
      />
      <ArtworkList
        v-if="singles.length > 0"
        class="uk-margin-top"
        title="singles & EPs"
        :items="singles"
        :handle-click="handleClick"
        icon="plus"
      />
    </article>
  </div>
</template>

<script>
import ArtworkList from '@/components/Artist/ArtworkList';

export default {
  name: 'Artist',
  components: {
    ArtworkList,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    albums: {
      type: Array,
      required: true,
    },
    singles: {
      type: Array,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
