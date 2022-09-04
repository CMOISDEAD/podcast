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
          <div class="px-5">
            <div class="card-title fw-bold">Lorem ipsum, E1 T2</div>
            <audio controls class="player">
              <source src="../assets/podcast.mp3" type="audio/mpeg" />
            </audio>
            <p class="card-text">
              <small class="text-muted">Last update 3 min ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: absolute;
  color: black;
  width: 50vw;
  left: 25vw;
  top: 80vh;
  border: none;
}
</style>
