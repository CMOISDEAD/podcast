<script>
import Audio from "./Audio.vue";

export default {
  name: "Player",
  components: {
    Audio,
  },
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
          style="height: 25vh;"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="card-title fw-bold text-dark">
            <span class="text-cyan fw-normal">Season 2, Episode 3</span><br />
            Finding Moments Of Joy In A Challenging Year
          </div>
          <div class="card-text">
            <Audio />
          </div>
          <p class="card-text">
            <small class="text-muted footer">
              Uploaded 3 hours ago
              <span>
                <router-link to="/" class="link">
                  Go there!
                  <i class="bi bi-arrow-right px-2"></i>
                </router-link>
              </span>
            </small>
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
  border: none;

  .text-cyan {
    color: #1192e8;
  }

  .footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    .link {
      transition: all 0.5s ease-out;
    }
  }
}
</style>
