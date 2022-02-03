<template>
  <v-col cols="12" sm="6" md="4">
    <v-card class="h-100">
      <v-card-title>{{ word.title }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="black--text">
            {{ word.description }}
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>some words in the family</v-card-title>

      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <!-- <Chip v-for="item in relations" :key="item.id" :text="item" /> -->
          <template v-if="word.relations.length">
            <v-chip v-for="item in word.relations" :key="item._id">{{
              item
            }}</v-chip>
          </template>
          <v-chip v-else>no relatoin</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          outlined
          @click.native="$_openModal('add_word', { data: word })"
        >
          update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    word: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>