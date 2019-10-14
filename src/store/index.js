import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [],
    newbies: null
  },
  actions: {
    createGroups(context) {
    fetch('http://localhost:3000/mystery_lunch_bot', {
    method: 'post'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
        context.commit('SET_GROUPS', jsonData)
        context.commit('NEWBIES_THIS_MONTH', jsonData)

      })
    }
  },
  mutations: {
    SET_GROUPS(state, groups) {
      state.groups = groups
    },
    NEWBIES_THIS_MONTH(state, groups) {
      if (groups.length === 0) {
        state.newbies = false
      } else {
        state.newbies = true
      }
    }
  },
})
