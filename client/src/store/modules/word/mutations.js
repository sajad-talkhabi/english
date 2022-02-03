import Vue from "vue";
export default {
    SET_WORDS(state, payload) {
        Vue.set(state, "words", payload);
    },
    SET_PAGINATION(state, pagination) {
        pagination = { ...state.pagination, ...pagination };
        Vue.set(state, "pagination", pagination);
    },
    SET_FILTER_WORD(state, payload) {
        Vue.set(state, "filters", payload);
        state.pagination.page = 1
    },
    ADD_WORD(state, payload) {
        state.words.unshift(payload)
    },
    // DELETE_WORD(state, templateId) {
    //     const index = state.templates.findIndex((x) => x.id === templateId);
    //     state.templates.splice(index, 1);
    // },
    UPDATE_WORD(state, payload) {
        const index = state.words.findIndex((x) => x._id === payload._id);
        Vue.set(state.words, index, payload);
    },
    SET_LOADING_WORDS(state, payload) {
        Vue.set(state, 'loading', payload);
    },
    SET_IS_FILTERED_WORD(state, payload) {
        Vue.set(state, 'isFiltered', payload);
    },
};
