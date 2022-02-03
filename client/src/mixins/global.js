// import { mapActions } from "vuex";
// // import $_color from "@Global/utils/module-color";
// import backHome from "./backHome";

// import Vue from 'vue';

// const modal = {
//     ...mapActions("modal", [
//         "__openModal",
//         "$_closeModal"
//     ]),
//     $_openModal(name, data = {}) {
//         this.__openModal({ ...data, ...{ name } })
//     },
// };

// Vue.mixin({
//     methods: { ...modal, ...backHome }
// });
import { $_closeModal, $_openModal } from './modal';
export default {
    methods: {
        $_openModal,
        $_closeModal,
    },
}

