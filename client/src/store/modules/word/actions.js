import WordRepository from "@/abstraction/repository/wordRepository";
let repository = new WordRepository();
export default {
    async loadWords({ state, commit }) {
        try {
            commit("SET_LOADING_WORDS", true);
            let data = { pagination: state.pagination, filters: state.filters };
            const resource = await repository.index(data);
            commit("SET_WORDS", resource.data);
            commit("SET_PAGINATION", resource.pagination);
        } catch (e) {
            return e;
        } finally {
            commit("SET_LOADING_WORDS", false);
        }
    },
    async addWord({ commit }, payload) {
        const resource = await repository.store(payload);
        commit("ADD_WORD", resource);
        if (resource) return true;
    },
    async updateWord({ commit }, data) {
        const resource = await repository.update(data);
        commit("UPDATE_WORD", resource);
    },
}