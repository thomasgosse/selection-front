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
        TODO
      </li>
    </ul>
  </div>
</template>

<script>
import firebaseService from '@/services/firebase';
import { hideOffCanvas } from '@/helpers/uikit';
import userUtils from '@/mixins/userUtils';
import SignInForm from './SignInForm';

export default {
  name: 'SignInUp',
  components: {
    SignInForm,
  },
  mixins: [userUtils],
  methods: {
    submitSignIn(username, password) {
      firebaseService.signIn(username, password)
        .then(({ user }) => {
          const builtUser = this.buildUser(user);
          this.$store.commit('SET_USER', builtUser);
          localStorage.setItem('token', user.ra);
          this.$store.commit('SET_TOKEN', user.ra);
          this.$store.commit('LOGIN');
          this.$router.push({ path: '/user' });
        })
        .catch(() => {
          hideOffCanvas();
          this.$store.commit('LOGOUT');
        });
    },
  },
};
</script>
