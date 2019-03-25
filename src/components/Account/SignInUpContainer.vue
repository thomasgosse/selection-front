<template>
  <div class="uk-container uk-container-small uk-position-relative uk-margin-large-top">
    <ul
      id="signInUp"
      uk-tab
      class="uk-child-width-expand@s uk-text-center"
      uk-grid
    >
      <li>
        <a>
          Sign In
        </a>
      </li>
      <li>
        <a>
          Sign Up
        </a>
      </li>
    </ul>

    <ul class="uk-switcher uk-margin uk-margin-large-top">
      <li>
        <SignInForm
          :on-submit="submitSignIn"
        />
      </li>
      <li>
        <SignUpForm />
      </li>
    </ul>
  </div>
</template>

<script>
import userUtils from '@/mixins/userUtils';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { mapActions } from 'vuex';

export default {
  name: 'SignInUpContainer',
  components: {
    SignInForm,
    SignUpForm,
  },
  mixins: [userUtils],
  methods: {
    ...mapActions(['signIn']),
    submitSignIn(username, password) {
      this.signIn({ username, password })
        .catch(err => console.log(err));
    },
  },
};
</script>
