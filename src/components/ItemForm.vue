<template>
      <v-form>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md4 lg4>
              <v-text-field label="Name" v-model="item.name"/>
            </v-flex>
            <v-flex xs12 md4 lg4>
              <v-text-field label="Age" v-model="item.age"/>
            </v-flex>
            <v-flex xs12 md4 lg4>
              <v-text-field label="Favorite Food" v-model="item.favoriteFood"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
};
</script>