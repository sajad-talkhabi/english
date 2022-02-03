<template>
  <v-card outlined class="h-100">
    <div class="px-6 mt-4">
      <SectionTitle title="words" has-btn>
        <template #header-btn>
          <div class="mt-n2">
            <v-btn
              outlined
              color="black"
              width="200"
              @click="$_openModal('add_word')"
            >
              <v-icon>WMi-plus-linear</v-icon>
              add
            </v-btn>
          </div>
        </template>
      </SectionTitle>
    </div>
    <div class="px-6 py-4">
      <DataIterator
        :is-filtered="isFilteredWord"
        :loading="getWordLoading"
        :items="getWords"
        @pagination="changePagination"
        :pagination="getPaginationWords"
        class="row"
      >
        <template #loading>
          <Loading />
        </template>
        <template #no-items>
          <NoItems modal="add_word" />
        </template>
        <template #items="{ itemNumber, item }">
          <WordItem :item-number="itemNumber" :word="item"></WordItem>
        </template>
      </DataIterator>
    </div>
    <div class="text-center">
      <AddWordModal v-if="isModal('modal_add_word')" />
    </div>
  </v-card>
</template>
<script>
import WordItem from "./Item.vue";
import AddWordModal from "./Modal/Add.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    AddWordModal,
    WordItem,
  },
  computed: {
    ...mapGetters("word", [
      "getPaginationWords",
      "getWords",
      "getFiltersWord",
      "isFilteredWord",
      "getWordLoading",
    ]),
    ...mapGetters("modal", ["isModal"]),
  },
  methods: {
    ...mapActions("word", ["loadWords"]),
    ...mapMutations("word", ["SET_PAGINATION"]),
    changePagination(page) {
      console.log(page);
      if (this.getPaginationWords.page !== page) {
        this.SET_PAGINATION(page);
        this.loadWords();
      }
    },
  },
  created() {
    this.loadWords();
  },
};
</script>