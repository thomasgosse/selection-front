<template>
  <ul
    uk-accordion="multiple: true"
    class="uk-text-left"
  >
    <li
      v-for="season in seasons"
      :key="season.id"
    >
      <a
        class="uk-accordion-title"
      >{{ season.name }}</a>
      <div class="uk-accordion-content">
        <div uk-grid>
          <div class="uk-width-expand@m">
            <p
              v-if="season.overview"
              class="thin"
            >
              {{ season.overview }}
            </p>
            <p
              v-else
              class="thin"
            >
              Pas de résumé disponible
            </p>
            <span uk-icon="bookmark" />
            <span class="thin">
              {{ season.episodeCount }} épisodes
            </span>
          </div>
          <div class="uk-width-1-5@m">
            <v-lazy-image
              v-if="season.images"
              class="rounded-shape"
              :src="season.images[0].url"
            />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SeasonList',
  props: {
    seasons: {
      type: Array,
      required: true,
    },
  },
};
</script>
