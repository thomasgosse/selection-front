<template>
  <div>
    <div
      class="uk-flex-center uk-text-center uk-margin-top"
      uk-grid
    >
      <div class="uk-width-1-3@m">
        <img :src="getImageByName(image)">
      </div>
    </div>
    <div
      class="uk-flex-center uk-text-center"
      uk-grid
    >
      <div class="uk-width-2-3@m">
        <h2 class="black">
          {{ topLabel }} {{ name }}
        </h2>
        <h3 class="thin-italic uk-margin-remove-top">
          {{ bottomLabel }}
        </h3>
        <button
          class="uk-button uk-button-default"
          @click="openOffCanvas()"
        >
          <span uk-icon="icon: search; ratio: 1.4" />
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { toggleOffCanvas } from '@/helpers/uikit';

const desert = require('@/assets/desert.svg');
const tumbleweed = require('@/assets/tumbleweed.svg');

export default {
  name: 'NoInformation',
  props: {
    topLabel: {
      type: String,
      default: '',
    },
    bottomLabel: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: 'desert',
    },
  },
  methods: {
    openOffCanvas() {
      toggleOffCanvas();
    },
    getImageByName(name) {
      const image = [
        { name: 'desert', path: desert },
        { name: 'tumbleweed', path: tumbleweed },
      ].find(element => element.name === name);
      return image ? image.path : '';
    },
  },
};
</script>
