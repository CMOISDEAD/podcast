<script>
import Navbar from "../components/Navbar.vue";
import VuePdfEmbed from "vue-pdf-embed";

export default {
  name: "Fotoreportaje",
  components: { Navbar, VuePdfEmbed },
  data() {
    return {
      source: "../../public/fotoreportaje.pdf",
    };
  },
};
</script>

<template>
  <Navbar :main="false" />
  <div class="mt-2">
    <h1 class="text-center">Foto Reportaje</h1>
    <div class="p-4">
      Te has fijado alguna vez en tu espacio público y los múltiples momentos
      que este te genera, en este foto reportaje conocerás lugares inesperados
      en una pequeña ciudad como lo es Armenia, donde abrirás tus ojos a
      diferentes perspectivas de los lugares que te rodean.
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="mb-2"
            style="overflow: scroll; max-height: 90vh; overflow-x: hidden"
          >
            <vue-pdf-embed :source="source" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
