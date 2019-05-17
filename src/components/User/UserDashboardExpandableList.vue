<template>
  <div v-if="items.length > 0">
    <ArtworkList
      :items="items"
      :handle-click="handleClickItem"
      icon="close"
    />
    <div
      v-if="!isItemListFull"
      class="uk-flex uk-flex-center uk-margin-top"
    >
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
    <NoInformation
      v-if="!isLoading"
      class="uk-margin-large-top"
      top-label="Tu n'as pas encore d'oeuvres enregistrée ici..."
      bottom-label="Fais une recherche pour en ajouter une !"
      image="tumbleweed"
    />
  </div>
</template>

<script>
import ArtworkList from '@/components/Artwork/ArtworkList';
import NoInformation from '@/components/Shared/NoInformation';

export default {
  name: 'UserDashboardExpandableList',
  components: {
    ArtworkList,
    NoInformation,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    totalItemsCount: {
      type: Number,
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
  computed: {
    isItemListFull() {
      return this.items.length === this.totalItemsCount;
    },
  },
};
</script>
