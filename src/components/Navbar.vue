<template>
  <div
    :class="[
      'navbar navbar-dark navbar-expand-lg bg-dark',
      { 'nav-absolute': main },
    ]"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Laudano</router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/shows" class="nav-link">Shows</router-link>
          <router-link to="/about" class="nav-link">Acerca</router-link>
          <router-link to="/contact" class="nav-link">Contacto</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Fotoreportaje", props: ["main"] };
</script>

<style lang="scss" scoped>
.nav-absolute {
  position: absolute !important;
  background-color: #ffffff00 !important;
}
</style>
