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
        <SignInUpForm
          title="Connexion à votre compte"
          :on-submit="submitSignIn"
          :is-loading="isLoading"
          :is-sign-up="false"
        />
      </li>
      <li>
        <SignInUpForm
          title="Creation d'un compte"
          :on-submit="submitSignUp"
          :is-loading="isLoading"
          :is-sign-up="true"
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
import { sendNotification } from '@/helpers/uikit';
import SignInUpForm from './SignInUpForm';

export default {
  name: 'SignInUpContainer',
  components: {
    SignInUpForm,
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
        .catch(err => sendNotification(err.code, 'ban', 'danger'))
        .finally(() => { this.isLoading = false; });
    },
    submitSignUp(username, password, name) {
      this.isLoading = true;
      firebaseService.signUp(username, password)
        .then((result) => {
          const { user } = result;
          user.updateProfile({ displayName: name })
            .then(() => { UIkit.switcher('#signInUp').show(0); })
            .catch(() => sendNotification('Votre pseudo n\'a pas pu être enregistré', 'ban', 'danger'));
        })
        .catch(err => sendNotification(err.code, 'ban', 'danger'))
        .finally(() => { this.isLoading = false; });
    },
  },
};
</script>
