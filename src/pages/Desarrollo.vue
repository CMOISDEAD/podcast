<script>
import Navbar from "../components/Navbar.vue";
import VuePdfEmbed from "vue-pdf-embed";

export default {
  name: "Desarrollo",
  components: { Navbar, VuePdfEmbed },
  data() {
    return {
      source: "../../public/desarrollo.pdf",
    };
  },
};
</script>

<template>
  <Navbar :main="false" />
  <div class="mt-2">
    <h1 class="text-center">Desarrollo de la comunicación humana</h1>
    <div class="p-4">
      Listos para conocer más sobre el desarrollo de la comunicación humana y
      los diferentes medios de comunicación a los que ha recurrido, no te
      pierdas de esta breve explicación reducida en una infografía que dejará
      clara todas las dudas que tengas.
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
