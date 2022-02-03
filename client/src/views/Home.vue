<template>
  <div>
    <v-col :class="tile.tileClass" :key="i" v-for="(tile, i) in tiles">
      <router-link
        :to="{
          name: tile.routeName,
        }"
      >
        <Tile
          :small="tile.small"
          :titleFa="tile.title_fa"
          :titleEn="tile.title_en"
          :icon="tile.icon"
          :tileHeight="tile.tileHeight"
          :desc="tile.desc"
          class="animate__animated animate__fadeIn"
        />
      </router-link>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    tiles() {
      return [
        {
          title_fa: "کلمه ها",
          title_en: "words",
          tileClass: "col col-12 Inline",
          tileHeight: "100px",
          icon: "ok",
          color: "red",
          routeName: "words",
        },
      ];
    },
  },
};
</script>
