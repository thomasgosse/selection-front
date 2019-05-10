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
        <UserDashboardExpandableList
          :items="albums"
          :is-loading="isLoading"
          :handle-click-item="handleClickItem"
          :get-next-artwork-page="getNextArtworkPage"
          collection-name="userAlbums"
          artwork-type="album"
        />
      </li>
      <li>
        <UserDashboardExpandableList
          :items="tvshows"
          :is-loading="isLoading"
          :handle-click-item="handleClickItem"
          :get-next-artwork-page="getNextArtworkPage"
          collection-name="userTVShows"
          artwork-type="tvshow"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import UserDashboardExpandableList from './UserDashboardExpandableList';

export default {
  name: 'UserDashboard',
  components: {
    UserDashboardExpandableList,
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
    handleClickItem: {
      type: Function,
      required: true,
    },
    getNextArtworkPage: {
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
