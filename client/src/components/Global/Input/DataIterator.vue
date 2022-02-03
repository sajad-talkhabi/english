<template>
  <div :class="{ isLoading: loading }">
    <template v-if="loading">
      <slot name="loading">
        <Loading />
      </slot>
    </template>
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-if="!loading && items.length">
      <slot
        name="items"
        :item="item"
        v-for="(item, i) in items"
        :index="i"
        :itemNumber="pagination ? pagination.pageStart + i : i + 1"
      />
    </template>
    <template v-if="!items.length">
      <slot name="items-container"> </slot>
    </template>
    <template v-if="!loading && !isFiltered && !items.length">
      <slot name="no-items">
        <!-- todo : fix -->
        <no-items
          src="/images/Global/Animated/Product.gif"
          title=""
          themeColor="product"
          :hasBtn="false"
        />
      </slot>
    </template>
    <template v-if="!loading && isFiltered && !items.length">
      <slot name="no-results">
        <!-- todo : fix -->
        <no-items
          src="/images/Global/Animated/NoResult.gif"
          textFa=" no items found! "
          textEn=" Sorry, No Items Found! "
          themeColor="product"
          :hasBtn="false"
        />
      </slot>
    </template>
    <pagination
      v-if="items.length && !loading"
      :pagination="pagination"
      @pagination="$emit('pagination', $event)"
    ></pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Global/Pagination/Pagination.vue";
export default {
  name: "data-iterator",
  components: {
    Pagination,
  },
  props: {
    pagination: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isFiltered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.isLoading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
