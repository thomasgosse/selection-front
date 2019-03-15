<template>
  <div uk-spinner />
</template>

<script>
export default {
  name: 'Callback',
  mounted() {
    const token = this.$route.hash.replace('#access_token=', '').split('&token_type=')[0];
    localStorage.setItem('token', token);
    this.$store.commit('LOGIN');
    this.$store.commit('SET_TOKEN', token);
    this.$router.push({ path: '/user' });
  },
};
</script>
