<template>
  <nav
    class="uk-navbar-container"
    uk-navbar
  >

    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <a
          v-if="isAuthorized"
          class="uk-margin-left uk-icon-button"
          uk-icon="search"
          uk-toggle="target: #offcanvas-push"/>
      </ul>
      <a
        class="uk-navbar-item uk-logo"
        @click="onClick">
        Culturection
      </a>
    </div>

    <div class="uk-navbar-right uk-margin-right">
      <div
        v-if="isAuthorized"
        class="uk-inline">
        <div
          class="uk-icon-button"
        >
          <img
            :data-src="profileImage"
            class="profile-image"
            uk-img
            width="25"
            height="25"
          >
        </div>
        <div uk-dropdown="mode: click">
          <button
            class="uk-button uk-button-primary"
          >
            Deconnexion
          </button>
        </div>
      </div>
      <a
        v-else
        :href="authorize"
        class="uk-icon-button"
      >
        <font-awesome-icon
          :icon="['fab', 'spotify']"
          size="lg"/>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    isAuthorized: {
      type: Boolean,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  computed: {
    authorize() {
      const baseUri = 'https://accounts.spotify.com/authorize';
      const clientId = '906d6aec87c5496c8e466a84591bf3dc';
      const responseType = 'token';
      const redirectUri = 'http:%2F%2Flocalhost:8080%2Fcallback';
      const scopes = 'user-read-private%20user-read-email%20user-read-birthdate';
      return `${baseUri}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes}`;
    },
  },
};
</script>

<style scoped>
.profile-image {
  border-radius: 50%;
}
</style>

