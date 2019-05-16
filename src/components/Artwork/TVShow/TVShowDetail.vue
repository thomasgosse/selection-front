<template>
  <div
    v-if="isDetailEmpty"
    class="uk-container uk-container-large uk-margin"
  >
    <h1>
      <span class="black">
        {{ detail.name }}
      </span>
      <span
        v-if="detail.releaseDate"
        class="thin-italic"
      >
        ({{ detail.releaseDate.split('-')[0] }})
      </span>
    </h1>
    <div
      class="uk-margin-top"
      uk-grid
    >
      <div class="uk-width-1-3@m">
        <Artwork
          :item="detail"
          :handle-click="handleClick"
          icon="plus"
          font-size="1.5"
          image-width="500"
        />
      </div>
      <div class="uk-width-2-3@m">
        <article class="uk-article">
          <h2 class="black uk-margin-remove">
            Synopsis
          </h2>
          <h3 class="thin uk-margin-remove">
            {{ detail.overview }}
          </h3>
        </article>
        <h2 class="black">
          Saisons
        </h2>
        <SeasonList
          :seasons="detail.seasons"
        />
      </div>
    </div>
  </div>
  <NoInformation v-else />
</template>

<script>
import Artwork from '@/components/Artwork/Artwork';
import NoInformation from '@/components/Shared/NoInformation';
import SeasonList from './SeasonList';

export default {
  name: 'TVShowDetail',
  components: {
    SeasonList,
    Artwork,
    NoInformation,
  },
  props: {
    detail: {
      type: Object,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    isDetailEmpty() {
      return this.detail.seasons.length > 0 && this.detail.overview;
    },
  },
};
</script>
