<template>
  <v-list-tile>
    <v-list-tile-content>{{item.name}}</v-list-tile-content>
    <v-list-tile-action>
      <v-dialog v-model="dialog">
        <v-btn icon slot="activator">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
          <v-card-title class="headline">Edit Item</v-card-title>
          <v-card-text>
            <ItemForm :item.sync="editableItem"/>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn flat @click="dialog=false">Cancel</v-btn>
            <v-btn flat @click="save" color="primary">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { mapActions } from 'vuex';

import ItemForm from "@/components/ItemForm";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ItemForm
  },
  data() {
    return {
      dialog: false,
      editableItem: {}
    };
  },
  methods: {
    ...mapActions(['saveItem']),
    closeDialog() {
      this.dialog = false;
    },
    save() {
      debugger;
      this.saveItem(this.editableItem).then(() => this.closeDialog());
    }
  },
  watch: {
    dialog: function(show) {
      if (show) {
        this.editableItem = Object.assign({}, this.item);
      }
    }
  }
};
</script>