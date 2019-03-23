<template>
  <div class="uk-card uk-card-default uk-card-body uk-text-center">
    <div class="uk-margin">
      <div class="uk-inline">
        <span
          class="uk-form-icon"
          uk-icon="icon: user"
        />
        <input
          v-model="username"
          class="uk-input uk-form-width-large"
          type="text"
          placeholder="E-mail address"
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
          class="uk-input uk-form-width-large"
          type="password"
          placeholder="Password"
        >
      </div>
    </div>
    <button
      class="uk-button uk-button-default"
      @click="onSubmit(username, password)"
    >
      Valider
    </button>
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
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
