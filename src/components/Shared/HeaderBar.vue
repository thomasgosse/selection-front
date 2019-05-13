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
          uk-icon="icon: search; ratio: 1.4"
          uk-toggle="target: #offcanvas-push"
        />
      </ul>
      <router-link
        class="uk-navbar-item uk-logo"
        to="/home"
      >
        <img
          src="@/assets/selection.png"
          class="logo"
        >
      </router-link>
    </div>

    <div
      v-if="isAuthorized"
      class="uk-navbar-right uk-margin-right"
    >
      <a class="uk-icon-button">
        <img
          :data-src="profileImage"
          class="uk-border-circle"
          uk-img
        >
      </a>
      <div
        uk-dropdown="mode: click"
        class="rounded-shape"
      >
        <button
          class="uk-button uk-button-primary"
          @click="onLogout"
        >
          Deconnexion
        </button>
      </div>
    </div>

    <div
      v-else
      class="uk-navbar-right uk-margin-right"
    >
      <ul class="uk-navbar-nav">
        <button
          class="uk-icon-button"
          uk-icon="icon: user; ratio: 1.4"
          uk-tooltip="title: Connectez vous !; pos: bottom-left"
          @click="goToSignIn"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import UIkit from 'uikit';

export default {
  name: 'HeaderBar',
  props: {
    onLogout: {
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
  methods: {
    goToSignIn() {
      UIkit.switcher('#signInUp').show(0);
    },
  },
};
</script>

<style scoped>
.uk-icon-button {
  height: 3rem;
  width: 3rem;
}

.uk-border-circle {
  height: 3rem;
  width: 1.5rem;
}

.logo {
  height: 3rem;
  width: 4.3rem;
}
</style>
