<template>
  <div
    class="uk-container uk-container-large uk-margin"
  >
    <article
      class="uk-article"
    >
      <ArtworkList
        v-if="items.length > 0"
        :title="`${currentUser.name}\'s selection`"
        :items="items"
        :handle-click="handleClick"
        icon="close"
      />
    </article>
  </div>
</template>

<script>
import ArtworkList from '@/components/Artwork/ArtworkList';

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
    currentUser: {
      type: Object,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
