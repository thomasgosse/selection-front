<template>
  <div class="uk-container uk-container-large uk-margin">
    <h1 class="thin-italic">
      User's selection
    </h1>
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
    <ul class="uk-switcher uk-margin">
      <li>
        <ArtworkList
          v-if="albums.length > 0"
          :items="albums"
          :handle-click="handleClick"
          icon="close"
        />
        <div class="uk-flex uk-flex-center uk-margin-top">
          <button
            v-if="!isLoading"
            class="uk-button uk-button-default circle-btn"
            @click="getNextAlbumPage('userAlbums', 'album')"
          >
            <span uk-icon="plus" />
          </button>
          <div
            v-else
            uk-spinner
          />
        </div>
      </li>
      <li>
        <ArtworkList
          v-if="tvshows.length > 0"
          :items="tvshows"
          :handle-click="handleClick"
          icon="close"
        />
        <div class="uk-flex uk-flex-center uk-margin-top">
          <button
            v-if="!isLoading"
            class="uk-button uk-button-default circle-btn"
            @click="getNextTvshowPage('userTVShows', 'tvshow')"
          >
            <span uk-icon="plus" />
          </button>
          <div
            v-else
            uk-spinner
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ArtworkList from '@/components/Artwork/ArtworkList';

export default {
  name: 'UserDashboard',
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
    getNextTvshowPage: {
      type: Function,
      required: true,
    },
    getNextAlbumPage: {
      type: Function,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.circle-btn {
  border-radius: 50px;
}
</style>
