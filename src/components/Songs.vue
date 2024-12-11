<script>
import Panel from "@/components/Panel.vue";
import SongsService from "../services/SongsService"
export default {
  name: "Songs",
  components: {
    Panel,
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted(){
    let songs = await SongsService.index()
    this.songs = songs.data.data
  }
};
</script>

<template>
  <panel :title="'Songs'">
    <div v-for="song in songs" :key="song.id">
      {{ song.title }}
    </div>
  </panel>
</template>
