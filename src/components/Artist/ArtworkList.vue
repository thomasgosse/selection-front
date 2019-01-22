<template>
  <div>
    <h2 class="uk-article-title">
      {{ title }}
    </h2>
    <div
      class="uk-flex-middle"
      uk-grid
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="uk-width-1-6@m"
      >
        <div
          class="uk-inline-clip uk-transition-toggle"
          tabindex="0"
        >
          <img
            :data-src="item.images[0].url"
            uk-img
          >
          <div
            class="uk-transition-fade uk-position-cover
                     uk-position-small uk-overlay uk-overlay-default
                     uk-flex uk-flex-center uk-flex-middle"
          >
            <p class="uk-h4 uk-margin-remove">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkList',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
