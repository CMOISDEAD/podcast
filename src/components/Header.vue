<script>
import Services from "./Services.vue";
import Player from "./Player.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "Header",
  components: { Services, Player, Navbar },
};
</script>

<template>
  <Navbar :main="true" />
  <div class="header">
    <div class="container">
      <div class="text-header">
        <h1 class="text-uppercase text-nowrap">
          <span class="enfasis">Mejor</span> podcast <br />
          para <span class="underline">mentes curiosas</span>
        </h1>
        <p class="text-small fw-600">
          Un espacio donde podrás conocer y disfrutar sin el menor esfuerzo;
          Láudano te proporcionará múltiples opciones donde podrás aprender
          distintos temas, quédate y echa un vistazo.
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

  .enfasis {
    background: -webkit-linear-gradient(#33b1ff, #08bdba);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .underline {
    text-decoration: underline #33b1ff wavy;
  }

  .text-header {
    max-width: 50vw;
    h1 {
      font-size: 3.6rem;
      font-weight: bolder;
    }
  }
}
</style>
