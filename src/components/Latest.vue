<script>
export default {
  name: "Latest",
};
</script>

<template>
  <h3 class="text-capitalize">Últimos Entradas</h3>
  <p class="text-muted">Ver todas <i class="bi bi-arrow-right"></i></p>
  <div class="podcasts">
    <router-link to="/fotoreportaje" class="latest p-5 rounded my-3">
      <div class="fs-3">Foto reportaje, Espacios Públicos</div>
      <div class="tags text-white-50">Social</div>
      <p>Hace 3 días</p>
    </router-link>
    <router-link to="/desarrollo" class="latest p-5 rounded my-3">
      <div class="fs-3">Desarrollo de la comunicación humana</div>
      <div class="tags text-white-50">Social</div>
      <p>Hace 1 semana</p>
    </router-link>
    <router-link to="/portales" class="latest p-5 rounded my-3">
      <div class="fs-3">Portales universitarios</div>
      <div class="tags text-white-50">Social</div>
      <p>Hace 1 semana</p>
    </router-link>
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
