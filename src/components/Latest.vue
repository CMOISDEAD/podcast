<script>
export default {
  name: "Latest",
};
</script>

<template>
  <h3 class="text-capitalize">Latest Post</h3>
  <p class="text-muted">Browse all <i class="bi bi-arrow-right"></i></p>
  <div class="podcasts">
    <div class="latest p-5 rounded my-3">
      <div class="fs-3">Finding Moments Of Joy In A Challenging Year</div>
      <div class="tags text-cyan">Social</div>
      <p>3 hours ago</p>
    </div>
    <div class="latest p-5 rounded my-3">
      <div class="fs-3">Even Deluded Demagogues Renounced</div>
      <div class="tags text-cyan">Tech</div>
      <p>1 day ago</p>
    </div>
    <div class="latest p-5 rounded my-3">
      <div class="fs-3">Greenland Unicorns and the Magical Alicorn</div>
      <div class="tags text-cyan">Bussines</div>
      <p>1 week ago</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.podcasts {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;

  .latest {
    color: #fff;
    background: #2193b0;
    background: url("https://preview.codeless.co/livecast/default/wp-content/uploads/2021/04/bg-5.png")
        center center,
      -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
    background: url("https://preview.codeless.co/livecast/default/wp-content/uploads/2021/04/bg-5.png")
        center center,
      linear-gradient(to right, #6dd5ed, #2193b0);
    background-size: cover;
    .text-cyan {
      color: #8a3ffc;
    }
  }
}
</style>
