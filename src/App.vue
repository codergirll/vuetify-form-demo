<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Demo</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 md6 lg4>
            <ItemList/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "App",
  components: {
    ItemList
  }
};
</script>
