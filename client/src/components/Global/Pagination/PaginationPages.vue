<template>
  <div class="pages">
    <v-icon class="previous" @click="changePage(currentPage - 1)"
      >WMi-left-open</v-icon
    >
    <div v-for="(page, i) in pages" :key="i">
      <div
        v-if="page !== -1"
        class="number"
        :class="{ current: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </div>
      <div v-else class="three-dot">...</div>
    </div>
    <v-icon class="next" @click="changePage(currentPage + 1)"
      >WMi-right-open
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "PaginationPages",
  props: {
    value: {
      type: Number,
      default: 1,
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.pageCount) this.$emit("change", page);
    },
  },
  computed: {
    pageCount() {
      return this.pagination.pageCount;
    },
    currentPage() {
      return this.pagination.page;
    },
    pages() {
      let pagesList = [];
      if (this.pageCount <= 5) {
        for (let i = 1; i <= this.pageCount; i++) {
          pagesList.push(i);
        }

        return pagesList;
      }

      for (let i = 1; i <= this.pageCount; i++) {
        if (
          i === this.currentPage ||
          i === this.currentPage + 1 ||
          i === this.currentPage - 1 ||
          i <= 2 ||
          i === this.pageCount
        ) {
          pagesList.push(i);
        }
      }

      if (
        this.currentPage !== pagesList[0] &&
        this.currentPage !== pagesList[1] &&
        this.currentPage !== pagesList[2] &&
        this.currentPage !== 4
      ) {
        pagesList.splice(2, 0, -1);
      }

      if (
        this.currentPage !== pagesList[pagesList.length - 1] &&
        this.currentPage !== pagesList[pagesList.length - 1] - 1 &&
        this.currentPage !== pagesList[pagesList.length - 1] - 2
      ) {
        pagesList.splice(pagesList.length - 1, 0, -1);
      }

      return pagesList;
    },
  },
};
</script>

<style scoped>
.pages {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 5px 10px;
}
.pages .number {
  font-family: "Montserrat-extrabold", sans-serif;
  padding: 0px 12px;
  border-left: 1px solid #eeeeee;
  transition: 0.2s;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.pages .number:last-of-type {
  border-left: none;
}
.pages .number.current {
  background-color: #000;
  color: #fff;
}

.pages .next,
.pages .previous {
  margin: 0px 12px;
  transition: 0.2s;
  font-size: 20px;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
}

.pages .number:hover,
.pages .next:hover,
.pages .previous:hover {
  background-color: #000;
  color: #fff;
}

.pages .three-dot {
  margin: 0px 10px;
  padding: 0px 5px;
}
</style>
