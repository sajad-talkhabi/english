<template>
  <v-dialog
    v-model="modal"
    :max-width="maxWidth"
    :width="width"
    :transition="transition"
  >
    <component
      :is="tag"
      @submit.prevent="$emit('submit')"
      :ref="tag == 'form' ? 'form' : null"
    >
      <v-card class="En__modal">
        <div class="En__modal-header h-100">
          <slot name="header" :modal="modal" :data="data" v-if="modal"></slot>
        </div>
        <v-card-text class="En__modal-content pb-0">
          <slot :modal="modal" :data="data" v-if="modal"></slot>
        </v-card-text>
        <template v-if="!notFooter">
          <v-divider class="mb-0"></v-divider>
        </template>
        <v-card-actions class="En__modal-footer px-0">
          <slot name="footer" :modal="modal" :data="data" v-if="modal"></slot>
        </v-card-actions>
      </v-card>
    </component>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    width: { default: null },
    maxWidth: { default: null },
    name: { default: null },
    transition: { default: "slide-x-transition" },
    notFooter: {
      default: false,
    },
    tag: {
      default: "div",
    },
  },
  data: () => ({
    isOpenModal: false,
  }),
  computed: {
    ...mapGetters("modal", ["isModal", "getModal"]),
    modal: {
      get() {
        const isOpen = this.isModal(this.modalName);
        this.emitModal(isOpen);
        return isOpen;
      },
      set(value) {
        if (!value) {
          this.$_closeModal();
        }
      },
    },
    modalName() {
      return this.name ? this.name : this.$parent.$options.name;
    },
    data() {
      return this.getModal(this.modalName);
    },
  },
  methods: {
    emitModal(isOpen) {
      if (this.isOpenModal && !isOpen) {
        this.isOpenModal = false;
        this.$emit("close");
      } else if (!this.isOpenModal && isOpen) {
        this.isOpenModal = true;
        this.$emit("open", this.data);
        this.$parent.modalData = this.data;
      }
    },
  },
  beforeDestroy() {
    this.emitModal(false);
  },
};
</script>
<style scoped>
.En__modal {
  padding: 15px 30px;
  border-radius: 10px;
}
.En__modal-header {
  position: relative;
  height: 40px;
}
</style>
