<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark nav-absolute">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Podcast</router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/shows" class="nav-link">Shows</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.nav-absolute {
  position: absolute !important;
  background-color: #ffffff00 !important;
}
</style>
