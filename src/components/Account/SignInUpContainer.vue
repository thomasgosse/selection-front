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
          :is-loading="isLoading"
        />
      </li>
      <li>
        <SignUpForm
          :on-submit="submitSignUp"
          :is-loading="isLoading"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import UIkit from 'uikit';
import firebaseService from '@/services/firebase';
import userUtils from '@/mixins/userUtils';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default {
  name: 'SignInUpContainer',
  components: {
    SignInForm,
    SignUpForm,
  },
  mixins: [userUtils],
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(['signIn']),
    submitSignIn(username, password) {
      this.isLoading = true;
      this.signIn({ username, password })
        .catch(err => console.log(err))
        .finally(() => { this.isLoading = false; });
    },
    submitSignUp(username, password, name) {
      this.isLoading = true;
      firebaseService.signUp(username, password)
        .then((result) => {
          const { user } = result;
          user.updateProfile({ displayName: name })
            .then(() => { UIkit.switcher('#signInUp').show(0); })
            .catch((error) => { console.log(error); });
        })
        .catch(err => console.log(err))
        .finally(() => { this.isLoading = false; });
    },
  },
};
</script>
