<template>
  <div v-if="items.length > 0">
    <ArtworkList
      :items="items"
      :handle-click="handleClickItem"
      icon="close"
    />
    <div class="uk-flex uk-flex-center uk-margin-top">
      <button
        v-if="!isLoading"
        class="uk-button uk-button-default"
        @click="getNextArtworkPage(collectionName, artworkType)"
      >
        <span uk-icon="plus" />
      </button>
      <div
        v-else
        uk-spinner
      />
    </div>
  </div>
  <div v-else>
    <!-- TO DO BETTER -->
    <div v-if="!isLoading">
      Ajoutez des artworks !
    </div>
  </div>
</template>

<script>
import ArtworkList from '@/components/Artwork/ArtworkList';

export default {
  name: 'UserDashboardExpandableList',
  components: {
    ArtworkList,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    collectionName: {
      type: String,
      required: true,
    },
    artworkType: {
      type: String,
      required: true,
    },
    handleClickItem: {
      type: Function,
      required: true,
    },
    getNextArtworkPage: {
      type: Function,
      required: true,
    },
  },
};
</script>
