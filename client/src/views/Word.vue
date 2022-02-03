<template>
  <div>
    <div>
      <Divider title="words" subTitle="all words" />
    </div>
    <div class="mt-8">
      <v-card outlined class="mb-2">
        <v-breadcrumbs :items="breadcrumbsItems">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :to="item.to"
              class="text-subtitle-2 crumb-item"
              :disabled="item.disabled"
              exact
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-card>
      <v-row>
        <v-col cols="2">
          <SideBar>
            <template>
              <div>
                <WordFilter />
              </div>
            </template>
          </SideBar>
        </v-col>
        <v-col cols="10">
          <WordItems />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import WordItems from "@/components/Word/Items.vue";
import WordFilter from "@/components/Word/Filter";
import SideBar from "@/components/Global/Section/SideBar.vue";
export default {
  name: "word",
  components: {
    WordItems,
    WordFilter,
    SideBar,
  },
  data: () => ({
    breadcrumbsItems: [
      {
        text: "Home",
        link: true,
        exact: true,
        disabled: false,
        to: {
          name: "words",
          params: {
            paramName: "value",
          },
        },
      },
    ],
  }),
};
</script>