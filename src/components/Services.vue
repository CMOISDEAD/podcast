<script>
export default {
  name: "Services",
};
</script>

<template>
  <div class="button-group">
    <div class="btn btn-dark mx-2 btn-services">
      <router-link to="/desarrollo" class="box text-white">
        <div class="text">
          <p>
            Observar<br />
            <span class="fw-bold">Infografia</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="btn btn-dark mx-2 btn-services">
      <router-link to="/portales" class="box text-white">
        <div class="text">
          <p>
            Observar <br />
            <span class="fw-bold">Exposición</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="btn btn-dark mx-2 btn-services">
      <router-link to="/fotoreportaje" class="box text-white">
        <div class="text">
          <p>
            Observar<br />
            <span class="fw-bold">Foto reportaje</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-group {
  .btn-services {
    background: #161616af !important;
    width: 15vw;
    height: 10vh;
    transition: all 0.5s ease-out;

    .box {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      margin-bottom: 3vh;
    }

    .logo {
      font-size: 2.5rem !important;
    }

    &:hover {
      background: #161616 !important;
    }
  }
}
</style>
