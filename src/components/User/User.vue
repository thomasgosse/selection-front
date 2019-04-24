<template>
  <div
    class="uk-container uk-container-large uk-margin"
  >
    <article
      class="uk-article"
    >
      <ul
        id="artworks"
        uk-tab
        class="uk-child-width-expand@s uk-text-center"
        uk-grid
      >
        <li>
          <a>
            Albums
          </a>
        </li>
        <li>
          <a>
            Séries
          </a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin uk-margin-large-top">
        <li>
          <ArtworkList
            v-if="albums.length > 0"
            :title="`${currentUser.name}\'s selection`"
            :items="albums"
            :handle-click="handleClick"
            icon="close"
          />
        </li>
        <li>
          <ArtworkList
            v-if="tvshows.length > 0"
            :title="`${currentUser.name}\'s selection`"
            :items="tvshows"
            :handle-click="handleClick"
            icon="close"
          />
        </li>
      </ul>
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
    albums: {
      type: Array,
      required: true,
    },
    tvshows: {
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
