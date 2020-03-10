import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default new Vuex.Store({
  state: {
    TourInfoData: {},
    TourData: [],
    FoodData: [],
    LodgMentData: [],
    LeportsData: [],
    ShoppingData: []
  },
  mutations: {
    setTourInfoData (state, data) {
      state.TourInfoData = data.response.content
      console.log('tourinfo')
      console.log(data)
    },
    setTourData (state, data) {
      state.TourData = data.content.list
      console.log(state.TourData)
    },
    setFoodData (state, data) {
      state.FoodData = data.content.list
    },
    setLodgMentData (state, data) {
      state.LodgMentData = data.content.list
    },
    setLeportsData (state, data) {
      state.LeportsData = data.content.list
    },
    setShoppingData (state, data) {
      state.ShoppingData = data.content.list
    }
  },
  actions: {
    loadTourInfoData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/courses/get_course_item.jsonp?mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&status=&view_count=300&page=0&token=&lon=&lat='
      Vue
        .jsonp(url)
        .then(respnose => {
          console.log('jsonp get')
          console.log(respnose)
          commit('setTourInfoData', respnose)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadTourData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=39&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          commit('setTourData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadFoodData ({ stage, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=15&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setFoodData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadLodgMentData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=32&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setLodgMentData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadLeportsData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=28&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setLeportsData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadShoppingData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=38&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setShoppingData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
