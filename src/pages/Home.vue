<script>
import Header from "../components/Header.vue";
import Welcome from "../components/Welcome.vue";
import Hosts from "../components/Hosts.vue";
import Latest from "../components/Latest.vue";
import Newsletter from "../components/Newsletter.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Welcome, Hosts, Latest, Newsletter, Footer },
};
</script>

<template>
  <Header />
  <div class="container mt-7">
    <!-- <Welcome /> -->
    <!-- <Hosts /> -->
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
