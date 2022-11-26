<script>
import Navbar from "../components/Navbar.vue";
import VuePdfEmbed from "vue-pdf-embed";

export default {
  name: "Portales",
  components: { Navbar, VuePdfEmbed },
  data() {
    return {
      source: "../../public/portales.pdf",
    };
  },
};
</script>

<template>
  <Navbar :main="false" />
  <div class="mt-2">
    <h1 class="text-center">Portales Universitarios</h1>
    <div class="p-4">
      ¿Conoces los portales universitarios? Te invito a que ingreses a esta
      breve explicación que expenderá tus conocimientos. Descubre su
      significado, sus características y los diferentes tipos de portales
      universitarios que hay.
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
