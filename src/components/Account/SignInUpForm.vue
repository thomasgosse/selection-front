<template>
  <div
    class="uk-card uk-card-default uk-card-body uk-text-center rounded-shape"
    @keyup.enter="onSubmit(username, password, name)"
  >
    <h2 class="black">
      {{ title }}
    </h2>
    <div
      v-if="isSignUp"
      class="uk-margin"
    >
      <div class="uk-inline">
        <span
          class="uk-form-icon"
          uk-icon="icon: user"
        />
        <input
          v-model="name"
          class="uk-input uk-form-width-large thin-italic rounded-shape"
          type="text"
          placeholder="Pseudonyme"
        >
      </div>
    </div>
    <div class="uk-margin">
      <div class="uk-inline">
        <span
          class="uk-form-icon"
          uk-icon="icon: user"
        />
        <input
          v-model="username"
          class="uk-input uk-form-width-large thin-italic rounded-shape"
          type="email"
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
          class="uk-input uk-form-width-large thin-italic rounded-shape"
          type="password"
          placeholder="Mot de passe"
        >
      </div>
    </div>
    <button
      class="uk-button uk-button-default"
      @click="onSubmit(username, password, name)"
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
  name: 'SignInUpForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    isSignUp: {
      type: Boolean,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      username: '',
      password: '',
      name: '',
    };
  },
};
</script>
