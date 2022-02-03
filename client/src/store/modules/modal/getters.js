export default {
    isModal: (state) => (...names) => {
        for (const name of names) {
            if (state.modals.findIndex(x => x.name == name) != -1) {
                return true;
            }
        }
        return false;
    },
    getModal:(state) => (name) => state.modals[state.modals.findIndex(x => x.name == name)],
};
