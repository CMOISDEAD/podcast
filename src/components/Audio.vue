<script>
export default {
  name: "Audio",

  data() {
    return {
      paused: true,
      duration: "8:30",
    };
  },
  methods: {
    handleToggle() {
      let audio = this.$refs.audio;
      console.log(this.duration);
      if (audio.paused) {
        this.paused = false;
        audio.play();
      } else {
        this.paused = true;
        audio.pause();
      }
    },
  },
};
</script>

<template>
  <div class="player">
    <div class="toggle px-2" @click="handleToggle()">
      <i class="bi bi-play-fill control play-button" v-if="paused"></i>
      <i class="bi bi-pause-fill control pause-button" v-if="!paused"></i>
    </div>
    <i class="bi bi-fast-forward-fill control px-2"></i>
    <i class="bi bi-volume-mute-fill control px-2"></i>
    <small class="text-muted px-2">{{ duration }} minutes</small>
  </div>
  <audio id="audio" ref="audio">
    <source src="/podcast.mp3" type="audio/mpeg" />
  </audio>
</template>

<style lang="scss" scoped>
.player {
  color: #161616;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;

  .control {
    font-size: 2rem;
    transition: all 0.5s ease-in-out;
    color: #161616af;

    &:hover {
      color: #161616;
    }
  }

  small {
    margin-top: 1.9vh;
  }
}
</style>
