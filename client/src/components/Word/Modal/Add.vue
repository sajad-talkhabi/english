<template>
  <basic-modal
    tag="form"
    @submit="submit"
    @open="openModal"
    width="1100"
    transition="slide-x-transition"
  >
    <template #header>
      <divider
        title="request details"
        sub-title="THE DETAILS YOU NEED"
      ></divider>
    </template>
    <template #default>
      <div class="px-6 px-md-14 mt-8 mb-11">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="title"
              dense
              outlined
              class="no-error-msg"
              color="black"
              v-model="form.title"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="description"
              dense
              outlined
              class="no-error-msg"
              color="black"
              v-model="form.description"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="form.relations"
              clearable
              :append-icon="null"
              hide-selected
              label="words Relations useful for better search"
              multiple
              persistent-hint
              small-chips
              dense
              outlined
              class="no-error-msg"
              color="black"
            >
              <template #selection="{ item }">
                <v-chip
                  label
                  color="grey lighten-2"
                  text-color="black"
                  small
                  @click:close="removeRelations(item)"
                  close
                  >{{ item }}</v-chip
                >
              </template>
            </v-combobox>
          </v-col>
        </v-row>
      </div>
    </template>
    <template #footer>
      <div class="px-0 px-md-3 pt-4 d-flex justify-center justify-md-end w-100">
        <v-btn width="200" color="grey darken-3" outlined type="submit">
          <v-icon>WMi-plus-linear</v-icon>
          add
        </v-btn>
      </div>
    </template>
  </basic-modal>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "modal_add_word",
  data: () => ({
    form: {},
  }),
  methods: {
    ...mapActions("word", ["addWord", "updateWord"]),
    openModal({ data }) {
      if (data) {
        this.form = { ...data };
      }
      console.log(this.form);
    },
    removeRelations(item) {
      this.form.relations.splice(this.form.relations.indexOf(item), 1);
      this.form.relations = [...this.form.relations];
    },
    async submit() {
      this.form["_id"]
        ? await this.updateWord(this.form)
        : await this.addWord(this.form);
      this.$_closeModal();
    },
  },
};
</script>