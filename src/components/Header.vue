<script>
import Services from "./Services.vue";
import Player from "./Player.vue";

export default {
  name: "Header",
  components: { Services, Player },
};
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="text-header">
        <h1 class="text-uppercase">
          Best podcasts <br />
          for curious minds.
        </h1>
        <p class="text-small fw-600">
          Ensuring the best ensure on investetment for your bespoke SEO campaing
          and Grow yoru podscast audience with your audience favorite platforms.
        </p>
      </div>
      <Services />
    </div>
    <Player />
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 95vh;
  background: url("https://preview.codeless.co/livecast/default/wp-content/uploads/2021/04/bg-5.png")
    center center fixed;
  background-size: cover;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: white;

  .text-header {
    padding-top: 6.5vh;
    max-width: 50vw;
    h1 {
      font-size: 3.6rem;
      font-weight: bolder;
    }
  }
}
</style>
