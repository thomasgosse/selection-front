<template>
  <div>
    {{ token }}
  </div>
</template>

<script>
export default {
  name: 'AuthContainer',
  data() {
    return {
      token: '',
    };
  },
  mounted() {
    this.token = this.$route.hash.replace('#access_token=', '').split('&token_type=')[0];
  },
};
</script>
