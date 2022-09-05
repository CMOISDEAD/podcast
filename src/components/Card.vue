<script>
export default {
  name: "Card",
  props: {
    picture: String,
    name: String,
    position: String,
    description: String,
  },
};
</script>

<template>
  <div class="col">
    <div class="card">
      <img
        :src="picture"
        class="rounded-circle mx-auto d-block picture"
        style="width: 15vw"
      />
      <div class="card-body">
        <div class="text-center">
          <h5 class="card-title">{{ name }}</h5>
          <p class="text-muted">{{ position }}</p>
        </div>
        <p class="card-text fw-light">
          {{ description }}
        </p>
        <div class="social-links text-center text-muted">
          <a href="#">
            <i class="bi bi-twitter px-2"></i>
          </a>
          <a href="#">
            <i class="bi bi-facebook px-2"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram px-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;

  .picture {
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(to right, #33b1ff, #08bdba) border-box;
    border: 1px solid transparent;
  }

  .social-links {
    font-size: 1.3rem;
    a {
      & :hover {
        color: cyan;
      }
    }
  }
}
</style>
