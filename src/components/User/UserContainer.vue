<template>
  <User
    :items="userArtworks"
  />
</template>

<script>
import User from '@/components/User/User';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UserContainer',
  components: {
    User,
  },
  computed: {
    ...mapState(['userArtworks']),
  },
  beforeMount() {
    this.getUserArtworksByType({ userId: '1', type: 'album' });
  },
  methods: {
    ...mapActions(['getUserArtworksByType']),
  },
};
</script>
