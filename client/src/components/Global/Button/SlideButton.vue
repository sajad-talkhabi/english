<template>
  <button
    :disabled="disabled || loading"
    @click="$emit('click')"
    :type="type"
    :class="`slide-button ${theme}`"
  >
    <template>
      <div class="overlay"></div>
      <div v-if="prepend_icon != ''" class="prepend-icon">
        <v-icon v-if="!loading">WMi-{{ prepend_icon }}</v-icon>
        <div
          v-else
          class="v-progress-circular v-progress-circular--indeterminate"
          style="height: 30px; width: 30px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
            style="transform: rotate(0deg)"
          >
            <circle
              fill="transparent"
              color="#fff"
              cx="43.80952380952381"
              cy="43.80952380952381"
              r="20"
              stroke-width="3.8095238095238093"
              stroke-dasharray="125.664"
              stroke-dashoffset="125.66370614359172px"
              class="v-progress-circular__overlay"
            ></circle>
          </svg>
        </div>
      </div>
      <div class="name">
        <div class="En" v-if="title_en">{{ title_en }}</div>
        <div class="Fa">{{ title_fa }}</div>
      </div>
      <div v-if="append_icon" class="append-icon">
        <v-icon v-if="!loading">WMi-{{ append_icon }}</v-icon>
        <div
          v-else
          class="v-progress-circular v-progress-circular--indeterminate"
          style="height: 30px; width: 30px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
            style="transform: rotate(0deg)"
          >
            <circle
              fill="transparent"
              color="#fff"
              cx="43.80952380952381"
              cy="43.80952380952381"
              r="20"
              stroke-width="3.8095238095238093"
              stroke-dasharray="125.664"
              stroke-dashoffset="125.66370614359172px"
              class="v-progress-circular__overlay"
            ></circle>
          </svg>
        </div>
      </div>
    </template>
  </button>
</template>
<script>
export default {
  props: {
    theme: { default: "theme-black" },
    prepend_icon: { default: "" },
    append_icon: String,
    title_fa: { default: "عنوان دکمه" },
    title_en: String,
    disabled: { default: false },
    loading: { default: false },
    type: { default: "button" },
  },
};
</script>
<style lang="scss" scoped>
.slide-button {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 5px 65px 5px 45px;
  min-width: 200px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: all 1000ms;
  transition: all 1000ms;
  color: #383838;
  text-align: right;
  border-radius: 5px;
}
.slide-button .prepend-icon {
  position: absolute;
  right: 15px;
}
.slide-button .append-icon {
  margin-right: 30px;
}
.slide-button .append-icon .v-icon,
.slide-button .prepend-icon .v-icon {
  font-size: 32px;
  color: var(--color-white);
  transition: color 0.3s;
}
.slide-button .name {
  color: var(--color-white);
  transition: color 0.3s;
}
.slide-button .name .En {
  font-size: 18px;
}
.slide-button .name .Fa {
  direction: ltr;
  font-size: 12px;
  letter-spacing: 3px;
  opacity: 0.8;
  text-transform: uppercase;
  margin-right: -3px;
  margin-top: -3px;
}
.slide-button:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-black);
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition: 300ms cubic-bezier(1, 0, 0, 1);
  transition: 300ms cubic-bezier(1, 0, 0, 1);
  border-radius: 5px;
}

/*----------------------------------------------------*/
/*                      SM Size                       */
/*----------------------------------------------------*/
.slide-button.sm .name .Fa {
  font-size: 14px;
  line-height: 18px;
  margin-top: 3px;
}
.slide-button.sm .append-icon .v-icon,
.slide-button.sm .prepend-icon .v-icon {
  font-size: 16px;
}

/*----------------------------------------------------*/
/*                      Colors                        */
/*----------------------------------------------------*/
@import "@Styles/setup/variables";
@each $color, $value in $colors {
  .slide-button.theme-#{"" + $color} {
    background-color: $value;
  }
}
@each $shadow, $value in $Shadows {
  .slide-button.theme-#{"" + $shadow} {
    -webkit-box-shadow: 0 10px 30px 0px $value;
  }
}

/*----------------------------------------------------*/
/*                      Misc                   */
/*----------------------------------------------------*/
.slide-button.name-mr-2 .name {
  margin-right: 10px;
}

/*----------------------------------------------------*/
/*                      Hover State                   */
/*----------------------------------------------------*/
.slide-button:hover {
  -webkit-box-shadow: 0 10px 30px 0px rgba(255, 255, 255, 0.2) !important;
}
.slide-button:hover:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.slide-button:hover .name {
  color: var(--color-white);
}
.slide-button:hover .append-icon .v-icon,
.slide-button:hover .prepend-icon .v-icon {
  color: var(--color-white);
}

.slide-button.flat {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>