import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { id: 1, name: "Aaron", age: 24, favoriteFood: "Macaroni and cheese" },
      { id: 2, name: "Betty", age: 31, favoriteFood: "Filet mignon" },
      { id: 3, name: "Carol", age: 19, favoriteFood: "Meatloaf" },
      { id: 4, name: "Damien", age: 40, favoriteFood: "Pizza" }
    ]
  },
  mutations: {
    SAVE_ITEM(state, item) {
      if (item.id > 0) {
        // update
        const index = state.items.findIndex(i => i.id == item.id);
        Vue.set(state.items, index, item);
      } else {
        // new
        const nextItemId = Math.max(...state.items.map(i => i.id)) + 1;
        item.id = nextItemId;
        state.items.push(item);
      }
    }
  },
  actions: {
    saveItem({ commit }, item) {
      commit('SAVE_ITEM', item);
    }
  }
})
