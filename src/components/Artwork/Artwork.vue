<template>
  <div
    class="uk-inline-clip uk-transition-toggle"
    tabindex="0"
  >
    <v-lazy-image
      :style="{ width: `${width}px` }"
      :src="item.images[0].url"
      :src-placeholder="item.images[2].url"
    />
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
</template>

<script>
import { MAX_NAME_LENGTH } from '@/helpers/constants';

export default {
  name: 'Artwork',
  filters: {
    shortenName(name) {
      return (name.length > MAX_NAME_LENGTH) ? `${name.substring(0, MAX_NAME_LENGTH)}...` : name;
    },
  },
  props: {
    item: {
      type: Object,
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
    width: {
      type: String,
      default: '300',
    },
  },
};
</script>


<style scoped>
.v-lazy-image {
  filter: blur(50px);
  transform: scale(1);
  transition: filter 0.5s;
  will-change: filter;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
