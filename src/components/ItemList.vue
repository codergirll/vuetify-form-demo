<template>
  <v-card>
    <v-list>
      <ItemListTile v-for="(item, index) in items" :key="index" :item="item"/>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import ItemListTile from "@/components/ItemListTile";

export default {
  components: {
    ItemListTile
  },
  computed: {
    ...mapState(["items"])
  }
};
</script>