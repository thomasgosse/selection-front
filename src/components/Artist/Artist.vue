<template>
  <!-- to refactor -->
  <div
    class="uk-container uk-container-large uk-padding"
  >
    <article
      class="uk-article"
    >
      <h1 class="uk-article-title">
        {{ name }}
      </h1>
      <h2 class="uk-article-title">
        Albums
      </h2>
      <div
        class="uk-flex-middle"
        uk-grid
      >
        <div
          v-for="album in albums"
          :key="album.id"
          class="uk-width-1-6@m"
        >
          <div
            class="uk-inline-clip uk-transition-toggle"
            tabindex="0"
          >
            <img
              :data-src="album.images[0].url"
              uk-img
            >
            <div
              class="uk-transition-fade uk-position-cover
                     uk-position-small uk-overlay uk-overlay-default
                     uk-flex uk-flex-center uk-flex-middle"
            >
              <p class="uk-h4 uk-margin-remove">
                {{ album.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="uk-article-title">
        Singles & EPs
      </h2>
      <div
        class="uk-flex-middle"
        uk-grid
      >
        <div
          v-for="single in singles"
          :key="single.id"
          class="uk-width-1-6@m"
        >
          <div
            class="uk-inline-clip uk-transition-toggle"
            tabindex="0"
          >
            <img
              :data-src="single.images[0].url"
              uk-img
            >
            <div
              class="uk-transition-fade uk-position-cover
                     uk-position-small uk-overlay uk-overlay-default
                     uk-flex uk-flex-center uk-flex-middle"
            >
              <p class="uk-h4 uk-margin-remove">
                {{ single.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    name: {
      type: String,
      required: true,
    },
    albums: {
      type: Array,
      required: true,
    },
    singles: {
      type: Array,
      required: true,
    },
  },
};
</script>
