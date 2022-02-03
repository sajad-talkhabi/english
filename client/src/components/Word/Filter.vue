<template>
  <v-form @submit.prevent="submit">
    <div class="mb-3">
      <v-text-field
        label="title"
        class="no-error-msg"
        v-model="filter.title.val"
        dense
        outlined
        color="black"
      ></v-text-field>
    </div>
    <div class="mb-3">
      <v-text-field
        label="description"
        class="no-error-msg"
        v-model="filter.description.val"
        dense
        outlined
        color="black"
      ></v-text-field>
    </div>
    <div class="mb-3">
      <v-text-field
        label="relation"
        class="no-error-msg"
        dense
        v-model="filter.relation.val"
        outlined
        color="black"
      ></v-text-field>
    </div>
    <v-row>
      <v-col cols="4" class="pr-0">
        <v-btn outlined small color="black"> clear </v-btn>
      </v-col>
      <v-col cols="8">
        <v-btn small color="black" dark depressed type="submit" class="w-100">
          <v-icon small dark>WMi-filter</v-icon>
          execute
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { cloneDeep } from "lodash";
const defaultFilter = {
  title: {
    type: "like",
    val: null,
  },
  description: {
    type: "like",
    val: null,
  },
  relation: {
    type: "like",
    val: null,
  },
};
export default {
  name: "filter",
  data: () => ({
    filter: {},
  }),
  computed: {
    ...mapGetters("word", ["getPaginationWords"]),
  },
  methods: {
    ...mapActions("word", ["loadWords"]),
    ...mapMutations("word", ["SET_FILTER_WORD", "SET_IS_FILTERED_WORD"]),
    submit() {
      this.SET_IS_FILTERED_WORD(true);
      this.SET_FILTER_WORD(this.filter);
      console.log(this.filter);
      this.loadWords();
    },
    clearFilter() {
      this.SET_IS_FILTERED_WORD(false);
      this.filter = cloneDeep(defaultFilter);
      this.submit();
    },
    loadPastFilter() {
      this.filter = cloneDeep({ ...defaultFilter });
    },
  },
  created() {
    this.loadPastFilter();
  },
};
</script>