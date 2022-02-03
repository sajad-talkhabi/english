<template>
  <div class="pagination mt-10">
    <pagination-pages @change="changePage" :pagination="pagination" />

    <div class="info d-none d-md-block">
      items
      <span class="En Bold">{{
        `${pagination.pageStart ? pagination.pageStart : 0} - ${
          pagination.pageStop ? pagination.pageStop : 0
        }`
      }}</span>
      of
      <span class="En Bold">{{ pagination.itemsLength }}</span>
    </div>

    <div class="per-page-select">
      <v-tooltip top color="black" transition="fade-transition">
        <template v-slot:activator="{ on, attrs }">
          <span v-on="on" v-bind="attrs">
            <v-select
              :items="perPage"
              filled
              class="En Bold"
              append-icon="WMi-down-open"
              v-model="itemsPerPage"
            ></v-select>
          </span>
        </template>
        <span> تعداد آیتم در هر صفحه </span>
      </v-tooltip>
    </div>
  </div>
</template>
<script>
import PaginationPages from "./PaginationPages";
export default {
  data: () => ({}),
  components: {
    PaginationPages,
  },
  props: {
    perPage: {
      type: Array,
      default: () => [12, 24, 36, 48],
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getPaginationQuery(name) {
      return Number(this.$route.query[name]);
    },
    changePage(page) {
      let pagination = { ...this.pagination };
      pagination.page = page;
      this.$emit("pagination", pagination);
    },
  },
  computed: {
    itemsPerPage: {
      get() {
        return this.pagination.itemsPerPage;
      },
      set(value) {
        let pagination = { ...this.pagination };
        pagination.page = 1;
        pagination.itemsPerPage = value;
        this.$emit("pagination", pagination);
      },
    },
  },
};
</script>
<style scoped lang="scss">
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.pagination .info {
  font-family: "Montserrat-regular";
  background-color: #eee !important;
  padding: 5px 20px;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
}
.pagination .info .En {
  font-size: 20px;
}
</style>
<style lang="scss">
.pagination .per-page-select {
  width: 80px;
  margin-right: 20px;
}
.pagination .per-page-select .v-text-field__details {
  margin-bottom: 0px;
  display: none;
}
.pagination .per-page-select .v-input__slot {
  margin-bottom: 0px;
  min-height: 38px;
}
.pagination .per-page-select .v-input__append-inner {
  margin-top: 6px;
}
</style>