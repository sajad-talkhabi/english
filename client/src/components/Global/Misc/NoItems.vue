<template>
  <div class="we-no-result">
    <img class="Thumbnail" :src="src" />
    <div class="En">{{ textEn }}</div>
    <router-link v-if="hasBtn" :to="{ name: routeName }" class="flex lg6 xs12">
      <v-btn
        class="ma-2"
        outlined
        @click.native="emitClickEvent"
      >
        <v-icon left>WMi-{{ btnIcon }}</v-icon> {{ btnText }}
      </v-btn>
    </router-link>

    <!-- <div class="En">{{ textEn }}</div> -->
  </div>
</template>

<script>
import NoItem from "@/assets/no_item.gif";

export default {
  props: {
    src: { default: NoItem },
    textEn: { default: " NO ITEMS AVAILABLE " },
    themeColor: { default: "black" },
    btnText: { default: "add first item" },
    btnIcon: { default: "cancel" },
    modal: { default: null },
    routeName: { default: null },
    hasBtn: { default: true },
  },
  methods: {
    emitClickEvent(e) {
      this.modal ? this.$_openModal(this.modal) : null;
      this.$emit("button-clicked", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.we-no-result {
  text-align: center;
  padding: 10px;
  width: 100%;
}
.we-no-result img {
  width: 300px;
  height: 300px;
  border-radius: 150px;
}
.we-no-result .En {
  direction: ltr;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
}
</style>
