import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

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
      const url = 'https://api.tranggle.com/v2/mingle/courses/get_course_item.jsonp?mingleCode=SzActcWN5QXozxDixoG4zQ==&status=RECOMMEND&view_count=300&page=0&token=0A485F303C2CCC1332CAE46E50D72062C9A8290335D26E6D8998545C3F47317F9EC02E96E57F27F6&lon=&lat=&callback=callback&_=1583479339986'
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setDummyData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
