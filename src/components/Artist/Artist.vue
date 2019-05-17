<template>
  <div class="uk-container uk-container-large uk-margin">
    <article
      v-if="areAlbumsOrSingles"
      class="uk-article"
    >
      <h1 class="black">
        {{ name }}
      </h1>
      <div>
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
      </div>
    </article>
    <NoInformation
      v-else
      top-label="Nous n'avons pas réussi a récupérer
      assez d'informations à propos de"
      bottom-label="Fais une autre recherche et tu auras surement plus de chances !"
      :name="name"
    />
  </div>
</template>

<script>
import ArtworkList from '@/components/Artwork/ArtworkList';
import NoInformation from '@/components/Shared/NoInformation';

export default {
  name: 'Artist',
  components: {
    ArtworkList,
    NoInformation,
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
  computed: {
    areAlbumsOrSingles() {
      return this.albums.length > 0 && this.singles.length > 0;
    },
  },
};
</script>
