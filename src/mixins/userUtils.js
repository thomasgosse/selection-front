export default {
  methods: {
    buildUser(data) {
      return {
        mainImage: data.photoURL,
        name: data.displayName,
        id: data.uid,
      };
    },
  },
};
