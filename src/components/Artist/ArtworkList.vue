<template>
  <div>
    <h2 class="thin-italic">
      {{ title }}
    </h2>
    <div
      class="uk-flex-middle"
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: > .artwork; delay: 100; repeat: false"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="uk-width-1-6@m artwork"
      >
        <div
          id="wrapper"
          class="uk-inline-clip uk-transition-toggle"
          tabindex="0"
        >
          <img
            :data-src="item.images[0].url"
            uk-img="target: !.wrapper"
          >
          <div
            class="uk-transition-fade uk-position-cover
                   uk-position-small uk-overlay uk-overlay-default"
          >
            <div class="uk-text-center">
              <p
                class="thin-italic"
                :uk-tooltip="item.name"
              >
                {{ item.name | shortenName }}
              </p>
              <a
                class="uk-transition-fade uk-icon-link"
                :uk-icon="`icon: ${icon}; ratio: 2`"
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
  filters: {
    shortenName(name) {
      return (name.length > 40) ? `${name.substring(0, 40)}...` : name;
    },
  },
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
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
