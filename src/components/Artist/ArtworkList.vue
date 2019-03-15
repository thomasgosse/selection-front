<template>
  <div>
    <h2 class="thin-italic">
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
                   uk-position-small uk-overlay uk-overlay-default"
          >
            <div class="uk-text-center">
              <p class="thin-italic uk-h4">
                {{ item.name }}
              </p>
              <a
                class="uk-transition-fade uk-icon-link"
                uk-icon="icon: plus; ratio: 2"
                @click="handleClick(item)"
              />
            </div>
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
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
