<script>
export default {
  name: "Player",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://preview.codeless.co/livecast/default/wp-content/uploads/2021/03/das-min-150x150.jpg"
          class="img-fluid rounded-start"
          alt="podcast thumbnail"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="card-title fw-bold text-dark">Lorem ipsum, E1 T2</div>
          <div class="card-text">
            <audio controls class="player">
              <source src="../assets/podcast.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <p class="card-text">
            <small class="text-muted">Last episode 3 hours ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: absolute;
  width: 50vw;
  left: 25vw;
  top: 80vh;
}
</style>
