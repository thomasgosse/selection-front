<template>
  <div uk-spinner/>
</template>

<script>
export default {
  name: 'Callback',
  mounted() {
    const token = this.$route.hash.replace('#access_token=', '').split('&token_type=')[0];
    localStorage.setItem('token', token);
    this.$store.commit('login');
    this.$store.commit('token', token);
    this.$router.push({ path: '/' });
  },
};
</script>
