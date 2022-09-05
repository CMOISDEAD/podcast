<script>
import Header from "./Header.vue";
import Welcome from "./Welcome.vue";
import Hosts from "./Hosts.vue";
import Latest from "./Latest.vue";
import Newsletter from "./Newsletter.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: { Header, Welcome, Hosts, Latest, Newsletter, Footer },
};
</script>

<template>
  <Header />
  <div class="container mt-7">
    <Welcome />
    <Hosts />
    <Latest />
    <Newsletter />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.mt-7 {
  margin-top: 17vh;
}
</style>
