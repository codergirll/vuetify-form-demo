<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Demo</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <DessertList/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import DessertList from "@/components/DessertList";

export default {
  name: "App",
  components: {
    DessertList
  }
};
</script>
