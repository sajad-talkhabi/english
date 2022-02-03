<template>
  <div class="WM-ImageTile">
    <v-card
      class="CoverBG WM-Block WM-Align-C Relative"
      :style="
        'background-image: linear-gradient(' +
        gradientDirection +
        ', #' +
        gradientBegin +
        ' , #' +
        gradientEnd +
        ');'
      "
      elevation="0"
      :height="tileHeight"
    >
      <div class="Content">
        <v-icon v-if="icon != ''" :color="iconColor">WMi-{{ icon }}</v-icon>
        <div class="Info">
          <div class="En">{{ titleEn }}</div>
          <div class="Fa">{{ titleFa }}</div>
          <div class="desc Fa Thin" v-if="desc != ''" v-html="desc"></div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    // Tile:TileData,
    tileHeight: { default: "230px" },
    // --------------------------------------------
    titleFa: { default: " عنوان بخش " },
    titleEn: { default: " Section Title " },
    desc: { default: "" },
    // --------------------------------------------
    gradientDirection: { default: "to left" },
    gradientBegin: { default: "eeeeee" },
    gradientEnd: { default: "dadada" },
    // --------------------------------------------
    icon: { default: "" },
    iconColor: { default: "black" },
  },
};
</script>

<style scoped lang="scss">
.WM-ImageTile {
  width: 100%;
  padding: 10px;
  transition: 0.5s;
  border: 1px solid transparent;
  position: relative;
}
.WM-ImageTile:hover {
  border: 1px solid #6d6d6d;
  border-radius: 5px;
}
.WM-ImageTile:hover .CoverBG {
  -webkit-filter: grayscale(100%);
}
.WM-ImageTile:hover .CoverBG  .Info .desc {
  max-height: none;
}
.WM-ImageTile.Shadowed {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.we-dark .WM-ImageTile.Shadowed {
  box-shadow: none;
}

.WM-ImageTile .WM-Block {
  border-radius: 5px;
}

.WM-ImageTile.Padd10 {
  padding: 10px;
}
.WM-ImageTile.Padd20 {
  padding: 20px;
}
.Content {
  padding-top: 10px;
}
.Content .v-icon {
  font-size: 50px;
}
.Inline .Content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  height: 100%;
}
.Inline .Content .Info {
  text-align: left;
}
.WM-ImageTile .Info .En:not(.desc) {
  font-size: 26px;
  color: #000;
}
.WM-ImageTile .Info .Fa {
  font-size: 14px;
  color: #000;
  letter-spacing: 5px;
  text-transform: uppercase;
}
.WM-ImageTile .Info .desc {
  display: block;
  font-size: 14px;
  direction: rtl;
  color: #000;
  overflow: hidden;
  clear: both;
  max-height: 0px;
  transition: max-height 0.4s cubic-bezier(1, 0, 0.2, 1);
}

.RTL.WM-ImageTile img {
  margin-left: 30px;
}
</style>
