<template>
  <nav
    class="uk-navbar-container"
    uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <a
            class="uk-margin-left"
            uk-icon="search"
            uk-toggle="target: #offcanvas-push"/>
        </li>
        <li class="uk-active">
          <a @click="goToHomePage">CULTURECTION</a>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right uk-margin-right">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <a uk-icon="sign-in">Log-in</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>
