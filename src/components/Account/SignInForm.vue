<template>
  <div
    class="uk-card uk-card-default uk-card-body uk-text-center"
    @keyup.enter="onSubmit(username, password)"
  >
    <h2 class="black">
      Connexion à votre compte
    </h2>
    <div class="uk-margin">
      <div class="uk-inline">
        <span
          class="uk-form-icon"
          uk-icon="icon: user"
        />
        <input
          v-model="username"
          class="uk-input uk-form-width-large thin-italic"
          type="text"
          placeholder="Adresse e-mail"
        >
      </div>
    </div>
    <div class="uk-margin">
      <div class="uk-inline">
        <span
          class="uk-form-icon"
          uk-icon="icon: lock"
        />
        <input
          v-model="password"
          class="uk-input uk-form-width-large thin-italic"
          type="password"
          placeholder="Mot de passe"
        >
      </div>
    </div>
    <button
      class="uk-button uk-button-default"
      @click="onSubmit(username, password)"
    >
      Valider
    </button>
    <div
      v-if="isLoading"
      uk-spinner
      class="uk-margin-left"
    />
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
