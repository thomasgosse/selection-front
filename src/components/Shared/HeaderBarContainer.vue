<template>
  <HeaderBar
    :on-logout="logout"
    :is-authorized="isAuthorized"
    :profile-image="userImage"
  />
</template>

<script>
import HeaderBar from '@/components/Shared/HeaderBar';
import { mapGetters } from 'vuex';
import firebaseService from '@/services/firebase';
import { sendNotification } from '@/helpers/uikit';

export default {
  name: 'HeaderBarContainer',
  components: {
    HeaderBar,
  },
  props: {
    isAuthorized: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['userImage']),
  },
  methods: {
    logout() {
      firebaseService.signOut()
        .then(() => {
          this.$store.commit('LOGOUT');
          this.$store.commit('REMOVE_TOKEN');
          localStorage.removeItem('token');
          this.$router.push({ path: '/' });
        })
        .catch(() => sendNotification('La deconnexion a échouée', 'ban', 'danger'));
    },
  },
};
</script>
