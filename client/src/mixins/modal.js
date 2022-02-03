function $_openModal(name, data = {}) {
    this.$store.dispatch('modal/__openModal', { ...data, ...{ name } });
    // this.$store.dispatch('modal/$_closeModal');
    // const modal = {
    //     ...mapActions("modal", [
    //         "__openModal",
    //         "$_closeModal"
    //     ]),
    //     $_openModal(name, data = {}) {
    //         this.__openModal({ ...data, ...{ name } })
    //     },
    // };
}
function $_closeModal() {
    this.$store.dispatch('modal/$_closeModal');
}
export {
    $_openModal,
    $_closeModal
}