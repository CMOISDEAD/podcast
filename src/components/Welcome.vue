<script>
export default {
  name: "Welcome",
};
</script>

<template>
  <div class="welcome">
    <div class="right">
      <h3 class="text-capitalize">Welcome to podcast for curious minds</h3>
      <p class="text-muted">Know more <i class="bi bi-arrow-right"></i></p>
      <p>
        Our pick of the best podcasts on Spotify, Apple Podcasts and more
        covering technology, culture, science, politics and new ideas
      </p>
      <div class="text-muted mb-5">
        Podcasts are now big business. In this post-Serial audio world,
        journalists, celebrities, academics and yes, anyone else who owns a
        mixing desk and a microphone, now has a regular show.
      </div>
      <div class="btn btn-dark text-uppercase w-100 mt-5">Get In touch</div>
    </div>
    <div class="left">
      <img
        src="https://preview.codeless.co/livecast/default/wp-content/uploads/2021/04/pod22-min.png"
        alt="welcome"
        style="width: 48vw"
      />
    </div>
  </div>
</template>

<style lang="scss">
.welcome {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  margin-bottom: -15vh;
}
</style>
