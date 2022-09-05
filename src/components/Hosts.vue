<script>
import Card from "./Card.vue";

export default {
  name: "Hosts",
  components: { Card },
  data() {
    return {
      hosts: [
        {
          picture:
            "https://preview.codeless.co/livecast/default/wp-content/uploads/2021/03/dps1.jpg",
          name: "Maria Angeles",
          position: "Leader",
          description:
            "t’s our job to get you the information you need,\
              so you can make the most of your aviation investments.",
          socials: ["twitter", "facebook", "instragram"],
        },
        {
          picture:
            "https://preview.codeless.co/livecast/default/wp-content/uploads/2021/03/dps1.jpg",
          name: "Jonh Doe",
          position: "Leader",
          description:
            "t’s our job to get you the information you need,\
              so you can make the most of your aviation investments.",
          socials: ["twitter", "facebook", "instragram"],
        },
        {
          picture:
            "https://preview.codeless.co/livecast/default/wp-content/uploads/2021/03/dps1.jpg",
          name: "Mike Doe",
          position: "Leader",
          description:
            "t’s our job to get you the information you need,\
              so you can make the most of your aviation investments.",
          socials: ["twitter", "facebook", "instragram"],
        },
      ],
    };
  },
};
</script>

<template>
  <h3 class="text-capitalize">Meet The Hosts</h3>
  <p class="text-muted">Look all <i class="bi bi-arrow-right"></i></p>
  <div class="host-group row row-cols-1 row-cols-md-3 g-4 mb-3">
    <div v-for="(item, index) in hosts" :key="index">
      <Card
        :picture="item.picture"
        :name="item.name"
        :position="item.position"
        :description="item.description"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
