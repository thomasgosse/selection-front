<template>
  <div
    class="uk-container uk-container-large uk-padding"
  >
    <article
      class="uk-article"
    >
      <h1 class="uk-article-title">
        {{ name }}
      </h1>
      <ArtworkList
        title="Albums"
        :items="albums"
      />
      <ArtworkList
        title="Singles & EPs"
        :items="singles"
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
  },
};
</script>
