<template>
  <table class="uk-table uk-table-small uk-table-divider">
    <thead>
      <tr>
        <th>
          <h2 class="black uk-margin-remove-bottom">
            Titres
          </h2>
        </th>
        <th class="uk-text-right">
          <span uk-icon="icon: clock; ratio: 1.3" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="track in tracks"
        :key="track.name"
      >
        <td>
          <span class="thin-italic">{{ track.trackNumber }}.</span>
          {{ track.name }}
        </td>
        <td class="uk-text-right">
          {{ track.durationMs | timeInMinutes }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TrackList',
  filters: {
    timeInMinutes(timeMs) {
      return (timeMs / 60000).toFixed(2);
    },
  },
  props: {
    tracks: {
      type: Array,
      required: true,
    },
  },
};
</script>
