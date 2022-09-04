<script>
export default {
  name: "Services",
};
</script>

<template>
  <div class="button-group">
    <div class="btn btn-dark mx-2 btn-services">
      <div class="box">
        <div class="logo">
          <i class="bi bi-spotify"></i>
        </div>
        <div class="text">
          <p>
            Listen on <br />
            <span class="fw-bold">Spotify</span>
          </p>
        </div>
      </div>
    </div>
    <div class="btn btn-dark mx-2 btn-services">
      <div class="box">
        <div class="logo">
          <i class="bi bi-apple"></i>
        </div>
        <div class="text">
          <p>
            Listen on <br />
            <span class="fw-bold">Apple Music</span>
          </p>
        </div>
      </div>
    </div>
    <div class="btn btn-dark mx-2 btn-services">
      <div class="box">
        <div class="logo">
          <i class="bi bi-google"></i>
        </div>
        <div class="text">
          <p>
            Listen on <br />
            <span class="fw-bold">Podcast</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-group {
  .btn-services {
    background: #161616af !important;
    width: 15vw;
    height: 10vh;
    .box {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-content: center;
    }
    .bi {
      font-size: 1.8rem !important;
    }
  }
}
</style>
