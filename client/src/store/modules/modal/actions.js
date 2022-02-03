export default {
    __openModal({state}, data) {
        data.name = "modal_" + data.name;
        if (state.modals.findIndex((x) => x.name === data.name) === -1) {
            state.modals.push(data);
        }
    },
    $_closeModal({state}) {
        if (state.modals.length) {
            let last_data = [...state.modals].pop();

            if (state.modals.length > 1) {
                state.modals[state.modals.length - 2]["last_modal_data"] = last_data;
            }

            state.modals.pop();
        }
    },
};
