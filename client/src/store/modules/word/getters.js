export default {
    getWords: state => state.words,
    getPaginationWords: state => state.pagination,
    getFiltersWord: state => state.filters,
    getWordLoading: state => state.loading,
    isFilteredWord: state => state.isFiltered,
}