<template>
  <div
    class="uk-container uk-container-large uk-margin"
  >
    <article
      class="uk-article"
    >
      <ArtworkList
        v-if="items.length > 0"
        title="Thomas Gosse's selection"
        :items="items"
        :handle-click="() => {}"
      />
    </article>
  </div>
</template>

<script>
import ArtworkList from '@/components/Artist/ArtworkList';

export default {
  name: 'User',
  components: {
    ArtworkList,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
