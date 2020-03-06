import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default new Vuex.Store({
  state: {
    dummyData: []
  },
  mutations: {
    setDummyData (state, data) {
      state.dummyData = data
    }
  },
  actions: {
    // dummy data test
    loadDummyData ({ state, commit }) {
      axios
        .get('url')
        .then(response => {
          console.log('axios start')
          // commit('setDummyData', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
