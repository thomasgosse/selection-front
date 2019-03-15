export default {
  methods: {
    buildArtwork(artwork) {
      return {
        name: artwork.name,
        releaseDate: artwork.release_date,
        type: artwork.type,
        id: artwork.id,
        artists: this.buildArtist(artwork.artists),
        images: artwork.images,
      };
    },
    buildArtist(artists) {
      return artists.map(artist => ({
        name: artist.name,
        id: artist.id,
      }));
    },
  },
};
