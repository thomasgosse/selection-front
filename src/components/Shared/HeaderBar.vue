<template>
  <nav
    class="uk-navbar-container"
    uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li
          v-if="isAuthorized"
          class="uk-active">
          <a
            class="uk-margin-left"
            uk-icon="search"
            uk-toggle="target: #offcanvas-push"/>
        </li>
        <li class="uk-active">
          <a @click="onClick">CULTURECTION</a>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right uk-margin-right">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <a
            :href="authorize"
            uk-icon="sign-in">Log-in</a>
        </li>
      </ul>
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
